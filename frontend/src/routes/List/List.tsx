import React, { useState } from 'react';
import Item from './Item/Item';
import { ItemI } from '../../@types';
import AddItem from './AddItem';
import styled from 'styled-components';
import { useItemsMutations, useItemsQuery } from './queries';
import EditModeBar from '../../components/EditModeBar/EditModeBar';
import { UpdateWithAggregationPipeline } from 'mongoose';

const Wrapper = styled.div`
  --li-margin: 1rem;
  text-align: center;
`;

const List = () => {
  const {data} = useItemsQuery();
  const stockList = data?.data as ItemI[] | undefined;

  const {deleteItemMutation, updateItemsMutation} = useItemsMutations();

  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const onItemClick = (e: React.TouchEvent<HTMLElement>, item: ItemI) => {
    if (selectedItems.find((id) => id === item.id)) {
      if ((e.target as HTMLTextAreaElement).tagName === 'BUTTON') return;
      setSelectedItems(selectedItems.filter((id) => id !== item.id));
      return;
    }
    setSelectedItems((prev) => [...prev, item.id]);
  };

  const alterItemAmounts = (amount: number) => {
    const update = {
      $inc: { amount },
    } as unknown as UpdateWithAggregationPipeline;
    updateItemsMutation.mutate({
      itemIds: selectedItems,
      update,
    });
  };

  const removeSelectedItems = () => {
    selectedItems.forEach(id => deleteItemMutation.mutate({id}));
  };

  return (
    <Wrapper className="list">
      {/* rendering the edit bar if items have been selected */}
      {selectedItems.length ? <EditModeBar {...{selectedItems, setSelectedItems, removeSelectedItems}} /> : null}
      {stockList?.map((item, i) => (
        <Item
          key={i}
          item={item}
          onItemClick={onItemClick}
          selectedItems={selectedItems}
          alterItemAmounts={alterItemAmounts}
          isSelectedAmountLoading={updateItemsMutation.isLoading && selectedItems.includes(item.id)}
        />
      ))}
      {selectedItems.length <= 0 && (
        <AddItem />
      )}
    </Wrapper>
  );
};

export default List;
