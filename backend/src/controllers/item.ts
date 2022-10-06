import { NextFunction, Request, Response } from 'express';
import { itemService } from '../services';

const getAllItems = async (req: Request, res: Response, next: NextFunction) => {
  console.log('get all items controller');
  try {
    const items = itemService.getAllItems();
  } catch (err) {
    next(err);
  }
};

const addItem = async (req: Request, res: Response, next: NextFunction) => {
  console.log('add item controller');
  try {
    const item = itemService.addItem();
  } catch (err) {
    next(err);
  }
};

export default { getAllItems, addItem };
