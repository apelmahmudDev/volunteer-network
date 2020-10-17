import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BookVolunteer from '../BookVolunteer/BookVolunteer';
import Navbar from '../Navbar/Navbar';
import Spinner from '../Spinner/Spinner';
import './Home.css';

const Home = () => {
    const [volunteerOptions, setVolunteerOptions] = useState([]);
    
    // READ ALL EVENTS FROM DATABASE
    useEffect(() => {
        fetch('https://sleepy-spire-06659.herokuapp.com/loadVoptions')
        .then(res => res.json())
        .then(data => {
            setVolunteerOptions(data)
        })
    },[])

    return (
        <div>
            <div className="home-banner">
                <Navbar></Navbar>
                <div className="row d-flex justify-content-center"
                 align-items="center">
                    <div className="col-md-6 mt-5">
                        <h2>I GROW BY HELPING PEOPLE IN NEED</h2>
                        <div className="d-flex mt-3">
                        <input type="text" className="form-control" placeholder="Search..."/>
                        <input type="submit" value="Search" className="btn btn-primary"/>
                        </div>
                    </div>
                </div>
            </div>
            {volunteerOptions.length > 0 ?  
            <div className="container">
                <div className="card-deck">
                    {
                        volunteerOptions.map(options => <BookVolunteer
                         options={options}
                         key={options.id}
                        ></BookVolunteer>)
                    }
                </div>
            </div> :
            <Spinner></Spinner>}
            
        </div>
    );
};

export default Home;