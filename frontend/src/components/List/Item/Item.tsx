import React from 'react';
import Button from '../../Button/Button';
import {ItemI} from '../../../@types';
import useLongPress from '../../../hooks/useLongPress';

const Item = ({
    item, 
    onItemClick, 
    selectedItems, 
    stockList, 
    setStockList
}: {
    item:  ItemI, 
    onItemClick: (e: React.TouchEvent<HTMLElement>, item: ItemI) => void, 
    selectedItems: ItemI[], 
    stockList: ItemI[], 
    setStockList: React.Dispatch<React.SetStateAction<ItemI[]>>
}): JSX.Element => {
    const onLongPress = (e: React.TouchEvent<HTMLElement>) => {
        onItemClick(e, item);
    };
    
    const onClick = (e: React.TouchEvent<HTMLElement>) => {
        if (selectedItems.length > 0) {
            onItemClick(e, item);
        }
    };

    const defaultOptions = {
        shouldPreventDefault: true,
        delay: 500,
    };
    const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions) as unknown as React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    
    const alterItemCount = (amount: number) => {
        const updatedStockList: ItemI[] = stockList.map((i) => {
            if (i.name === item.name) {
                const newTotal = ((item.count + amount) < 0) ? 0 : (item.count + amount);
                return {...item, count: newTotal};
            }
            return i;
        });
        setStockList(updatedStockList);
        localStorage.setItem('stockList', JSON.stringify(updatedStockList));
    };

    return (
        <div className='list-item' style={{border: (selectedItems.filter(i => i.name === item.name).length > 0) ? '2px solid blue' : '2px solid black'}} {...longPressEvent}>
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