import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './App.css';
// import PrivateRoute from './components/PrivateRoute'
import RegistrationForm from './components/Registration/RegistrationForm'
import Footer from './components/Footer/Footer'
import MedCabinetLogo from './images/MedCabinetLogo.png'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div logo='logo'>
        <img  src= {MedCabinetLogo} />
      </div>
      {/* <Route path='login' component={Login} /> */}
      <Route exact path = '/register' component=  {RegistrationForm}/>
      </header>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
