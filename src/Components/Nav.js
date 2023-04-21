import React from 'react';

const navigation = [
    {
        link: 'Home',
        url: '/#home'
    },
    {
        link: 'About',
        url: '/#about'
    },
    {
        link: 'Menu',
        url: '/#menu'
    },
    {
        link: 'Reservations',
        url: '/#reservations'
    },
    {
        link: 'Order Online',
        url: '/#order-online'
    },
    {
        link: 'Login',
        url: '/#login'
    }
]

const Nav = () => {
    return (
        <nav>
            <ul className='menuList'>
                {navigation.map((nav, index) => {
                    return <li key={index}><a href={nav.url}>{nav.link}</a></li>
                })}
            </ul>
        </nav>
    );
};

export default Nav;