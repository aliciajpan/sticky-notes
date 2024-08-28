import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const personRouter = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

personRouter.get('/:id', (req, res) => {
	console.log(req.params);
	const personFile = fs.readFileSync(
		path.join(__dirname, '../data/notes.json')
	);
	const people = JSON.parse(personFile);

	const individualPerson = people.find(
		(person) => person.id === req.params.id
	);

	if (!individualPerson) {
		res.status(404).send('Person not found');
		return;
	}

	res.json(individualPerson);
});

export default personRouter;
