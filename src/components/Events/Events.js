import React from 'react';
import volunteerOptions from '../../FakeData/volunteers';

const Events = () => {
    const fakeData = volunteerOptions;
    // console.log(fakeData)

    const handleVolunteer = () => {
        fetch('http://localhost:4200/addVoptions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fakeData)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
        })
    }
    return (
        <div>
            <h1>This is volunteer events</h1>
            <button onClick={handleVolunteer}>Add volunter category</button>
        </div>
    );
};

export default Events;