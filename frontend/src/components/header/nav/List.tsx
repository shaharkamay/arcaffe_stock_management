import React from 'react';
import Item from './Item';


const List = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLUListElement> & React.HTMLAttributes<HTMLUListElement>): JSX.Element => {
    return (
      <ul {...props}>
        <Item to="/arcaffe_stock_management">Home</Item>
        <Item to="/arcaffe_stock_management/login">Login</Item>
        <Item to="/arcaffe_stock_management/summary">Summary</Item>
      </ul>
    );
};

export default List;