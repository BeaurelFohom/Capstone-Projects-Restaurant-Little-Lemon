import React from 'react';
import Logo from '../icons_assets/Logo.svg'
import Nav from './Nav';

const Header = () => {
    return (
        <header>
            <img src={Logo} alt='Logo little-lemon'></img>
            <Nav/>
        </header>
    );
};

export default Header;
