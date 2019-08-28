
import React from 'react'

import './App.css';
import Footer from './components/Footer/Footer';
import MedCabinetLogo from './images/MedCabinetLogo.png';

import NavTab from './components/Navigation/NavTab';
// import Dashboard from './components/Navigation/Dashboard';
// import HistoricalData from './components/Navigation/HistoricalData';
// import Strains from './components/Navigation/Strains';
// import ContactUs from './components/Navigation';
import {Route, Switch} from 'react-router-dom'
import RegistrationForm from './components/Registration/RegistrationForm'
import PrivateRoute from './components/PrivateRoute'
import Login from './components/login/Login';
import Dashboard from './components/Navigation/Dashboard/Dashboard'
const App =() => {
  return (
      <div className="App">
         <header className="App-header">
         <div className= 'navigation'>
           <div>
          <NavTab />
          </div>
          <div className='logo-container'>
            <img  src= {MedCabinetLogo} />
          </div>
          </div>
          <div>
          <Switch>
              <Route path = '/register' component= {RegistrationForm}/>
              <Route path='/login' component= {Login} />
              <Route exact path= '/dashboard' component= {Dashboard}/>
              {/* <PrivateRoute exact path= '/history' component= {HistoricalData}/>
              <Route exact path= '/strains' component= {Strains}/>
              <Route exact path= '/learnmore' component= {learnMore}/> 
              <Route exact path= '/contact' component= {ContactUs}/>  */}
          </Switch>
          </div>
          <div>
            <Footer />
        </div>
      </header>
      </div>
  );
}

export default App;



