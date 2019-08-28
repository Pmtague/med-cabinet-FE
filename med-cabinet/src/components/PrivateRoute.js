import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({component: Component, rest}) => {
    return(
        <Route
        {...rest}
        render= {props => {
            if(localStorage.getStatus('token')){
                return<Component {...props}/>
            }
            return <Redirect to ='dashboard'/>
        }}
        />
    )}

export default PrivateRoute