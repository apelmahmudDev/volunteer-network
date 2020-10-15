import React from 'react';
import { useState } from 'react';
import volunteerOptions from '../../FakeData/volunteers';
import BookVolunteer from '../BookVolunteer/BookVolunteer';
import './Home.css';

const Home = () => {

    const fakeData = volunteerOptions;
    const [bookVolunters, setBookVolunteers] = useState(fakeData);

    return (
        <div>
            <div className="home-banner"></div>
            <div className="container">
                <div className="card-deck">
                    {
                        bookVolunters.map(item => <BookVolunteer volunteerItem={item}></BookVolunteer>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;