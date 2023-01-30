import React from 'react'
import { useLocation } from "react-router-dom";
const AllDetails = () => {
    const location = useLocation();
    const { flight, fare, fareLabel, totalFare, selectedSeats, passenger, data } = location.state;
   
    return (
    <div class="row">
  <div class="col-sm-6">
         <div class="card" style={{"width": "18rem"}}>
  <div class="card-header">
    <h2>Flight Details</h2>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><h5>Flight Number : {flight.flightNum}</h5> </li>
    <li class="list-group-item"><h5>Flight Name : {flight.flightName}</h5></li>
    <li class="list-group-item"><h5>Flight Origin City: {flight.origin}</h5></li>
    <li class="list-group-item"><h5>Flight Destination : {flight.destination}</h5></li>
    <li class="list-group-item"><h5>Flight Departure Date : {flight.departureDate}</h5></li>
    <li class="list-group-item"><h5>Flight Fare Class : {fareLabel}</h5></li>
    <li class="list-group-item"><h5>Flight Fare Prize : {fare}</h5></li>
  </ul>
</div>
</div>
<div class="col-sm-6">
<div class="card" style={{"width": "18rem"}}>
  <div class="card-header">
    <h2>Passenger Details</h2>
  </div>
  {selectedSeats.map((seat, index) => (
            <div key={index}>
                <h5>Seat Number: {selectedSeats}</h5>
                <h5>Passenger Name: {passenger.firstName}</h5>
                <h5>Gender: {passenger.gender}</h5>
                <h5>Email: {passenger.email}</h5>
                <h5>Passport Number: {passenger.passportNumber}</h5>
                <h5>Nationality: {passenger.nationality}</h5>
            </div>
        ))}
  </div>
</div>
    </div>
  )
}

export default AllDetails
