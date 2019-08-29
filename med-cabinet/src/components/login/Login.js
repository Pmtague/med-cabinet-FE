import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

// import Context API 
import { useContext } from 'react';
import { LoginContext } from '../../contexts/LoginContext.js';

const Login = (props) => {

    const { creds, setCreds } = useContext(LoginContext);
    const { userD, setUserD } = useContext(LoginContext);
    const { reviews, setReviews } = useContext(LoginContext);
    const { strainsReviewed, setStrainsReviewed } = useContext(LoginContext);

    const handleChange = e => {
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios
            .post('https://med-cabinet-temp.herokuapp.com/api/users/login', creds)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                console.log('user data', res.data.user);
                setUserD(res.data.user);
                setReviews(res.data.reviews);
                setStrainsReviewed(res.data.reviewedStrains);
                console.log("res", res)
                props.history.push('/mandatory')
            })
            .catch(err => {
                console.log('Error while logging in', err.response)
            });
    };

    return (
        <div className="loginForm">
            <h3>Sign In</h3>
            <form onSubmit={handleSubmit}>
                <input
                    className="login-fields"
                    type="email"
                    name="email"
                    placeholder="email "
                    value={creds.email}
                    onChange={handleChange}
                    required
                />

                <input
                    className="login-fields"
                    type="password"
                    name="password"
                    placeholder="password"
                    value={creds.password}
                    onChange={handleChange}
                    required
                />

                <p>Don't have an account? Register&nbsp;
                    <a className="signupRedirect" href="/register">here</a>
                </p>

                <button className="login-button">
                    Log In
                </button>
            </form>
        </div>
    );

};

export default Login;