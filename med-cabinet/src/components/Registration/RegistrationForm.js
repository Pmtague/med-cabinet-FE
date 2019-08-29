import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

import  './Registration.css';

// import Context API 
// import { useContext } from 'react';
// import { RegisterContext } from '../../contexts/RegisterContext.js';

function RegistrationForm ({ errors, touched }) {

    // const [users, setUsers] = useState([]);
    // console.log(users)

    // const { userID, setUserID } = useContext(RegisterContext);

    // useEffect(() => {
    //     if (status) {
    //         setUsers([...users, status]);
    //     }
    // }, [users, status]);

    return (
        <div className='register-form'>  
            <h3>Sign Up</h3>
            <Form>

            <p className='nameEntry'>Enter your name</p>
                <Field
                    className='name'
                    name='name'
                    type='text'
                    placeholder='Name'
                />
                {touched.name && errors.name && (
                    <p className ='error'>{errors.name}</p>
                )}
                
                <p className='media'>Enter a valid email address</p>
                <Field
                    className='email-info'
                    name='email'
                    type='email'
                    placeholder='Email'
                />
                {touched.email && errors.email && (
                    <p className ='error'>{errors.email}</p>
                )}
                <p>Enter your user name</p>
                <Field 
                   className = 'username'
                   name= 'username'
                   type = 'text'
                   placeholder= 'Username'
                />
                <p>Enter a password</p>
                <Field
                    className = 'password'
                    name= 'password'
                    type = 'password'
                    placeholder= 'Password'
                />
                {touched.username && errors.username && (
                    <p className='error'>{errors.username}</p>
                )}

                <p>Enter a valid zip code</p>
                <Field 
                    className = 'zip'
                    name= 'zip'
                    type = 'number'
                    placeholder= 'Zip Code'
                />

                {touched.username && errors.username && (
                    <p style={{color: 'orange'}} className = 'error'>{errors.username}</p>
                )}

                <p>Have an account? Register&nbsp;
                    <a className="loginRedirect" href="/login">here</a>
                </p>
                
                <div>
                    <button className='register-button'type='submit' >Register</button>
                </div>
        </Form>
            </div>
                     
        )
}

const FormikRegisterationForm = withFormik({
    mapPropsToValues({ name, username, password, email }) {
        return {
                name: name || '',
                username: username || '',
                password: password || '',
                email: email || ''
            }
        },

        validationSchema: Yup.object().shape({
            name: Yup.string()
                .required('Please enter your name'),
            username: Yup.string()
                .required('Please enter your username'),
            password: Yup.string()
                // .min(6, 'Password must be 6 characters or longer')
                .required('Please enter your password'),
            email: Yup.string()
                .email('Email not valid')
                .required('Please enter your email')
        }),

        handleSubmit(values, { resetForm, setSubmitting, setStatus }){
            axios
                .post('https://med-cabinet-temp.herokuapp.com/api/users/register', values)
                .then(response => {
                    console.log(response)
                    setStatus(response.data);
                    // setUserID(response.data.user_id);
                    resetForm();
                    setSubmitting(false);
                    window.location = '/login';
                })
                .catch(error => {
                    console.log(error.response);
                    setSubmitting(false);
                });
        }
})(RegistrationForm);

export default FormikRegisterationForm;