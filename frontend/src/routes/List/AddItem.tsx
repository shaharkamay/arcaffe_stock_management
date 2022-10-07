import React, { useState } from 'react';
import { Button as ButtonOrigin } from '../../components';
import { ItemI } from '../../@types';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useItemsMutations } from './queries';

const Wrapper = styled.form`
  display: flex;
  width: 90%;
  gap: 0.5rem;
  margin: 0 auto;
  padding: 1rem 0;
`;

const Input = styled.input`
  height: 3rem;
  width: 70%;
  font-size: 1rem;
  border-radius: 0.4rem;
  border: 1px solid var(--clr-quinary);
  background-color: var(--background-secondary);
  color: var(--foreground);
  padding: 0.7rem;
`;

const Button = styled(ButtonOrigin)`
  padding: 1rem;
  border: none;
  border-radius: 0.4rem;
  background-color: var(--clr-primary);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  width: 30%;
`;

const AddItem = ({
  stockList,
  setStockList,
}: {
  stockList: ItemI[];
  setStockList: React.Dispatch<React.SetStateAction<ItemI[]>>;
}): JSX.Element => {
  const { t } = useTranslation();

  const {addItemMutation} = useItemsMutations();

  const [itemName, setItemName] = useState<string>('');

  const addItemToList = () => {
    if (!itemName) return;
    addItemMutation.mutate({
      name: itemName,
      amount: 1,
      amountNeeded: 1,
    });
    
    if (stockList.find((i) => i.name === itemName)) return;

    const newItem: ItemI = {
      name: itemName,
      amount: 1,
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
        placeholder={t('item.addNewItem')}
        
      />
      <Button type='submit' onClick={addItemToList}>{t('item.add')}</Button>
    </Wrapper>
  );
};

export default AddItem;
