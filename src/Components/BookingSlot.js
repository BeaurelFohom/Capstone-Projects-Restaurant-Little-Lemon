import React from 'react';

const BookingSlot = (props) => {
    return (
        <div className='BookingSlot'>
            <span>{props.time}</span>
        </div>
    );
};

export default BookingSlot;