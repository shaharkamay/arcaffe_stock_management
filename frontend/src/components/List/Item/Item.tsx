import React from 'react';
import Button from '../../Button/Button';
import {ItemI} from '../../../@types';

const Item = ({item, onItemClick, selectedItems, stockList, setStockList}: {item:  ItemI, onItemClick: () => void, selectedItems: ItemI[]}): JSX.Element => {
    const alterItemCount = (amount) => {
        const updatedStockList = stockList.map((i) => {
            if (i.name === item.name) {
                return {...item, count: item.count + amount};
            }
            return i;
        });
        setStockList(updatedStockList);
        localStorage.setItem('stockList', JSON.stringify(updatedStockList));
    };

    return (
        <div className='list-item' style={{border: (selectedItems.filter(i => i.name === item.name).length > 0) ? '2px solid blue' : '2px solid black'}} onClick={(e) => onItemClick(e, item)}>
            <Button onClick={(e) => {
                e.stopPropagation();
                alterItemCount(-5);
            }}>-5</Button>
            <Button onClick={(e) => {
                e.stopPropagation();
                alterItemCount(-1);
            }}>-</Button>
            <div>
                <span>{item.name} </span>
                <span>{item.count}</span>
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