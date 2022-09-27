import React from 'react';
import { NavLink } from 'react-router-dom';

const Item = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <li>
      <NavLink className="navbar-link" to={to}>
        {children}
      </NavLink>
    </li>
  );
};

export default Item;