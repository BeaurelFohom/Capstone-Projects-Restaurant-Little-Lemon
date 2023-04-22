import React from 'react';
import ImageHero from '../icons_assets/restauranfood.jpg'


const HeroSection = () => {
    return (
        <div className='HeroSection'>
            <div className='HeroPresentation'>
                <h1>Little Lemon</h1>
                <h3 style={{margin: 0}}>Chicago</h3>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served eith modern twist</p>
                <button className='button'>Reserve a Table</button>
            </div>
            <img src={ImageHero} style={{width: 220, height: 260, borderRadius: 10}} alt='presentation little lemon'/>
        </div>
    )
};

export default HeroSection;