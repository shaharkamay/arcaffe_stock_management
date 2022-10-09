import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import api from './services/api';
import { createQueryKeyStore } from '@lukemorales/query-key-factory';
import { UpdateWithAggregationPipeline } from 'mongoose';

export const queryKeys = createQueryKeyStore({
  items: null,
});

export const useItemsQuery = () =>
  useQuery(queryKeys.items._def, api.fetchItems);

export const useItemsMutations = () => {
  const queryClient = useQueryClient();

  const onSuccess = () => queryClient.invalidateQueries(queryKeys.items._def);

  const addItemMutation = useMutation(api.addItem, {
    onSuccess,
  });

  const updateItemMutation = useMutation(
    (params: { id: string; update: UpdateWithAggregationPipeline }) =>
      api.updateItem(params),
    {
      onSuccess,
    }
  );

  const updateItemsMutation = useMutation(
    (params: { itemIds: string[]; update: UpdateWithAggregationPipeline }) =>
      api.updateItems(params),
    {
      onSuccess,
    }
  );

  const deleteItemMutation = useMutation(api.deleteItem, {
    onSuccess,
  });

  return {
    addItemMutation,
    updateItemMutation,
    updateItemsMutation,
    deleteItemMutation,
  };
};
