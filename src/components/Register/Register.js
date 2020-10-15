import React, { useContext, useState} from 'react';
import './Register.css';
import volunteerLogo from '../../images/volunteer-logo.png';
import { useForm } from "react-hook-form";
import { UserContext } from '../UserContext/UserContext';
import { Link, useParams } from 'react-router-dom';
import volunteerOptions from '../../FakeData/volunteers';
const Register = () => {
    const [user, setUser] = useContext(UserContext);
    const [volunteerInfo, setVolunteerInfo] = useState({
        isFilled: false,
        name: '',
        email: '', 
        date: '',
        description: '',
        volunteerOption: ''
    })
    console.log(volunteerInfo);

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        const {name, date, email, description, volunteerName } = data;
        const registeredForm = {
            isFilled: true,
            name: name,
            date: date,
            email: email,
            description: description,
            volunteerOption: volunteerName
        }
        
        setVolunteerInfo(registeredForm);
    }
        
    let { volunteerId } = useParams();

    const volunteerOption = volunteerOptions.find(options => options.id === volunteerId);

    return (
        <div>
           <div className="container text-center">
            <img src={volunteerLogo} alt="" className="my-5 volunteer-logo"/>
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
                                
                                <input name="volunteerName" defaultValue={volunteerOption.name} ref={register({ required: true })} placeholder="" className="form-control"/>
                                {errors.volunteerName && <span className="required-warning">Volunteer is required</span>}

                                <button type="submit" className="btn register-btn">Registration</button>
                                { volunteerInfo.isFilled &&
                                <Link to="/volunteer_activitise">
                                    <p className="text-success text-right mt-2"><strong>Click to see you activity</strong></p>
                                </Link> }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;