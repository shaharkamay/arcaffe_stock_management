import express from 'express';
import { itemController } from '../controllers';

const itemsRouter = express.Router();

itemsRouter.post('/', itemController.addItem);

itemsRouter.get('/', itemController.getAllItems);

export default itemsRouter;
