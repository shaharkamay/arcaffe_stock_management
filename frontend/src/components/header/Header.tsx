import React, { useRef, useState } from 'react';
import Nav from './nav/Nav';
import '../../assets/styles/header.css';
import { useMediaQuery } from 'react-responsive';
import MobileNav from './nav/MobileNav';
import Logo from '../../assets/images/arcaffe-logo.png';
import { Link } from 'react-router-dom';
import Theme from './Theme/Theme';
import useOnClickOutside from '../../hooks/useOnClickOutside';

const Header = (): JSX.Element => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const isTablet: boolean = useMediaQuery({ query: `(min-width: 700px)` });
  const handleNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const ref = useRef(null);

  useOnClickOutside(ref, () => setIsMobileNavOpen(false));

  return (
    <header ref={ref}>
      <div className="container">
        <div className="header-logo-and-theme">
          {!isTablet && <MobileNav onClick={handleNavToggle} />}
          <Link className="logo navbar-link" to="/" aria-label="Home">
            <img src={Logo} alt="Arcaffe logo" />
          </Link>
        </div>
        <div
          className={`header-navbar ${
            isMobileNavOpen || isTablet ? 'nav-visible' : ''
          }`}
        >
          <Nav />
          <Theme />
        </div>
      </div>
    </header>
  );
};

export default Header;
