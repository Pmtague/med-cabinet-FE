// import React from 'react';
// import ReviewForm from './components/ReviewForm.js';
import React, { useState } from 'react';
import './App.css';

import StrainCards2 from './components/StrainCards2'
import StrainCards from './components/StrainCards';
import Footer from './components/Footer/Footer.js';
import MedCabinetLogo from './images/MedCabinetLogo.png';
import NavTab from './components/Navigation/NavTab';
// import Strains from './components/Navigation/Strains';
// import ContactUs from './components/Navigation';
import HistoricalData from './components/Navigation/History/HistoricalData.js';
import { Route, Switch } from 'react-router-dom'
import RegistrationForm from './components/Registration/RegistrationForm'
import PrivateRoute from './components/PrivateRoute'
import Login from './components/login/Login.js';
import Dashboard from './components/Navigation/Dashboard/Dashboard'
import MandatoryForm from './components/MandatoryForm.js';

// import Context Object
import { LoginContext } from './contexts/LoginContext.js';
import { RegisterContext } from './contexts/RegisterContext.js';

const App = () => {

  // Login Context Data
  const [ creds, setCreds ] = useState({ email: '', password: '' });
  const [ userD, setUserD ] = useState({});
  const [ reviews, setReviews ] = useState([]);
  const [ strainsReviewed, setStrainsReviewed ] = useState([]);

  // Register Context Data
  const [ userID, setUserID ] = useState({ userID: ''}) 

  return (

    <LoginContext.Provider value={{ creds, setCreds,
                                    userD, setUserD,
                                    reviews, setReviews,
                                    strainsReviewed, setStrainsReviewed
                                 }}>
      <RegisterContext.Provider value={{ userID, setUserID }}>                           
        <div className="App">
          <header className="App-header">
            <div className='navigation'>
              <div>
                <NavTab />
              </div>
              <div className='logo-container'>
                <img src={MedCabinetLogo} />
              </div>
            </div>

            <div>
              <Switch>
                <Route path='/register' component={RegistrationForm} />
                <Route path='/login' component={Login} />
                <PrivateRoute exact path='/dashboard' component={Dashboard} />
                <PrivateRoute exact path='/history' component={HistoricalData} />
                <PrivateRoute exact path='/mandatory' component={MandatoryForm} />
                {/* <Route exact path= '/strains' component= {Strains}/> */}
                {/* <Route exact path= '/learnmore' component= {learnMore}/>  */}
                {/* <Route exact path= '/contact' component= {ContactUs} />  */}
              </Switch>
            </div>

            <div>
              <Footer />
            </div>

          </header>
        </div>
      </RegisterContext.Provider>  
    </LoginContext.Provider>
  );
}

export default App;



