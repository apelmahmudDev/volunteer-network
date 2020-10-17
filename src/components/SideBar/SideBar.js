import React from 'react';
import './SideBar.css';
import { Link, Route } from 'react-router-dom';
import AddEvent from '../AddEvent/AddEvent';
import VolunteerList from '../VolunteerList/VolunteerList';
import plusIcon from '../../images/plus.png';
import userIcon from '../../images/user.png';
import volunteerLogo from '../../images/volunteer-logo.png';


const SideBar = () => {

    const handleToggle = (e) => {
        const menuToggle = document.getElementById('menu-toggle');
        menuToggle.addEventListener('click', () => {
        const wrapper = document.getElementById('wrapper');
        wrapper.classList.toggle('toggled')
        })
    }

    return (
    <div class="d-flex" id="wrapper">
        <div id="sidebar-wrapper">
            <div class="list-group">
                <Link to="/"><div className="sidebar-logo"><img src={volunteerLogo} alt=""/></div></Link>
                        
                <Link to="/admin/volunteers-list" className="list-group-item list-group-item-action">
                <img className="userIcon" src={userIcon} alt=""/> Volunteer Register List</Link>

                <Link to="/admin/add-event" className="list-group-item list-group-item-action">
                <img className="plucIcon" src={plusIcon} alt=""/> Add event</Link>
            </div>
        </div>

        {/* <!-- Page Content -->  */}
        <div id="page-content-wrapper">
            <nav class="navbar bg-default border-bottom">
                <button class="btn btn-primary" onClick={handleToggle} id="menu-toggle">Toggle Menu</button>
            </nav>
            <div class="container-fluid">
                <Route path="/admin/volunteers-list" component={VolunteerList} />
                <Route path="/admin/add-event" component={AddEvent} />
            </div>
        </div>
    </div>
    );
};

export default SideBar;