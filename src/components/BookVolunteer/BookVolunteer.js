import React from 'react';
import { Link } from 'react-router-dom';
import "./BookVolunteer.css";

const BookVolunteer = (props) => {
	const {name, img, id} = props.options;
	return (
		<>
			<Link to={`/register/volunteer/${id}`}>
				<div className="card">
					<img src={img} alt="" className="w-100"/>
					<div className="card-body">
						<h5 className="card-title">{name}</h5>
					</div>
				</div>
			</Link>
		</>
	);
};

export default BookVolunteer;
