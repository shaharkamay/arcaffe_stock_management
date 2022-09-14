import React from 'react';
import Item from './Item';


const List = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLUListElement> & React.HTMLAttributes<HTMLUListElement>): JSX.Element => {
    return (
        <ul {...props}>
            <Item>Home</Item>
            <Item>Login</Item>
            <Item>Help</Item>
        </ul>
    );
};

export default List;