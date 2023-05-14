import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const ConfirmedBooking = () => {
    return (
        <>
        <Header/>
        <section className='grid'>
            <div className='container'>
                <h2>Your reservation has been submitted<br/>Thank you !</h2>
            </div>
        </section>
        <Footer/>
        </>
    );
};

export default ConfirmedBooking;