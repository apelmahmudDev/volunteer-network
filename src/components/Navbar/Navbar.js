import React, { useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import volunteerLogo from '../../images/volunteer-logo.png';
import { UserContext } from '../UserContext/UserContext';

const Navbar = () => {
    const [user] = useContext(UserContext);
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-default">
            <Link className="navbar-brand" to="/"><img src={volunteerLogo} alt=""/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    <Link className="nav-link" to="/donation">Donation</Link>
                    <Link className="nav-link" to="/volunteer_activitise">Events</Link>
                    <Link className="nav-link" to="/blog">Blog</Link>
                    <Link className="nav-link register bg-primary" to="/login">
                        {user.isSignedIn ? user.name ? user.name: 'welcome' : 'Register'}
                    </Link>
                    <Link className="nav-link admin bg-dark" to="/admin/volunteers-list">Admin</Link>
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Navbar;