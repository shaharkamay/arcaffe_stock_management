import React, { useState } from 'react';
import { Button as ButtonOrigin } from '../../components';
import { ItemI } from '../../@types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 90%;
  gap: 0.5rem;
  margin: 0 auto;
`;

const Input = styled.input`
  height: 3rem;
  width: 70%;
  font-size: 1rem;
  border-radius: 0.4rem;
  border: 1px solid var(--clr-quinary);
  margin-top: 0.5rem;
  padding: 0.7rem;
`;

const Button = styled(ButtonOrigin)`
  padding: 1rem;
  border: none;
  border-radius: 0.4rem;
  background-color: var(--clr-secondary);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  width: 30%;
  margin: 0.5rem 0;
`;

const AddItem = ({
  stockList,
  setStockList,
}: {
  stockList: ItemI[];
  setStockList: React.Dispatch<React.SetStateAction<ItemI[]>>;
}): JSX.Element => {
  const [itemName, setItemName] = useState<string>('');

  const addItemToList = () => {
    if (!itemName) return;
    if (stockList.find((i) => i.name === itemName)) return;

    const newItem: ItemI = {
      name: itemName,
      count: 1,
      amountNeeded: 1,
    };
    setStockList((prevStockList: ItemI[]) => {
      const updatedStockList = [...prevStockList, newItem];
      localStorage.setItem('stockList', JSON.stringify(updatedStockList));
      return updatedStockList;
    });
    setItemName('');
  };

  return (
    <Wrapper>
      <Input
        type="text"
        onChange={(e) => {
          setItemName(e.target.value);
        }}
        value={itemName}
        placeholder="Add new item"
      />
      <Button onClick={addItemToList}>Add</Button>
    </Wrapper>
  );
};

export default AddItem;