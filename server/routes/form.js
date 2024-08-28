import express, { json } from 'express';
import { v4 } from 'uuid';
import fs from 'node:fs';

const formRouter = express.Router();
formRouter.use(express.json());

formRouter.post('/', (req, res) => {
	const { name, signed, color, message } = req.body;
	const id = v4();

	const newMessage = {
		id,
		signed,
		color,
		message,
	};

    const newData = getPersonMessages(name, newMessage);
    fs.writeFileSync("./data/notes.json", JSON.stringify(newData));
    res.status(201).send(newData);
});


function getPersonMessages(name, newMessage){
    const notesFile = fs.readFileSync("./data/notes.json");
    const people = JSON.parse(notesFile);
    const individualPerson = people.find((person)=> person.name === name);
    const personMessages = individualPerson.messages;
    personMessages.push(newMessage);
    individualPerson.messages = personMessages;
    people.forEach((person)=>{person.name === name ? person = individualPerson : person});
    return people;
}


export default formRouter;
