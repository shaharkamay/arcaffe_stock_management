import React, {useState} from 'react';
import Button from '../Button/Button';
import {ItemI} from '../../@types';

const AddItem = ({stockList, setStockList}: {stockList: ItemI[], setStockList: React.Dispatch<React.SetStateAction<ItemI[]>>}): JSX.Element => {
    const [itemName, setItemName] = useState<string>("");
    
    const addItemToList = () => {
        const newItem: ItemI = {
            name: itemName,
            count: 1
        };
        setStockList((prevStockList: ItemI[]) => [...prevStockList, newItem]);
        localStorage.setItem('stockList', JSON.stringify(stockList));
    };

    return (
        <>
            <input type='text' onChange={(e) => {setItemName(e.target.value);}} value={itemName} placeholder='Add new item' />
            <Button onClick={addItemToList}>Add</Button>
        </>
    );
};

export default AddItem;