import React from 'react';
import ImageHero from '../icons_assets/restauranfood.jpg'
import {useNavigate} from 'react-router-dom'


const HeroSection = () => {

    const navigate = useNavigate()
    
    return (
        <section className='grid HeroSection'>
            <div className='container'>
                <div className='flex-space-between'>
                    <div className='HeroPresentation'>
                        <h1>Little Lemon</h1>
                        <h3 style={{margin: 0}}>Chicago</h3>
                        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served eith modern twist</p>
                        <button className='button' onClick={() => navigate('/booking')}>Reserve a Table</button>
                    </div>
                    <img src={ImageHero} style={{width: 290, height: 270, borderRadius: 10}} alt='presentation little lemon'/>
                </div>
                
            </div>
        </section>
    )
};

export default HeroSection;