import React, {useReducer} from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import BookingFrom from '../Components/BookingFrom';
import HeroSection from '../Components/HeroSection'
import AvailableTimes from '../Components/AvailableTimes';

const BookingPage = () => {

    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }
    
    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());
    
        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };

    const submitAPI = function(formData) {
        return true;
    };

    const initializeTimes = () => {
        const date = new Date()
        const availableTimes = fetchAPI(date)
        return {selectedDate: date, availableTimes: availableTimes}
    }

    const update = (date) => {
        if (date) {
            const availableTimes = fetchAPI(new Date(date))
            return availableTimes
        }
        return;
    }

    const BookingReducer = (state, action) => {
        switch (action.type) {
            case 'update':
                const availableTimes = update(action.payload)
                if (availableTimes) {
                    return {...state, selectedDate:new Date(action.payload),  availableTimes: availableTimes}
                } else {
                    return {...state}
                }
                
            default:
                return state.availableTimes
        }
    }

    const [state, dispatch] = useReducer(BookingReducer, initializeTimes())

    const handleUpdateAvailable = (e) =>{
        dispatch({type: 'update', payload: e.target.value})
    }

    return (
        <>
            <Header/>
            <HeroSection/>
            <BookingFrom value = {state.selectedDate.toJSON().split('T')[0]} 
            availableTimes = {state.availableTimes} updateAvailable = {handleUpdateAvailable}/>
            <AvailableTimes value = {state.selectedDate.toJSON().split('T')[0]} 
            availableTimes = {state.availableTimes} handleUpdateAvailable = {handleUpdateAvailable}/>
            <Footer/>
        </>
    );
};

export default BookingPage;