
import React, { useState, useEffect } from 'react'
// import { Grid, Image, Menu } from 'semantic-ui-react'
// import DashGrid from './DashGrid'

// import DashVertMenu from './DashVertMenu'
import './DashGrid.css'

import DashGrid from './DashGrid'

import axiosWithAuth from '../../../utils/axiosWithAuth.js';

import DashBoardCards from './DashBoardCards';
import Recs from '../Recs/Recs.js';

// import Context API 
import { useContext } from 'react';
import { LoginContext } from '../../../contexts/LoginContext.js';

const Dashboards = (props) =>{
    const [ userData, setUserData ] = useState();

    const { creds, setCreds } = useContext(LoginContext);


    // useEffect(() => {
    //     axiosWithAuth()
    //         .get('https://med-cabinet-temp.herokuapp.com/api/users')
    //         .then(res => {
    //             console.log(res.data)
    //             setUserData(res.data)
    //         }) 
    //         .catch(err => {
    //             console.log('Error retrieving user data: ', err.response);
    //         });
    // }, [])

   return (
    <div>

        <DashGrid/>

        {/* <DashBoardCards/> */}
        {/* <DashGrid/> */}
        {/* <Recs userData={userData} /> */}

    </div>
   )
}

export default Dashboards;