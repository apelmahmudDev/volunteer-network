import React, { useContext, useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';
import { UserContext } from '../UserContext/UserContext';
import VolunteerActivities from '../VolunteerActivities/VolunteerActivities';
import './ActiveVolunteer.css';

const ActiveVolunteer = () => {
    const [user, setUser] = useContext(UserContext);
    const [volunteer, setVolunteer] = useState([]);

    // GET SPEACIFIC VOLUNTEER INFO BY EMAIL
    useEffect(() => {
        fetch(`https://sleepy-spire-06659.herokuapp.com/volunteer?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            setVolunteer(data);
        })
    },[])

    return (
        <div className="container">
            {volunteer.length > 0 ?
            <div className="row">
                <div className="col-md-12 active-volunteer">
                    {
                        volunteer.map(v => <VolunteerActivities
                        volunteer={v} 
                        key={v._id}>
                        </VolunteerActivities>)
                    }
                </div>
            </div>
            : <Spinner></Spinner>
            }
            
        </div>
    );
};

export default ActiveVolunteer;