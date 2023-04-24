import React from 'react';
import Logo from '../icons_assets/Logo.svg'
import Nav from './Nav';


const Header = () => {
    return (
        <header className='grid'>
            <div className='container flex-space-between'>
                <img src={Logo} alt='Logo little-lemon'></img>
                <Nav/>
            </div>
        </header>
    );
};

export default Header;
