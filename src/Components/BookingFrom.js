import React from 'react';

const BookingFrom = () => {
    return (
        <div className='grid'>
            <div className='grid container'>
                <form className='container form'>
                    <h1>Booking Table</h1>
                    <div className='form-group'>
                        <label className='form-label' for="res-date">Choose date :</label>
                        <div className='form-control'>
                            <input className='form-input' type="date" id="res-date"/>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label className='form-label' for="res-time">Choose time :</label>
                        <div className='form-control'>
                            <select className='form-select' id="res-time ">
                                <option>17:00</option>
                                <option>18:00</option>
                                <option>19:00</option>
                                <option>20:00</option>
                                <option>21:00</option>
                                <option>22:00</option>
                            </select>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label className='form-label' for="guests">Number of guests :</label>
                        <div className='form-control'>
                            <input className='form-input' type="number" placeholder="1" min="1" max="10" id="guests"/>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label className='form-label' for="occasion">Occasion :</label>
                        <div className='form-control'>
                            <select className='form-select' id="occasion">
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </div>
                    </div>
                    <input className='button' type="submit" value="Make Your reservation"></input>
                </form>
            </div>
        </div>
    );
};

export default BookingFrom;