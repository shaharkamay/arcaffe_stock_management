import express from 'express';
import cors from 'cors';
// import errorHandler from './error-handling/error-handler';
import apiRouter from './routes/api';
import { appController } from './controllers';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(express.static('./frontend/build'));

app.get('/', appController.render);
app.get('/summary', appController.render);

app.use('/api', apiRouter);

// app.use(errorHandler);

export default app;
