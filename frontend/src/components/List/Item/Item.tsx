import React from 'react';
import Button from '../../Button/Button';

const Item = ({item, onItemClick, selectedItems, stockList, setStockList}: {item:  {[key]: number}, onItemClick: () => void, selectedItems: [{[key]: number}]}): JSX.Element => {
    const itemName = Object.keys(item)[0];
    const itemCount = item[itemName];

    const alterItemCount = (amount) => {
        const updatedStockList = stockList.map((i) => {
            const itemObj = (Object.keys(i)[0] === Object.keys(item)[0]) ? item : -1;
            console.log(itemObj);
            if(!(itemObj === -1)) {
                itemObj[Object.keys(itemObj)[0]] = itemObj[Object.keys(itemObj)[0]] + amount;
            } else return i;
            return itemObj;
        
        });
        setStockList(updatedStockList);
        localStorage.setItem('stockList', JSON.stringify(updatedStockList));
    };

    return (
        <div className='list-item' style={{border: (selectedItems.filter(i => Object.keys(i)[0] === Object.keys(item)[0]).length > 0) ? '2px solid black' : '2px solid blue'}} onClick={(e) => onItemClick(e, item)}>
            <Button onClick={(e) => {
                e.stopPropagation();
                alterItemCount(-5);
            }}>-5</Button>
            <Button onClick={(e) => {
                e.stopPropagation();
                alterItemCount(-1);
            }}>-</Button>
            <div>
                <span>{itemName} </span>
                <span>{itemCount}</span>
            </div>
            <Button onClick={(e) => {
                e.stopPropagation();
                alterItemCount(1);
            }}>+</Button>
            <Button onClick={(e) => {
                e.stopPropagation();
                alterItemCount(5);
            }}>+5</Button>
        </div>
    );
};

export default Item;