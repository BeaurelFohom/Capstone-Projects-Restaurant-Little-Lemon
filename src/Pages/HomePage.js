import React from 'react';
import Header from '../Components/Header';
import HeroSection from '../Components/HeroSection';
import Special from '../Components/Special';
import Testimonials from '../Components/Testimonials'
import About from '../Components/About';

const HomePage = () => {
    return (
        <>
            <Header/>
            <HeroSection/>
            <Special/>
            <Testimonials/>
            <About/>
        </>
    );
};

export default HomePage;