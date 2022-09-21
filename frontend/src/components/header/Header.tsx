import React, { useState } from 'react';
import Nav from './nav/Nav';
import '../../assets/styles/header.css';
import { useMediaQuery } from 'react-responsive';
import MobileNav from './nav/MobileNav';
import Logo from '../../assets/images/coffee-cup.svg';

const Header = (): JSX.Element => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const isTablet = useMediaQuery({ query: `(min-width: 700px)` });
  const handleNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  return (
    <header>
      <div className="container row">
        <div className="header-logo-and-theme">
          {!isTablet && <MobileNav onClick={handleNavToggle} />}
          <a className="logo navbar-link" href="#">
            <img src={Logo} />
          </a>
        </div>
        <div
          className={`header-navbar ${
            isMobileNavOpen || isTablet ? 'nav-visible' : ''
          }`}
        >
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
