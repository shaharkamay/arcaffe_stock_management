import ItemModel from '../models/item';
import { Item } from '../types';

const getAllItems = async () => {
  console.log('get all items service');
  const items = await ItemModel.find({});
  return items;
};

const addItem = async (item: Item) => {
  console.log('add item service');
  const newItem = await ItemModel.create(item);
  return newItem;
};

export default {
  addItem,
  getAllItems,
};
