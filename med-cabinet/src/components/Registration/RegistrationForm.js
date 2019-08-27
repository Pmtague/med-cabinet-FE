import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

import  './Registration.css';
// import { reset } from 'ansi-colors';

const RegistrationForm = ({ errors, touched, status, isSubmitting }) => {

    const [users, setUsers] = useState([]);
    // console.log(users)

    useEffect(() => {
        if (status) {
            setUsers([...users, status]);
        }
    }, [users, status]);

    return (
        <div className='register-form'>  
            <h3>Sign Up</h3>
            <Form>
                <Field
                    className='register-fields'
                    name='name'
                    type='text'
                    placeholder='name'
                />
                {touched.name && errors.name && (
                    <p className ='error'>{errors.name}</p>
                )}

                <Field
                    className='register-fields'
                    name='email'
                    type='email'
                    placeholder='email'
                />
                {touched.email && errors.email && (
                    <p className ='error'>{errors.email}</p>
                )}
                
                <Field 
                    className='register-fields'
                    name='username'
                    type='text'
                    placeholder='username'
                />
                {touched.username && errors.username && (
                    <p className='error'>{errors.username}</p>
                )}

                <Field
                    className='register-fields'
                    name='password'
                    type='password'
                    placeholder='password'
                />
                {touched.password && errors.password && (
                    <p className='error'>{errors.password}</p>
                )}
            
                <p>Have an account? Sign in&nbsp;
                    <a className="loginRedirect" href="/login">here</a>
                </p>

                <div>
                    <button className='register-button' type='submit' disabled={isSubmitting}>Register</button>
                </div>
            </Form>
        </div> 
    );
};

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