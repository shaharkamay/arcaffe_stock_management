import React, {useState} from 'react';
import Item from './Item/Item';
import {ItemI} from '../../@types';
import AddItem from './AddItem';
import Button from '../Button/Button';
import './list.css';

const localStockList: string = localStorage.getItem("stockList") || '[]';
const parsedStockList: ItemI[] = JSON.parse(localStockList) as ItemI[];
const List = () => {
    const [stockList, setStockList] = useState<ItemI[]>(parsedStockList);
    
    const [selectedItems, setSelectedItems] = useState<ItemI[]>([]);
    const onItemClick = (e: React.TouchEvent<HTMLElement>, item: ItemI) => {
        if (selectedItems.find((i) => i.name === item.name)) {
            if ((e.target as HTMLTextAreaElement).className === 'default-btn') return;
            setSelectedItems(selectedItems.filter(i => i.name !== item.name));
            return;
        }
        setSelectedItems((prev) => [...prev, item]);
    };

    const removeSelectedItem = () => {
        const updatedStockList = stockList.filter(item => {
            for (let j = 0; j < selectedItems.length; j++) {
                if (selectedItems[j].name === item.name) {
                    setSelectedItems(prev => [...prev.filter(i => i.name !== item.name)]);
                    return false;

                }
            }
            return true;
        });
        localStorage.setItem('stockList', JSON.stringify(updatedStockList));
        setStockList(updatedStockList);
    };

    return (
        <div className='col list'>
            {
                stockList.map((item, i) => (<Item key={i} stockList={stockList} setStockList={setStockList} item={item} onItemClick={onItemClick} selectedItems={selectedItems} />))
            }
            {selectedItems.length <= 0 && <AddItem stockList={stockList} setStockList={setStockList} />}
            {selectedItems.length > 0 && <Button onClick={() => removeSelectedItem()}>Remove</Button>}
        </div>
    );
};

export default List;