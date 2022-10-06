import mongoose, { Schema } from 'mongoose';
import { Item as ItemI } from '../types';

const ItemSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  amountNeeded: {
    type: Number,
    required: true,
  },
});

ItemSchema.set('toJSON', {
  transform: (_, returnedObject) => {
    returnedObject.id = <string>returnedObject._id.toString();
    delete returnedObject._id;
  },
});

const Item = mongoose.model<ItemI>('Item', ItemSchema);
export default Item;
