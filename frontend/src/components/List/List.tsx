import React, {useState} from 'react';
import Item from './Item/Item';
import AddItem from './AddItem';
import './list.css';

const List = () => {
    const [stockList, setStockList] = useState((localStorage.getItem("stockList") ? JSON.parse(localStorage.getItem("stockList")) as [{[key]: number}] : [{}]) as [{[key]: number}]);
    
    const [selectedItems, setSelectedItems] = useState([]);
    const onItemClick = (e, item) => {
        setSelectedItems((prev) => [...prev, item]);
    };

    return (
        <div className='col list'>
            {
                stockList.map((item, i) => (<Item key={i} stockList={stockList} setStockList={setStockList} item={item} onItemClick={onItemClick} selectedItems={selectedItems} />))
            }
            <AddItem />
            
        </div>
    );
};

export default List;