import React from 'react';
import './VolunteerActivities.css';

const VolunteerActivities = (props) => {
    const {volunteerOption, photo, date} = props.volunteer;
    return (
        <>
            <div className="activity-item">
                <img src={photo} alt="" className="w-25"/>
                <div className="activity-describe">
                    <h3>{volunteerOption}</h3>
                    <p><strong>{date}</strong></p>
                    <div><button className="btn activity-btn">Cancel</button></div>
                </div>
            </div>
        </>
    );
};

export default VolunteerActivities;