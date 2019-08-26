import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
    const [ creds, setCreds ] = useState({ email: '', password: '' });

    const handleChange = e => {
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        });
    };

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     .post('https://med-cabinet-temp.herokuapp.com/api/users/login', creds)
    //     .then(res => {
    //         localStorage.setItem('token', res.data.payload)
    //         props.history.push('/')
    //         console.log(creds)
    //     })s
    //     .catch(err => {
    //         console.log('Error while logging in', err.response)
    //     })
    // };

    return (
        <div className="loginForm">
            <h3>Sign In</h3>
            {/* <form onSubmit={handleSubmit}> */}
            <form>
                <input
                    className="login-email"
                    type="email"
                    name="email"
                    placeholder="email "
                    value={creds.email}
                    onChange={handleChange}
                    required
                />
                <input
                    className="login-password"
                    type="password"
                    name="password"
                    placeholder="password"
                    value={creds.password}
                    onChange={handleChange}
                    required
                />
                <button className="login-button">
                    Log In
                </button>
            </form>
        </div>
    );

};

export default Login;