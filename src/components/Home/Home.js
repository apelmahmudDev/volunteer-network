import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BookVolunteer from '../BookVolunteer/BookVolunteer';
import Navbar from '../Navbar/Navbar';
import Spinner from '../Spinner/Spinner';
import background from '../../images/volunteer-banner.jpeg';
import './Home.css';
import SearchInput from '../SearchInput/SearchInput';
import Footer from '../Footer/Footer';

const Home = () => {
	const [volunteerOptions, setVolunteerOptions] = useState([]);

	// READ ALL EVENTS FROM DATABASE
	useEffect(() => {
		fetch('https://sleepy-spire-06659.herokuapp.com/loadVoptions')
			.then((res) => res.json())
			.then((data) => {
				setVolunteerOptions(data);
			});
	}, [volunteerOptions]);

	return (
		<>
			<div className="home-header-background">
				<img src={background} alt="" className="w-100" />
			</div>
			<div className="home-header">
				<Navbar></Navbar>
				<SearchInput></SearchInput>
			</div>
			<div className="container home-body">
				{volunteerOptions.length > 0 ? (
					<div className="row row-cols-1 row-cols-md-4">
						{volunteerOptions.map((options) => (
							<BookVolunteer key={options.id} options={options}></BookVolunteer>
						))}
					</div>
				) : (
					<Spinner></Spinner>
				)}
			</div>
			<Footer></Footer>
		</>
	);
};

export default Home;
