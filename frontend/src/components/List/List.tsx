import React, {useState} from 'react';
import Item from './Item/Item';
import {ItemI} from '../../@types';
import AddItem from './AddItem';
import './list.css';


const List = () => {
    const [stockList, setStockList] = useState((localStorage.getItem("stockList") ? JSON.parse(localStorage.getItem("stockList")) as ItemI[] : [{}]) as ItemI[]);
    
    const [selectedItems, setSelectedItems] = useState([]);
    const onItemClick = (e, item) => {
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