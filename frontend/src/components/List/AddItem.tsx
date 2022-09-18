import React, {useState} from 'react';
import Button from '../Button/Button';
import {ItemI} from '../../@types';

const AddItem = ({stockList, setStockList}): JSX.Element => {
    const [itemName, setItemName] = useState("");
    
    const addItemToList = (e) => {
        const newItem = {
            name: itemName,
            count: 1
        };
        setStockList(stockList => [...stockList, newItem]);
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