import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BookVolunteer from '../BookVolunteer/BookVolunteer';
import Navbar from '../Navbar/Navbar';
import './Home.css';

const Home = () => {
    const [volunteerOptions, setVolunteerOptions] = useState([]);
    
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
            <div className="container">
                <div className="card-deck">
                    {
                        volunteerOptions.map(options => <BookVolunteer
                         options={options}
                         key={options.id}
                        ></BookVolunteer>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;