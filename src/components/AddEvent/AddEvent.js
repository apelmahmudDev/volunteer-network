import React from 'react';
import './AddEvent.css';
import { useForm } from "react-hook-form";

const AddEvent = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        data.bgColor = 'bg-info';
        // INSERT EVENT IN THE DATABASE
        fetch('https://sleepy-spire-06659.herokuapp.com/addEvent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(event => {
            alert('Your event inserted successfully')
        })
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)} className="event-form">
            
            <input name="name" ref={register({ required: true })} className="form-control" placeholder="Event Name"/>
            {errors.name && <span>Name is required</span>}

            <input name="id" ref={register({ required: true })} className="form-control" placeholder="Event specific Id (min 8 charecter)"/>
            {errors.id && <span>Id is required</span>}

            {/* <div><label>Event Image</label></div>
            <input type="file" name="img" ref={register} /> */}
            
            <input className="btn btn-primary" type="submit" />
            </form>
        </div>
    );
};

export default AddEvent;