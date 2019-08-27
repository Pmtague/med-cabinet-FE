import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
// import PrivateRoute from './components/PrivateRoute'
import RegistrationForm from './components/Registration/RegistrationForm';
import Login from './components/Login/Login.js';
import Footer from './components/Footer/Footer';
import MedCabinetLogo from './images/MedCabinetLogo.png';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <div logo='logo'>
          <img src={MedCabinetLogo} alt="med cabinet logo" />
        </div>
          <Route path='/login' component={Login} />
          <Route path='/register' component={RegistrationForm} />
        </header>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
