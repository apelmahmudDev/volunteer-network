import React from 'react';
import { useHistory } from 'react-router-dom';
import './VolunteerActivities.css';

const VolunteerActivities = (props) => {
    const {volunteerOption, photo, date, _id} = props.volunteer;
    let history = useHistory();

    // DELETE VOLUNTEER FORM LIST
    const deleteVolunteer = (id) => {
        fetch(`https://sleepy-spire-06659.herokuapp.com/deleteVolunteer/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                alert('Your selected category has been deleted?')
                history.push("/home");
                history.push("/volunteer_activitise");
            }
        })
    }

    return (
        <div className="col mb-4 active-volunteer">
            <div className="card activity-card">
                <img src={photo} alt="" className="card-img w-25"/>
                <div className="activity-describe">
                    <h3 className="font-weight-normal">{volunteerOption}</h3>
                    <p><strong>{date}</strong></p>
                    <div><button onClick={() => deleteVolunteer(_id)} className="btn activity-btn">Cancel</button></div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerActivities;