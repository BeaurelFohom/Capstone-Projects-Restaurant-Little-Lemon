import React from 'react';
import Header from '../Components/Header';
import About from '../Components/About';
import BookingFrom from '../Components/BookingFrom';
import HeroSection from '../Components/HeroSection'

const BookingPage = () => {
    return (
        <>
            <Header/>
            <HeroSection/>
            <BookingFrom/>
            <About/>
        </>
    );
};

export default BookingPage;