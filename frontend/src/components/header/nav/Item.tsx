import React from 'react';

const Item = ({ children }: {children: React.ReactNode}): JSX.Element => {
    return (
        <li>
            {children}
        </li>
    );
};

export default Item;