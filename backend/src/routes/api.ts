import express from 'express';
import itemRouter from './item';

const apiRoute = express.Router();

apiRoute.use('/items', itemRouter);

export default apiRoute;
