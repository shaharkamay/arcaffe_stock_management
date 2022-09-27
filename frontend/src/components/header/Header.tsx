import React, { useState } from 'react';
import Nav from './nav/Nav';
import '../../assets/styles/header.css';
import { useMediaQuery } from 'react-responsive';
import MobileNav from './nav/MobileNav';
import Logo from '../../assets/images/coffee-cup.svg';
import { Link } from 'react-router-dom';

const Header = (): JSX.Element => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const isTablet: boolean = useMediaQuery({ query: `(min-width: 700px)` });
  const handleNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  return (
    <header>
      <div className="container">
        <div className="header-logo-and-theme">
          {!isTablet && <MobileNav onClick={handleNavToggle} />}
          <Link className="logo navbar-link" to="/arcaffe_stock_management">
            <img src={Logo} />
          </Link>
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
