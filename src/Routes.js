import React from 'react';
import Home from './components/Home/Home';
import { Switch,Route } from "react-router-dom";
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';
import Events from './components/Events/Events';
import ActiveVolunteer from './components/ActiveVolunteer/ActiveVolunteer';
  
const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/events" component={Events} />
            <PrivateRoute path="/volunteer_activitise">
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