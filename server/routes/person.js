import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const personRouter = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

personRouter.get("/:id", (req, res) => {
    console.log(req.params);
    const personFile = fs.readFileSync(path.join(__dirname, "../data/notes.json"));
    const people = JSON.parse(personFile);

    res.json(people);
})

export default personRouter;

//sticky-notes\server\data\notes.json