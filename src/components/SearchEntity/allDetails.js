import React from 'react'
import { useLocation } from "react-router-dom";
const AllDetails = () => {
    const location = useLocation();
    const { flight, fare, fareLabel, totalFare, selectedSeats, passengerDetails, paymentDetails } = location.state;
  return (
    <div>
      <table>
        <thead>
      <tr>
          <th>Flight</th>
          <th>Fare</th>
          <th>Fare Label</th>
          <th>Total Fare</th>
          <th>Selected Seats</th>
          <th>Passenger Details</th>
          <th>Payment Details</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>{flight}</td>
          <td>{fare}</td>
          <td>{fareLabel}</td>
          <td>{totalFare}</td>
          {/* <td>{selectedSeats}</td>
          <td>{passengerDetails}</td>
          <td>{paymentDetails}</td> */}
        </tr>
      </tbody>
      </table>
    </div>
  )
}

export default AllDetails
