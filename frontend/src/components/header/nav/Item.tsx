import React from 'react';

const Item = ({ children }: {children: React.ReactNode}): JSX.Element => {
    return (
      <li>
        <a className="navbar-link" href="#">
          {children}
        </a>
      </li>
    );
};

export default Item;