import React from 'react';
import './VolunteerList.css';
import { useState } from 'react';
import { useEffect } from 'react';
import TableRow from './TableRow';

const VolunteerList = () => {
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4200/volunteers')
        .then(res => res.json())
        .then(result => {
            setVolunteers(result)
        })
    },[])

	return (
		<div className="container">
			{volunteers.length > 0 ? 
            <div className="list-table">
                <table className="table table-borderless text-left">
                    <thead className="table-header text-secondary">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">Registration Date</th>
                            <th scope="col">Volunteer List</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            volunteers.map(volunteer => <TableRow
                            volunteer={volunteer}
                            key={volunteer._id}
                            ></TableRow>)
                        }
                    </tbody>
                </table>
            </div>:
            <div className="appear-msg">
                <div>
                <h1>Don't have a volunteer here.</h1>
                <button className="btn">Add volunteer</button>
                </div>
            </div>
            }
		</div>
	);
};

export default VolunteerList;
