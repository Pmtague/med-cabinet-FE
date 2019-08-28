import React from 'react'

import './App.css';
import Footer from './components/Footer/Footer';
import MedCabinetLogo from './images/MedCabinetLogo.png';

import NavTab from './components/Navigation/NavTab';
import Dashboard from './components/Navigation/Dashboard';
// import HistoricalData from './components/Navigation/HistoricalData';
// import Strains from './components/Navigation/Strains';
// import ContactUs from './components/Navigation';
import {Route, Switch} from 'react-router-dom'
import RegistrationForm from './components/Registration/RegistrationForm'
import PrivateRoute from './components/PrivateRoute'


const App =() => {
  return (
 
      <div className="App">
         <div className= 'navigation'>
              <NavTab />
          </div>
        <header className="App-header">
          <div className='logo'>
            <div>
              <img  src= {MedCabinetLogo} />
            </div>
          </div>
          <div>
          <Switch>
              <Route path = '/register' component=  {RegistrationForm}/>
              <PrivateRoute exact path= '/' component= {Dashboard}/>
              {/* <PrivateRoute exact path= '/historicaldata' component= {HistoricalData}/>
              <Route exact path= '/strains' component= {Strains}/>
              {/* <Route exact path= '/learnmore' component= {learnMore}/> */}
              {/* <Route exact path= '/conact' component= {ContactUs}/> */} */}
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



