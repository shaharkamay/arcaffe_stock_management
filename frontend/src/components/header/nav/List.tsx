import React from 'react';
import Item from './Item';


const List = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLUListElement> & React.HTMLAttributes<HTMLUListElement>): JSX.Element => {
    return (
      <ul {...props}>
        <Item to="/">Home</Item>
        <Item to="/login">Login</Item>
        <Item to="/summary">Summary</Item>
      </ul>
    );
};

export default List;