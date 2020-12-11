import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../UserContext/UserContext';
import VolunteerActivities from '../VolunteerActivities/VolunteerActivities';
import './ActiveVolunteer.css';

const ActiveVolunteer = () => {
	const [haveEvent, setHaveEvent] = useState(false);
	const [user] = useContext(UserContext);
	const [volunteer, setVolunteer] = useState([]);

	// GET SPEACIFIC VOLUNTEER INFO BY EMAIL
	useEffect(() => {
		fetch(
			`https://sleepy-spire-06659.herokuapp.com/volunteer?email=${user.email}`
		)
			.then((res) => res.json())
			.then((data) => {
				setVolunteer(data);
			});
	}, [user.email]);

	setTimeout(() => {
		if (volunteer.length === 0) {
			document.getElementById('status').innerText = 'You have no event';
		} else {
			setHaveEvent(true);
		}
	}, 2000);

	return (
		<div className="container mt-5">
			<h3
				id="status"
				style={{
					display: haveEvent ? 'none' : 'block',
					textAlign: 'center',
					marginTop: '10%',
				}}
			>
				Loding...
			</h3>
			{haveEvent && (
				<div className="row row-cols-1 row-cols-md-2">
					{volunteer.map((v) => (
						<VolunteerActivities
							volunteer={v}
							key={v._id}
						></VolunteerActivities>
					))}
				</div>
			)}
		</div>
	);
};

export default ActiveVolunteer;
