import React, { FormEventHandler } from 'react';

const MobileNav = ({ onClick }: { onClick: FormEventHandler }) => {
  return (
    <div className="mobile-nav">
      <button className="nav-toggle" onClick={onClick}>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
      </button>
    </div>
  );
};

export default MobileNav;
