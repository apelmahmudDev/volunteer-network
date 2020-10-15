import React, { useContext } from 'react';
import "./Login.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import volunteerLogo from '../../images/volunteer-logo.png';
import googleIcon from '../../images/google.png';
import { UserContext } from '../UserContext/UserContext';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [user, setUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    // HANLE GOOGLE SIGN IN
    const handleGoogleSign = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
            const {displayName, email} = res.user;
            const signedInUser = {
                isSigned: true,
                name: displayName,
                email: email
            }
            setUser(signedInUser);
            history.replace(from);
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="container text-center">
            <img src={volunteerLogo} alt="" className="my-5 volunteer-logo"/>
            
            <div className="row">
                <div className="col-md-6 d-flex align-items-center justify-content-center login-area">
                    <div style={{width:'100%'}}>
                        <h2 className="mb-4">Login with</h2>
                        <button className="btn sign-btn" onClick={handleGoogleSign}>
                            <img src={googleIcon} alt="" className="googleIcon"/>
                            Continue With Google
                        </button>
                        <p className="mt-2">Don't have an account? <a href="#">Create an account</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;