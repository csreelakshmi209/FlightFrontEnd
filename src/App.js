import './App.css';
import Home from './components/home';
import NavBar from './components/navBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import React from 'react';
import Passenger from './components/passenger';
import SearchForm from './components/searchForm';
//import Flights from './components/flights';
import Marquee from "react-fast-marquee";
import Booking from './components/Booking';
import SignUp from './components/SearchEntity/SignUp';
import LogIn from './components/SearchEntity/login';
import Payment from './components/SearchEntity/payment';
import PayNow from './components/SearchEntity/payNow';
import AllDetails from './components/SearchEntity/allDetails';
import CheckIn from './components/checkIn';
//import FlightsClass from './components/SearchEntity/flightsClass';

const App =()=> {
  return (
    <React.Fragment>
      <center>
      
      
      <Marquee className='text-white' style={{"background-color": "#322348"}}>
      <h1 >Welcome to Brown Field Airlines</h1>
</Marquee>
        <NavBar/>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/searchForm" element={<SearchForm/>}/>   
          <Route path="/passenger" element={<Passenger/>}/>
          <Route path="/booking" element={<Booking/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/payNow" element={<PayNow/>}/>
          <Route path="/allDetails" element={<AllDetails/>}/>
          <Route path="/checkIn" element={<CheckIn/>}/>
        
        </Routes>
        </BrowserRouter>
      </center>
      </React.Fragment>
  );
}

export default App;
