import React from 'react';
import Home from './components/Home/Home';
import { Switch,Route } from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import VolunteerActivities from './components/VolunteerActivities/VolunteerActivities';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
  
const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/volunteer_activitise" component={VolunteerActivities} />
            <PrivateRoute path="/register/volunteer/:volunteerId" component={Register} />
            {/* <PrivateRoute path="/register">
                <Register></Register>
            </PrivateRoute> */}
            <Route path="*"><h1>Not Found</h1></Route>
        </Switch>
    );
};

export default Routes;