import React from 'react';
import GreekSalad from '../icons_assets/greeksalad.jpg';

const testimonials = [
    {
        name:'Sara Lopez',
        username:'Sara72',
        image: GreekSalad,
        comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,im ad'
    },
    {
        name:'Sara Lopez',
        username:'Sara72',
        image: GreekSalad,
        comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,im ad'
    },
    {
        name:'Joe Doe',
        username:'Johnny__',
        image: GreekSalad,
        comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,im ad'
    },
    {
        name:'Sara Lopez',
        username:'Sara72',
        image: GreekSalad,
        comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,im ad'
    }
]

const Testimonials = () => {
    return (
        <section className='grid Testimonials'>
            <div className='container'>
                <h1 style={{display:'flex', justifyContent:'center'}}>What our customers say!</h1>
                <div className='flex-space-between'>
                {
                    testimonials.map((tes, index) => {
                        return(
                            <div className='CardTestimonials flex-1' key={index}>
                                ⭐⭐⭐⭐⭐
                                <div className='CardTestimonialsHeader'>
                                    <img src={tes.image} style={{height:50, width:50, borderRadius:100}} alt=''/>
                                    <div>
                                        <h4 style={{margin:0}}>{tes.name}</h4>
                                        <span>{tes.username}</span>
                                    </div>
                                </div>
                                <p>{tes.comment}</p>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
