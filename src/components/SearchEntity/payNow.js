import React from 'react'
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import { useLocation } from "react-router-dom";

const PayNow = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { flight, fare, fareLabel, totalFare, selectedSeats,initialData ,data} = location.state;
  console.log(totalFare);
   
  const handlePayment = () => {
    alert("Payment successful!");
    navigate("/AllDetails", { state: { flight, fare, fareLabel, totalFare, selectedSeats, initialData, data } });
  };
  return (
    <div>
     <h1>Your total Fare is <strong>{totalFare}</strong></h1> 
     <button onClick={handlePayment}>Pay {totalFare} </button>
    </div>
  )
}

export default PayNow
