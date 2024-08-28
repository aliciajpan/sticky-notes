// hi
import express from 'express';
import cors from 'cors';
import personRouter from './routes/person.js';
import formRouter from './routes/form.js';

const app = express();

app.use(cors());




//Mount Routers

app.use('/form', formRouter);

app.use('/person', personRouter);

app.listen(8080, () => {
	console.log('Listening on 8080');
});
