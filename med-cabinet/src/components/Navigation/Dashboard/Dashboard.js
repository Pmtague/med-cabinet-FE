import React, {Component} from 'react'
// import { Grid, Image, Menu } from 'semantic-ui-react'
// import DashGrid from './DashGrid'
// import DashVertMenu from './DashVertMenu'
import './Dashboard.css'
import DashBoardCards from './DashBoardCards';

const Dashboards = () =>{
   return(
    <div>
        <DashBoardCards/>
        {/* <DashGrid/> */}
    </div>
   )
}

export default Dashboards