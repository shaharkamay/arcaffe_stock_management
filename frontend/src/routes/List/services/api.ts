import { ItemI } from '../../../@types';
import { api } from '../../../utils';

const fetchItems = async () => await api.get('/items');
const addItem = async (item: ItemI) => await api.post('/items', item);
const updateItem = async ({id, ...item}: ItemI) => await api.put(`/items/${id as string}`, item);
const deleteItem = async ({id}: {id: string}) => await api.delete(`/items/${id}`);

export default {
  fetchItems,
  addItem,
  updateItem,
  deleteItem
};