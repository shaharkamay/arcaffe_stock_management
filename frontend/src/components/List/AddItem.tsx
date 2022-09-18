import React, {useState} from 'react';
import Button from '../Button/Button';
const AddItem = (): JSX.Element => {
    const [itemName, setItemName] = useState("");
    
    const addItemToList = (e) => {
        const stockList = (localStorage.getItem("stockList") ? JSON.parse(localStorage.getItem("stockList")) as [{[key]: number}] : [{}]) as [{[key]: number}];
        const obj = {};
        obj[itemName] = 1;
        stockList.push(obj);
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