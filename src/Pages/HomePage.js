import React from 'react';
import Header from '../Components/Header';
import HeroSection from '../Components/HeroSection';
import Special from '../Components/Special';
import Testimonials from '../Components/Testimonials'
import About from '../Components/About';
import Footer from '../Components/Footer';

const HomePage = () => {
    return (
        <>
            <Header/>
            <HeroSection/>
            <Special/>
            <Testimonials/>
            <About/>
            <Footer/>
        </>
    );
};

export default HomePage;