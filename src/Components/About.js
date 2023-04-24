import React from 'react';
import MarioA from '../icons_assets/Mario and Adrian A.jpg'
import MarioB from '../icons_assets/Mario and Adrian b.jpg'

const About = () => {
    return (
        <div className='grid About'>
            <div className='container flex-space-between'>
                <div className='AboutPresentation'>
                    <h1>Little Lemon</h1>
                    <h3 style={{margin: 0}}>Chicago</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                        dolore eu fugiat nulla pariatur.
                    </p>
                </div>
                <div className='AboutImage'>
                    <img src={MarioB} style={{width:200, height:210}} alt=''/>
                    <img src={MarioA} style={{width:200, height:210}} alt=''/>
                </div>
            </div>
        </div>
    );
};

export default About;