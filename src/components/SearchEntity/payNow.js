import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const PayNow = () => {

  const navigate = useNavigate();
  const location = useLocation();

  if(location.state){
    const { flight, fare, fareLabel, totalFare, selectedSeats,passenger,data } = location.state;
    console.log(totalFare);
  // const { flight, fare, fareLabel, totalFare, selectedSeats,initialData ,data} = location.state;
  // console.log(totalFare);
   
  const handlePayment = () => {
    alert("Payment successful!");
    navigate("/AllDetails", { state: { flight, fare, fareLabel, totalFare, selectedSeats,passenger,data } });
    
  };
  return (
    <div>
     <h1>Your total Fare is <strong>{totalFare}</strong></h1> 
     <button onClick={handlePayment}>Pay {totalFare} </button>
    </div>
  )
}
}
export default PayNow
