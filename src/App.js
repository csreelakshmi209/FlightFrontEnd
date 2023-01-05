import './App.css';
import Home from './components/home';
import NavBar from './components/navBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import FlightApp from './components/flightApp';
import React from 'react';
import Passenger from './components/passenger';


const App =()=> {
  return (
    <React.Fragment>
      <center>
      
      <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route path="/home" element={<Home/>} />
          <Route path="/flightApp" element={<FlightApp/>}/>   
          <Route path="/passengerDetails" element={<Passenger/>}/>
        </Routes>
      </BrowserRouter>
      </center>
      </React.Fragment>
  );
}

export default App;
