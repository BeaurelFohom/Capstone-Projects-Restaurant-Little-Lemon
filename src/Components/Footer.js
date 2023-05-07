import React from 'react';
import { Link } from 'react-router-dom';
import restaurant from '../icons_assets/restaurant.jpg'

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
        url: '/#login'
    }
]

const Footer = () => {
    return (
        <footer className='grid Footer' style={{marginTop:'50px'}}>
            <div className='container flex-space-between'>
                <img src={restaurant} style={{width:'200px', height:'220px', borderRadius:'20px'}} alt=''/>
                <div>
                    <h2>Doormat Navigation</h2>
                    <ul>
                        {navigation.map((nav, index) => {
                            return (
                                <li key={index}>
                                    {nav.link === 'Reservations' || nav.link === 'Home'? <Link to={nav.url}>{nav.link}</Link> :  <a href={nav.url}>{nav.link}</a>}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <h2>Contact</h2>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                </div>
                <div>
                    <h2>Social Media Links</h2>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;