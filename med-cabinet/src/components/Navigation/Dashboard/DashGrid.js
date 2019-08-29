import React, {Component} from 'react'
import { Grid, Image} from 'semantic-ui-react'
import DashVertMenu from './DashVertMenu'
import DashBoardCards from './DashBoardCards'

import './DashGrid.css'
import './Dashboard.css'
import Advice from '../../Advice';
import ReviewForm from './ReviewForm'
import DashMenuBar from './DashMenuBar'
import StrainOfTheDay from './StrainOfTheDay';

const DashGrid = () =>{
   return(
    <div>
        <Grid>
    <Grid.Column floated='left' width={5}>
      <Image src='/images/wireframe/paragraph.png' />
    </Grid.Column>
        <Grid className='grid-border'>
        </Grid>


            {/* <DashMenuBar/> */}
        <div className='review-from'>
            <div className='vert-box'>
            <DashVertMenu/>
            </div>
            <div>
            <ReviewForm/>
            
            </div>
        </div>
        <div className= 'strain-card'>
        <StrainOfTheDay/>
    
        </div>

        </Grid>
    </div>
   )
}

export default DashGrid