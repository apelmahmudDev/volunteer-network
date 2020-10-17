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
        fetch('http://localhost:4200/loadVoptions')
        .then(res => res.json())
        .then(data => {
            setVolunteerOptions(data)
        })
    },[])

    return (
        <div>
            <div className="home-banner">
                <Navbar></Navbar>
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