import React, {useState} from 'react';
import Item from './Item/Item';
import {ItemI} from '../../@types';
import AddItem from './AddItem';
import './list.css';

const localStockList: string = localStorage.getItem("stockList") || '[]';
const parsedStockList: ItemI[] = JSON.parse(localStockList) as ItemI[];
const List = () => {
    const [stockList, setStockList] = useState<ItemI[]>(parsedStockList);
    
    const [selectedItems, setSelectedItems] = useState<ItemI[]>([]);
    const onItemClick = (e: React.MouseEvent<HTMLElement>, item: ItemI) => {
        if (selectedItems.find((i) => i.name === item.name)) {
            setSelectedItems(selectedItems.filter(i => i.name !== item.name));
            return;
        }
        setSelectedItems((prev) => [...prev, item]);
    };

    return (
        <div className='col list'>
            {
                stockList.map((item, i) => (<Item key={i} stockList={stockList} setStockList={setStockList} item={item} onItemClick={onItemClick} selectedItems={selectedItems} />))
            }
            <AddItem stockList={stockList} setStockList={setStockList} />
            
        </div>
    );
};

export default List;