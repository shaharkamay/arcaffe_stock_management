import React, {useState} from 'react';
import Item from './Item/Item';
import {ItemI} from '../../@types';
import AddItem from './AddItem';
import Button from '../Button/Button';
import styled from 'styled-components';

const Wrapper = styled.div`
  --li-margin: 1rem;
  text-align: center;
`;

const RemoveButton = styled(Button)`
  padding: 1rem;
  border: none;
  border-radius: 0.4rem;
  background-color: var(--clr-secondary);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  width: 90%;
  margin: 0.5rem 0;
  background-color: red;
`;

const localStockList: string = localStorage.getItem('stockList') || '[]';
const parsedStockList: ItemI[] = JSON.parse(localStockList) as ItemI[];
const List = () => {
  const [stockList, setStockList] = useState<ItemI[]>(parsedStockList);

  const [selectedItems, setSelectedItems] = useState<ItemI[]>([]);
  const onItemClick = (e: React.TouchEvent<HTMLElement>, item: ItemI) => {
    if (selectedItems.find((i) => i.name === item.name)) {
      if ((e.target as HTMLTextAreaElement).tagName === 'BUTTON') return;
      setSelectedItems(selectedItems.filter((i) => i.name !== item.name));
      return;
    }
    setSelectedItems((prev) => [...prev, item]);
  };

  const removeSelectedItem = () => {
    const updatedStockList = stockList.filter((item) => {
      for (let j = 0; j < selectedItems.length; j++) {
        if (selectedItems[j].name === item.name) {
          setSelectedItems((prev) => [
            ...prev.filter((i) => i.name !== item.name),
          ]);
          return false;
        }
      }
      return true;
    });
    localStorage.setItem('stockList', JSON.stringify(updatedStockList));
    setStockList(updatedStockList);
  };

  return (
    <Wrapper className="list">
      {stockList.map((item, i) => (
        <Item
          key={i}
          stockList={stockList}
          setStockList={setStockList}
          item={item}
          onItemClick={onItemClick}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      ))}
      {selectedItems.length <= 0 && (
        <AddItem stockList={stockList} setStockList={setStockList} />
      )}
      {selectedItems.length > 0 && (
        <RemoveButton onClick={() => removeSelectedItem()}>Remove</RemoveButton>
      )}
    </Wrapper>
  );
};

export default List;