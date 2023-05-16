import React from 'react';
import {useFormik} from 'formik'
import * as Yup from 'yup'

const BookingForm = (props) => {

    const formik = useFormik({
        initialValues:{
            date:'',
            time:'',
            guest:0,
            occasion:''
        },
        onSubmit:(values) => {
            props.submitForm(values)
        },
        validationSchema: Yup.object({
            date: Yup.string().required('This field is required'),
            time: Yup.string().required('This field is required'),
            guest: Yup.number().required('This field is required')
            .min(1,"You must invite at least one person")
            .max(10,"You can invite a maximum of 10 people"),
            occasion: Yup.string().required('This field is required')
        })
    })


    return (
        <section className='grid'>
            <div className='grid container'>
                <form className='container form' onSubmit={formik.handleSubmit}>
                    <h1>Booking Table</h1>
                    <div className='form-group'>
                        <label className='form-label' htmlFor="res-date">Choose date :</label>
                        <div className='form-control'>
                            <input className='form-input' type="date" id="res-date"
                             {...formik.getFieldProps('date')}
                             onChange={(e) =>{
                                formik.handleChange(e)
                                props.updateAvailable(e)
                             }}/>
                            {formik.errors.date && formik.touched.date? <div className='form-error'>{formik.errors.date}</div>: null}
                        </div>
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor="res-time">Choose time :</label>
                        <div className='form-control'>
                            <select className='form-select' id="res-time"
                            {...formik.getFieldProps('time')} 
                                >
                                <option value='choose time'>Choose time</option>
                                {props.availableTimes.map((time, index) => {
                                    return <option key={index} value={time}>{time}</option>
                                })}
                            </select>
                            {formik.errors.time && formik.touched.time? <div className='form-error'>{formik.errors.time}</div>: null}
                        </div>
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor="guests">Number of guests :</label>
                        <div className='form-control'>
                            <input className='form-input' type="number" id="guests" 
                            {...formik.getFieldProps('guest')}/>
                            {formik.errors.guest && formik.touched.guest? <div className='form-error'>{formik.errors.guest}</div>: null}
                        </div>
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor="occasion">Occasion :</label>
                        <div className='form-control'>
                            <select className='form-select' id="occasion" value='Birthday'
                            {...formik.getFieldProps('occasion')} >
                                <option value='choose time'>Choose occasion</option>
                                <option value='Birthday'>Birthday</option>
                                <option value='Anniversary'>Anniversary</option>
                            </select>
                            {formik.errors.occasion && formik.touched.occasion? <div className='form-error'>{formik.errors.occasion}</div>: null}
                        </div>
                    </div>
                    <input className='button' type="submit" value="Make Your reservation"></input>
                </form>
            </div>
        </section>
    );
};

export default BookingForm;