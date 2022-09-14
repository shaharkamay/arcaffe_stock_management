import React from 'react';
import Nav from './nav/Nav';
import "../../assets/styles/header.css";
const Header = (): JSX.Element => {
    return (
        <header>
            <div className="container row">
                <div className='header-logo'>logo</div>
                <div className='header-navbar'>
                    <Nav />
                </div>
            </div>
        </header>
    );
};

export default Header;