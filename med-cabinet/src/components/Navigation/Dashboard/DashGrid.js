



import React, {Component} from 'react'
import { Grid, Image} from 'semantic-ui-react'
import DashVertMenu from './DashVertMenu'
import DashBoardCards from './DashBoardCards'

import './DashGrid.css'
import './Dashboard.css'
import Advice from '../../Advice';

const DashGrid = () =>{
   return(
    <div>
        
        <Grid className='grid-border'>
        <DashVertMenu/>
        <DashBoardCards className= 'strain-card'/>
       <Advice/>
            <Grid.Column mobile={16} tablet={8} computer={4}>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
                <Image src='/images/wireframe/paragraph.png' />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
                <Image src='/images/wireframe/paragraph.png' />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
                <Image src='/images/wireframe/paragraph.png' />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
                <Image src='/images/wireframe/paragraph.png' />
            </Grid.Column>
        </Grid>
    </div>
   )
}

export default DashGrid