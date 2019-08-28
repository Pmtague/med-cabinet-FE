import React from 'react'

import {Link} from 'react-router-dom'
import './Navigation.css'


const NavTab = () => {
    return (
    <header className='nav-main-container'>
    <div className='nav-container'>
        <div className='register-link'>
        <Link to = '/register/'>Register</Link>
        </div>
        <div className='dashboard-link'>    
        <Link to = '/dashboard'>Dashboard</Link>
        </div>
        <div className='historical-link'>
        <Link to = '/historicaldata/'>Historical Data </Link>
        </div>
        <div className='strains-link'>
        <Link to = '/strains/'>Strains</Link>
        </div>    
        <div className='learn-link'>
        <Link to = '/historicaldata/'>Learn More </Link>
        </div>
        <div className='contact-link'>
        <Link to = '/contact/'>Contact Us </Link>
        </div>
        <div className='about-link'>
        <Link to= '/about/'>About</Link>
        </div> 
        <div className='login-link'> 
        <Link to= '/login/'>LogIn</Link>
        </div>
    </div>  
    </header>
    )
}

export default NavTab