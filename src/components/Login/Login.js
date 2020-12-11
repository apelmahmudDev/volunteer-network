import React, { useState } from 'react';
import "./Login.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import volunteerLogo from '../../images/volunteer-logo.png';
import googleIcon from '../../images/google.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from '../../firebase.config';
import { useContext } from 'react';
import { UserContext } from '../UserContext/UserContext';

firebase.initializeApp(firebaseConfig);

const Login = () => {

    const [user, setUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    // HANDLE GOOGLE SIGN IN
	const googleProvider = new firebase.auth.GoogleAuthProvider();
	const handleSignWithGoogle = () => {
		firebase.auth().signInWithPopup(googleProvider)
        .then((res) => {
            const { displayName, email, photoURL } = res.user;
            const newUserInfo = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
            };
            setUser(newUserInfo);
            history.replace(from);
        })
        .catch((err) => {
            console.log(err.message);
        });
    };
    
    // CUSTOM LOGIN FORM VALIDATION
	const handleBlur = (e) => {
		let isFieldValid = true;
		if (e.target.name === 'email') {
			isFieldValid = /(.+)@(.+){2,}\.(.+){2,}/.test(e.target.value);
		}
		if (e.target.name === 'password') {
			const isValidPassword = e.target.value.length > 6;
			const hasNumber = /\d/g.test(e.target.value);
			isFieldValid = isValidPassword && hasNumber;
		}

		if (isFieldValid) {
			const newUserInfo = { ...user };
			newUserInfo[e.target.name] = e.target.value;
			setUser(newUserInfo);
		}
    };
    
	//CUSTOM lOGIN FORM SUBMIT
	const handleSubmit = (e) => {
		if (newUser && user.email && user.password) {
			firebase
				.auth()
				.createUserWithEmailAndPassword(user.email, user.password)
				.then((res) => {
					const newUserInfo = { ...user };
					newUserInfo.isSignedIn = true;
					newUserInfo.error = '';
					newUserInfo.success = true;
					updateUser(user.name);
					setUser(newUserInfo);
					history.replace(from);
				})
				.catch((err) => {
					const newUserInfo = { ...user };
					newUserInfo.isSignedIn = false;
					newUserInfo.error = err.message;
					newUserInfo.success = false;
					setUser(newUserInfo);
				});
		}
		if (!newUser && user.email && user.password) {
			firebase
				.auth()
				.signInWithEmailAndPassword(user.email, user.password)
				.then((res) => {
					const newUserInfo = { ...user };
					newUserInfo.isSignedIn = true;
					newUserInfo.error = '';
					newUserInfo.success = true;
					setUser(newUserInfo);
					history.replace(from);
				})
				.catch((err) => {
					const newUserInfo = { ...user };
					newUserInfo.error = err.message;
					newUserInfo.success = false;
					setUser(newUserInfo);
				});
		}
		e.preventDefault();
	};
	//UPDATE NAME
	const updateUser = (name) => {
		const user = firebase.auth().currentUser;
		user
			.updateProfile({
				displayName: name
			})
			.then((res) => {
				console.log('User name update successfully');
			})
			.catch((err) => {
				console.log('User name update failed');
			});
	};

    return (
        <div className="container text-center">
            <Link to="/"><img src={volunteerLogo} alt="" className="my-5 volunteer-logo"/></Link>
            <div className="row">
                <div className="col-md-6 d-flex align-items-center justify-content-center login-area">
                    <div style={{width:'100%'}}>
                        <h4 className="mb-4"><strong>{newUser ? 'Create an account' : 'Login'}</strong></h4>
                        <form className="form login-form" onSubmit={handleSubmit} >
                            {newUser && (
                                <input
                                    onBlur={handleBlur}
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="form-control"
                                    required
                                />
                            )}
                            <input
                                onBlur={handleBlur}
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="form-control"
                                required
                            />
                            <input
                                onBlur={handleBlur}
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="form-control"
                                required
                            />
                            <input
                                type="submit"
                                value={newUser ? 'Create an Account' : 'Login'}
                                className="form-control bg-primary text-light font-weight-bold"
                            />
                        </form>

                        <p className="text-danger">{user.error}</p>
                        {user.success && (
                            <p className="text-success text-center">
                                Account {newUser ? 'created' : 'login'} successfully
                            </p>
                        )}
                        <p className="text-center">
                            {newUser ? 'Already have an account?' : 'Do not have an account'}?{' '}
                            <p
                                onClick={() => setNewUser(!newUser)}
                                className="text-warning text-underline"
                                style={{ cursor: 'pointer' }}
                            >
                                {newUser ? 'Login' : 'Create an account'}
                            </p>
                        </p>

                        <button className="btn sign-btn" onClick={handleSignWithGoogle}>
                            <img src={googleIcon} alt="" className="googleIcon"/>
                            <span>Continue With Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;