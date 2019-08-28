import React, { useState, useEffect } from 'react'
// import { Grid, Image, Menu } from 'semantic-ui-react'
// import DashGrid from './DashGrid'
// import DashVertMenu from './DashVertMenu'
import './Dashboard.css'
import { axiosWithAuth } from '../../../utils/axiosWithAuth.js';

import DashBoardCards from './DashBoardCards';
import Recs from '../Recs/Recs.js';

const Dashboards = () =>{
    const [ userData, setUserData ] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('https://med-cabinet-temp.herokuapp.com/api/users/')
            .then(res => {
                console.log(res.data)
                setUserData(res.data)
            }) 
            .catch(err => {
                console.log('Error retrieving user data: ', err.response);
            });
    }, [])

   return (
    <div>
        <DashBoardCards/>
        {/* <DashGrid/> */}
        <Recs userData={userData} />
    </div>
   )
}

export default Dashboards;