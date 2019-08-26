import React, { useState } from 'react';

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
    //     .post('http://localhost:5000/api/login', credentials)
    //     .then(res => {
    //         localStorage.setItem('token', res.data.payload)
    //         props.history.push('/')
    //         console.log(credentials)
    //     })
    //     .catch(err => {
    //         console.log('Error while logging in', err.response)
    //     })
    // };

    return (
        <>
            <h3>Log In</h3>
            {/* <form onSubmit={handleSubmit}> */}
            <form>
                <input
                    type="email"
                    name="email"
                    placeholder="email "
                    value={creds.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={creds.password}
                    onChange={handleChange}
                    required
                />
                <button>
                    Log In
                </button>
            </form>
        </>
    );

};

export default Login;