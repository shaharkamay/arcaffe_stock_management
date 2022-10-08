import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import api from './services/api';
import { createQueryKeyStore } from '@lukemorales/query-key-factory';

export const queryKeys = createQueryKeyStore({
  items: null,
});

export const useItemsQuery = () => useQuery(queryKeys.items._def, api.fetchItems);

export const useItemsMutations = () => {
	const queryClient = useQueryClient();

	const onSuccess = () => queryClient.invalidateQueries(queryKeys.items._def);

  const addItemMutation = useMutation(api.addItem, {
    onSuccess
  });

  const updateItemMutation = useMutation(api.updateItem, {
    onSuccess
  });
  
  const updateItemsMutation = useMutation(api.updateItems, {
    onSuccess
  });

  const deleteItemMutation = useMutation(api.deleteItem, {
    onSuccess
  });

	return {addItemMutation, updateItemMutation, updateItemsMutation, deleteItemMutation};
};
