import './App.css';
import Home from './components/home';
import NavBar from './components/navBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import React from 'react';
import Passenger from './components/passenger';
import SearchForm from './components/searchForm';
import Flights from './components/flights';
import Marquee from "react-fast-marquee";
import FlightsClass from './components/SearchEntity/flightsClass';
import SearchFilter from './components/SearchEntity/searchBar';

const App =()=> {
  return (
    <React.Fragment>
      <center>
      
      <BrowserRouter>
      <Marquee className='text-white' style={{"background-color": "#322348"}}>
      <h1 >Welcome to Brown Field Airlines</h1>
</Marquee>
        <NavBar/>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/searchForm" element={<SearchForm/>}/>   
          <Route path="/passengerDetails" element={<Passenger/>}/>
          <Route path="/flightsForm" element={<Flights/>}/>
          <Route path="/flightsClass" element={<FlightsClass/>}/>
          <Route path="/searchBar" element={<SearchFilter/>}/>
        </Routes>
      </BrowserRouter>
      </center>
      </React.Fragment>
  );
}

export default App;
