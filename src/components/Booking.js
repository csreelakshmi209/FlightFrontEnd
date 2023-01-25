import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Passenger from './passenger';
import axios from 'axios';
import PayNow from './SearchEntity/payNow';

const Booking = ({flight,fare,fareLabel}) => {
    const navigate = useNavigate();

     const [showSeats, setShowSeats] = useState(false);
     const [selectedSeats, setSelectedSeats] = useState([]);
     const [totalFare, setTotalFare] = useState(0);
    

    const handleBookNow = () => {
        setShowSeats(true);
    }
    const handleSelectSeat = (seat) => {
          
        if (selectedSeats.includes(seat)) {
            setSelectedSeats(selectedSeats.filter(s => s !== seat));
            setTotalFare(totalFare - fare);
          
        } 
        
        else {
            setSelectedSeats([...selectedSeats, seat]);
            setTotalFare(totalFare + fare);
        }
        console.log(`Seat ${seat} selected`);
    }
   

      const handleSubmit = (e) => {
        e.preventDefault();
       console.log(flight.selectedFare);
       console.log(fare);
       console.log(fareLabel)
       console.log(totalFare);
       console.log(selectedSeats);
        axios.post('http://localhost:9093/api/book/addBooking', {
            origin: flight.origin,
            destination: flight.destination,
            departureDate: flight.departureDate,
            selectedFare: flight.selectedFare,
            flightName:flight.flightName,
            flightNum: flight.flightNum,
            fare: fare,
            fareLabel:fareLabel,
            totalFare: totalFare,
            selectedSeats: selectedSeats.join(','),
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                console.log(response);
                navigate("/passenger", { state: { flight, fare, fareLabel, totalFare, selectedSeats } });
            })
            .catch(error => {
                console.log(error);
            });
    }
    
    

    const seats = [];
    for (let i = 1; i <= 20; i++) {
        seats.push(
            <div key={i} className="col-3">
                <div className="card text-left">
                    <div className="card-body">
                        <h5 className="card-title">Seat {i}</h5>
                         <button className="btn btn-primary" 
                         onClick={() => handleSelectSeat(i)}>
                            {selectedSeats.includes(i) ? 'Deselect' : 'Select'}
                         </button>         
                         </div>
                 </div>
             </div>
         )
     }

     
    return (
        <div>
     <div className="row mx-auto">
            {seats.map((seat) => (
                <div key={seat} className="col-3">
                    <div className="card">
                        <div className="card-body">
                            <h5> {seat}</h5>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div>Total Fare: {totalFare}</div>
        <button onClick={handleSubmit}>Submit</button>
        {selectedSeats.length}
        {totalFare && <PayNow totalFare={totalFare} />}             
    </div>
)
}

export default Booking;
