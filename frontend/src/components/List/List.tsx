import React from 'react';
import Item from './Item/Item';
import './list.css';

const List = () => {
    return (
        <div className='col list'>
            {
                [1, 1, 1, 1, 1, 1].map((item, i) => (<Item key={i} />))
            }
        </div>
    );
};

export default List;