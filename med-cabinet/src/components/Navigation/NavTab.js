import React from 'react'

import {Link} from 'react-router-dom'
import './Navigation.css'

const NavTab = () => {
    return (
    <header className='nav-container'>

        
                <Link to = '/register/'>Register</Link>
               
                    <Link to = '/'>Dashboard</Link>
                
                    <Link to = '/historicaldata/'>Historical Data </Link>
                
                    <Link to = '/strains/'>Strains</Link>
              
                    <Link to = '/historicaldata/'>Learn More </Link>
           
                    <Link to = '/contact/'>Contact Us </Link>
               
                    <Link to= '/about/'>About</Link>
    </header>
    )
}

export default NavTab