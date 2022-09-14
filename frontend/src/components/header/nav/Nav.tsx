import React from 'react';
import List from './List';

const Nav = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLUListElement> & React.HTMLAttributes<HTMLUListElement>): JSX.Element => {
    return (
        <nav {...props}>
            <List className='row navbar-list' />
        </nav>
    );
};

export default Nav;