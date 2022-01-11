import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import SaladMaker from './components/SaladMaker';
import UserContext from './components/User';

//just normal oject user data we want to share across components
const user = {
  name: 'Bond',
  favorites: [
    'avocado', 'broccoli'
  ]
}

/* eslint-disable */
function App() {
  return (<UserContext.Provider value={ user } >
     <Navigation />
     <h1>I am React developer</h1>
     <p>contact number 123456000</p>
     <SaladMaker />
  </UserContext.Provider>)
}
 
export default App;
