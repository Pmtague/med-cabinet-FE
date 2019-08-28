import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {Form, Field, withFormik } from 'formik'
import * as Yup from 'yup'
import  './Registration.css'
const RegistrationForm = ({errors, touched, status})=>{

const [users, setUsers] = useState([])
console.log(users)

useEffect(()=> {
    if (status){
        setUsers([...users, status]);
    }
}, [status]);


// handleSubmit =(event) => {
//     event.preventDefault()
//     axios
//         .get('https://med-cabinet-temp.herokuapp.com/api/users', newUser)
//         .then(res => {
//             SetData(res.data)
//         })
//         .catch(error => {console.log('User profile was not created, please try again')})
//         window.location.reload()

// }


        return(
            <div className='register-form'>
            <p className='register-instructions'> Please provide all needed information below</p>
            
        <Form>
            <p>Enter your name</p>
                <Field
                   className = 'name'
                   name= 'name'
                   type = 'text'
                   placeholder= 'Name'
                />
                {touched.username && errors.name && (
                    <p className ='error'>{errors.name}</p>
                )}
                
                <p>Enter an email address</p>
                <Field
                    className = 'email'
                    name= 'email'
                    type = 'text'
                    placeholder= 'Email'
                />
                <p>Enter a unique user name</p>
                <Field 
                   className = 'username'
                   name= 'username'
                   type = 'text'
                   placeholder= 'Userame'
                />
                <p>Enter a valid phone number</p>
                <Field
                    className = 'password'
                    name= 'password'
                    type = 'password'
                    placeholder= 'Password'
                />
                {touched.password && errors.password && (
                    <p className ='error'>{errors.password}</p>
                )}

               
            
                <p>Enter a valid zip code 
                </p>
                <Field 
                    className = 'zip'
                    name= 'zip'
                    type = 'number'
                    placeholder= 'Zip Code'
                />
                
                
                {touched.username && errors.username && (
                    <p style={{color: 'orange'}} className = 'error'>{errors.username}</p>
                )}
                
                <div>
                <button className='register-button'type='submit' >Register</button>
                </div>
        </Form>
            </div>
                     
        )
}
const FormikRegisterationForm = withFormik({
    mapPropsToValues({username, password, phone, address, email}){
        return {
                username: username || '',
                password: password || '',
                address: address || '',
                email: email || '',
                phone: phone || '',
                
            };
        },
        validationSchema: Yup.object().shape({
            username: Yup.string().required('Please enter your username'),
            password: Yup.string().required('Please enter your password'),
            email: Yup.string().required('Please enter your email'),
            zip: Yup.number().max(5).required('Please enter your phone'),
            
        }),
        register(values, {setStatus}){
            
            axios
            .post('http://localhost:5000/api/register/', values)
            .then(response => {

                console.log(response)
                localStorage.setStatus('token', response.data.payload)
                window.history.push('/dashboard')
            })
            .catch(error => {
                console.log(error.response)})
        }
})(RegistrationForm);

export default FormikRegisterationForm