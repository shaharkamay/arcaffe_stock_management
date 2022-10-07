import React, { useState } from 'react';
import Item from './Item/Item';
import { ItemI } from '../../@types';
import AddItem from './AddItem';
import styled from 'styled-components';
import EditModeBar from '../../components/EditModeBar/EditModeBar';

const Wrapper = styled.div`
  --li-margin: 1rem;
  text-align: center;
`;

const List = () => {
  const localStockList: string = localStorage.getItem('stockList') || '[]';
  const parsedStockList: ItemI[] = JSON.parse(localStockList) as ItemI[];
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

  const removeSelectedItems = () => {
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

  const moveItem = ({
    fromIndex,
    toIndex,
  }: {
    fromIndex: number;
    toIndex: number;
  }) => {
    setStockList((prevStockList) => {
      const tempStockList = [...prevStockList];
      const item = tempStockList.splice(fromIndex, 1)[0];
      tempStockList.splice(toIndex, 0, item);
      localStorage.setItem('stockList', JSON.stringify(tempStockList));
      return tempStockList;
    });
  };

  return (
    <Wrapper className="list">
      {/* rendering the edit bar if items have been selected */}
      {selectedItems.length ? <EditModeBar {...{selectedItems, setSelectedItems, removeSelectedItems}} /> : null}
      {stockList.map((item, i) => (
        <Item
          key={i}
          index={i}
          stockList={stockList}
          setStockList={setStockList}
          item={item}
          onItemClick={onItemClick}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          moveItem={moveItem}
        />
      ))}
      {selectedItems.length <= 0 && (
        <AddItem stockList={stockList} setStockList={setStockList} />
      )}
    </Wrapper>
  );
};

export default List;
