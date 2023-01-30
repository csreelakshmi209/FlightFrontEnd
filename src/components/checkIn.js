import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CheckIn = () => {
    const navigate = useNavigate();
    const [passengerId, setPassengerId] = useState('');
   
    const [passportNumber, setPassportNumber] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            console.log(`http://localhost:9093/api/passenger/verify/${parseInt(passengerId)}/${passportNumber}`);
            
          const response = await axios.get(`http://localhost:9093/api/passenger/verify/${parseInt(passengerId)}/${passportNumber}`);
          if(response.data.status){
              alert("Invalid passengerId or passportNumber");
              
          }
          else{
            alert('checked in successfully');
            navigate("/");
          }
        } catch (err) {
          console.error(err);
        }
      };

   
    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Passenger ID:</label>
                <input type="number" value={passengerId} onChange={e => setPassengerId(e.target.value)} />
            </div>
            <div>
                <label>Passport Number:</label>
                <input type="text" value={passportNumber} onChange={e => setPassportNumber(e.target.value)} />
            </div>
            <button type="submit">Check-In</button>
        </form>
    );
}

export default CheckIn;
