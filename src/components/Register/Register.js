import React, { useContext, useEffect, useState} from 'react';
import './Register.css';
import volunteerLogo from '../../images/volunteer-logo.png';
import { useForm } from "react-hook-form";
import { UserContext } from '../UserContext/UserContext';
import { Link, useHistory, useParams } from 'react-router-dom';

const Register = () => {
    const [user, setUser] = useContext(UserContext);
    const [volunteer, setVolunteer] = useState({});
    let history = useHistory();

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        const {name, date, email, description, volunteerName } = data;
        const registeredForm = {
            isFilled: true,
            name: name,
            date: date,
            email: email,
            photo: volunteer.img,
            description: description,
            volunteerOption: volunteerName
        }

        fetch('http://localhost:4200/addVolunteer', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(registeredForm)
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                history.push("/volunteer_activitise");
            }
        })
    }
        
    let { volunteerId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4200/volunteer/${volunteerId}`)
        .then(res => res.json())
        .then(result => {
            setVolunteer(result)
        })
    },[volunteerId])

    return (
        <div>
           <div className="container text-center">
            <Link to="/"><img src={volunteerLogo} alt="" className="my-5 volunteer-logo"/></Link>
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center justify-content-center register-area">
                        <div style={{width:'100%'}}>
                            <h2 className="mb-5 register-header">Register as a Volunteer</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="register-form">
                                <input name="name" defaultValue={user.name} ref={register({ required: true })} placeholder="Full Name" className="form-control"/>
                                {errors.name && <span className="required-warning">Name is required</span>}
                                
                                <input name="email" defaultValue={user.email} ref={register({ required: true })} placeholder="Email" className="form-control"/>
                                {errors.email && <span className="required-warning">Email is required</span>}
                                
                                <input type="date" name="date" ref={register({ required: true })} placeholder="Date" className="form-control"/>
                                {errors.date && <span className="required-warning">Date is required</span>}
                                
                                <input name="description" ref={register({ required: true })} placeholder="Description" className="form-control"/>
                                {errors.description && <span className="required-warning">Description is required</span>}
                                
                                <input name="volunteerName" defaultValue={volunteer.name} ref={register({ required: true })} placeholder="" className="form-control"/>
                                {errors.volunteerName && <span className="required-warning">Volunteer is required</span>}

                                <button type="submit" className="btn register-btn">Registration</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;