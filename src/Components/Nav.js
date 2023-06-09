import React, {useState} from 'react';
import {Link} from 'react-router-dom'

const navigation = [
    {
        link: 'Home',
        url: '/'
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
        url: '/booking'
    },
    {
        link: 'Order Online',
        url: '/#order-online'
    },
    {
        link: 'Login',
        url: '/login'
    }
]

const Nav = () => {
    const [Index, setIndex] = useState(0)
    return (
        <nav>
            <ul className='menuList'>
                {navigation.map((nav, index) => {
                    return (
                            <li key={index} className={Index === index? 'active': ''} onClick={() => setIndex(index)}>
                                {nav.link === 'Reservations' || nav.link === 'Home'? <Link to={nav.url}>{nav.link}</Link> :  <a href={nav.url}>{nav.link}</a>}
                            </li>
                        )
                })}
            </ul>
        </nav>
    );
};

export default Nav;