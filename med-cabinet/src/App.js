import React, {Component} from 'react';
//commented below line out due to possible conflicts
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
// import PrivateRoute from './components/PrivateRoute'
import RegistrationForm from './components/Registration/RegistrationForm'
import Footer from './components/Footer/Footer'
import MedCabinetLogo from './images/MedCabinetLogo.png'
import Login from './components/Login/Login.js';

function App() {
  return (
//    commented out router
    //<Router>
      <div className="App">
        <header className="App-header">
        <div logo='logo'>
          <img src= {MedCabinetLogo} />
        </div>
        <Route path='/login' component={Login} />
        <Route exact path='/register' component={RegistrationForm}/>
        </header>
        <div>
          <Footer />
        </div>
      </div>
    //</Router>
  );
}

export default App;
