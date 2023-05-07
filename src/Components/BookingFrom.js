import React, { useState } from 'react';

const BookingFrom = (props) => {
    const [Booking, setBooking] = useState({
        date:'',
        time:'',
        guest:0,
        occasion:''
    })

    const updateTime = (e) => {
        props.updateAvailable(e)   
        setBooking({
            ...Booking, date: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(Booking)
    }
    return (
        <section className='grid'>
            <div className='grid container'>
                <form className='container form' onSubmit={handleSubmit}>
                    <h1>Booking Table</h1>
                    <div className='form-group'>
                        <label className='form-label' htmlFor="res-date">Choose date :</label>
                        <div className='form-control'>
                            <input className='form-input' type="date" id="res-date" value={props.value} onChange={updateTime}/>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor="res-time">Choose time :</label>
                        <div className='form-control'>
                            <select className='form-select' id="res-time " onChange={(e) => {setBooking({
                                ...Booking, time: e.target.value})}}
                                >
                                {props.availableTimes.map((time, index) => {
                                    return <option key={index}>{time}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor="guests">Number of guests :</label>
                        <div className='form-control'>
                            <input className='form-input' type="number" placeholder="1" min="1" max="10" id="guests" onChange={(e) => {setBooking({
                                ...Booking, guest: e.target.value})}}/>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor="occasion">Occasion :</label>
                        <div className='form-control'>
                            <select className='form-select' id="occasion" onChange={(e) => {setBooking({
                                ...Booking, occasion: e.target.value})}}>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </div>
                    </div>
                    <input className='button' type="submit" value="Make Your reservation"></input>
                </form>
            </div>
        </section>
    );
};

export default BookingFrom;