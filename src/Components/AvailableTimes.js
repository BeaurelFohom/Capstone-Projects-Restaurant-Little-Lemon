import React from 'react';
import BookingSlot from './BookingSlot';

const AvailableTimes = (props) => {
    return (
        <section className='grid ListTime'>
            <div className='grid container'>
                <div className='container'>
                    <h1>Availables times</h1>
                    <div className='form-group'>
                        <label className='form-label' htmlFor="res-date">Date :</label>
                        <div className='form-control'>
                            <input className='form-input' type="date" id="res-date" value={props.value} onChange={props.handleUpdateAvailable}/>
                        </div>
                    </div>
                    <div style={{display: 'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'5px', marginTop:'5px'}}>
                        {props.availableTimes.map((time, index) => {
                            return <BookingSlot key={index} time = {time}/>
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AvailableTimes;