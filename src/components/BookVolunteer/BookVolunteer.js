import React from 'react';
import { Link } from 'react-router-dom';
import './BookVolunteer.css';
import noImage from '../../images/no_image.png';

const BookVolunteer = ({ options }) => {
	return (
		<Link to={`/register/volunteer/${options.id}`} className="volunteer-link">
			<div className="col mb-4">
				<div className="card h-100 home-card">
					<img src={options.img || noImage} className="card-img-top" alt="card-img" />
					<div className={`card-body ${options.bgColor}`}>
						<h5 className="card-title font-weight-normal">{options.name}</h5>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default BookVolunteer;
