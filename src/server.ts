import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import { handleErrors } from './middlewares/handleErrors';

import { router } from './routes';

import './database';

const app = express();

app.use(express.json());

app.use(router);

app.use(handleErrors);

app.listen(3000, () => console.log('Server is running on port 3000 🚀 '));
