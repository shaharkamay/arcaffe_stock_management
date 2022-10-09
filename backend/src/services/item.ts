import { UpdateWithAggregationPipeline } from 'mongoose';
import ItemModel from '../models/item';
import { Item } from '../types';

const getAllItems = async () => {
  const items = await ItemModel.find({});
  return items;
};

const addItem = async (item: Item) => {
  const newItem = await ItemModel.create(item);
  return newItem;
};

const updateItem = async (
  itemId: string,
  update: UpdateWithAggregationPipeline
) => {
  const updatedItem = await ItemModel.updateOne({ _id: itemId }, update);
  return updatedItem;
};

const updateItems = async (
  itemIds: string[],
  update: UpdateWithAggregationPipeline
) => {
  const updatedItems = await ItemModel.updateMany(
    { _id: { $in: itemIds } },
    update
  );
  return updatedItems.modifiedCount;
};

const deleteItem = async (itemId: string) => {
  await ItemModel.findByIdAndDelete(itemId);
};

export default {
  addItem,
  getAllItems,
  updateItem,
  updateItems,
  deleteItem,
};
