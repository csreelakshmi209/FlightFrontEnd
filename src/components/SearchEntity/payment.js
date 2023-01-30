import React, { useState } from 'react'
import axios from 'axios';
import {Paper,Box,Grid,TextField,MenuItem,Typography,FormControl,InputLabel,Button  
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const Payment = () => {
    const navigate = useNavigate();

    const location = useLocation();
  const { flight, fare, fareLabel, totalFare, selectedSeats,passenger } = location.state;

    const [data,setData]=useState({
       cardHolderName:'',
       cardNumber:'',
       cvv:'',
       expirationDate:''
    })

    const {cardHolderName,cardNumber,cvv,expirationDate}=data;

    const changeHandler=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:9093/api/payment/add',{
    
                cardHolderName,
                cardNumber,
                cvv,
                expirationDate   
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                console.log(response);
                navigate("/payNow", { state: { flight, fare, fareLabel, totalFare, selectedSeats,passenger,data } });
                console.log(totalFare);
            })
            .catch(error => {
                console.log(error);
            });
    }

  return (
    <div className="container bg bg-light">
        <div className="row justify-content-center pt-5">
         <div className="col-6 shadow ">
              <h1 className="text-center pt-3 text-secondary">Do your payment here</h1>
              <br/>
              <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
                  noValidate ></Box>
      <form onSubmit={submitHandler}>
      <TextField name="cardHolderName" required type="text"  value={cardHolderName} onChange={changeHandler} 
                  id="outlined-multiline-flexible"
                  label="Full Name"
                  multiline
                  maxRows={4} /> <br/>
       <TextField name="cardNumber" required type="number"  value={cardNumber} onChange={changeHandler} 
                  id="outlined-multiline-flexible"
                  label="Card Number"
                  multiline
                  maxRows={4} /> <br/>    
        <TextField name="cvv" required type="number"  value={cvv} onChange={changeHandler} 
                  id="outlined-multiline-flexible"
                  label="CVV"
                  multiline
                  maxRows={4} /> <br/>   
         <TextField name="expirationDate" required type="text"  value={expirationDate} onChange={changeHandler} 
                  id="outlined-multiline-flexible"
                  label="Expiration Date"
                  multiline
                  maxRows={4} /> <br/><br/>     

<button onClick={submitHandler} class="btn btn-success">Submit</button>
        </form>
        </div>
        </div>
        </div>
  )
}

export default Payment
