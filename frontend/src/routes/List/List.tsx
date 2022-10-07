import React, { useState } from 'react';
import Item from './Item/Item';
import { ItemI } from '../../@types';
import AddItem from './AddItem';
import styled from 'styled-components';
import { useItemsMutations, useItemsQuery } from './queries';
import EditModeBar from '../../components/EditModeBar/EditModeBar';

const Wrapper = styled.div`
  --li-margin: 1rem;
  text-align: center;
`;

const List = () => {
  const {data} = useItemsQuery();
  const stockList = data?.data as ItemI[] | undefined;

  const {deleteItemMutation} = useItemsMutations();

  const [selectedItemsIds, setSelectedItemsIds] = useState<string[]>([]);
  const onItemClick = (e: React.TouchEvent<HTMLElement>, item: ItemI) => {
    if (selectedItemsIds.find((id) => id === item.id)) {
      if ((e.target as HTMLTextAreaElement).tagName === 'BUTTON') return;
      setSelectedItemsIds(selectedItemsIds.filter((id) => id !== item.id));
      return;
    }
    setSelectedItemsIds((prev) => [...prev, item.id]);
  };

  const removeSelectedItems = () => {
    selectedItemsIds.forEach(id => deleteItemMutation.mutate({id}));
  };

  return (
    <Wrapper className="list">
      {/* rendering the edit bar if items have been selected */}
      {selectedItemsIds.length ? <EditModeBar {...{selectedItemsIds, setSelectedItemsIds, removeSelectedItems}} /> : null}
      {stockList?.map((item, i) => (
        <Item
          key={i}
          item={item}
          onItemClick={onItemClick}
          selectedItemsIds={selectedItemsIds}
        />
      ))}
      {selectedItemsIds.length <= 0 && (
        <AddItem />
      )}
    </Wrapper>
  );
};

export default List;
