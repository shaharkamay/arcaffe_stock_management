import { NextFunction, Request, Response } from 'express';
import { itemService } from '../services';
import { Item } from '../types';

const getAllItems = async (req: Request, res: Response, next: NextFunction) => {
  console.log('get all items controller');
  try {
    const items = await itemService.getAllItems();
    res.json(items);
  } catch (err) {
    next(err);
  }
};

const addItem = async (req: Request, res: Response, next: NextFunction) => {
  console.log('add item controller');
  try {
    const item = req.body as Item;
    const addedItem = await itemService.addItem(item);
    res.status(201).json(addedItem);
  } catch (err) {
    next(err);
  }
};

export default { getAllItems, addItem };
