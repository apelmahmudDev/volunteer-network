import React from 'react';
import Home from './components/Home/Home';
import { Switch,Route } from "react-router-dom";
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';
import Events from './components/Events/Events';
import ActiveVolunteer from './components/ActiveVolunteer/ActiveVolunteer';
import AddEvent from './components/AddEvent/AddEvent';
import SideBar from './components/SideBar/SideBar';
import Navbar from './components/Navbar/Navbar';
  
const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/events" component={Events} />
            <Route path="/admin" component={SideBar} />
            <Route path="/add-event" component={AddEvent} />
            <PrivateRoute path="/volunteer_activitise">
                <Navbar></Navbar>
                <ActiveVolunteer/>
            </PrivateRoute>
            <PrivateRoute path="/register/volunteer/:volunteerId">
                <Register />
            </PrivateRoute>
            <Route path="*"><h1>Not Found</h1></Route>
        </Switch>
    );
};

export default Routes;