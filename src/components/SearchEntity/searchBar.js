import React,{useState} from 'react'

import Booking from '../Booking';

const SearchBar = (props) => {
  
  const {data, selectedFare}=props;
  const fareLabel= selectedFare.label;
  const fareValue= selectedFare.value;

  const [showBooking, setShowBooking] = useState(false);

  if(data.length === 0) return <div>No flights available</div>;

  const handleBookClick = () => {
    setShowBooking(true);
  }

  return (
    <div>
      <table class="table table-striped table-hover">
      <thead class="thead-light  bg-dark text-white table-responsive-lg">
        <tr>
          <th scope="col">Flight Number</th>
          <th scope="col">Leave From</th>
          <th scope="col">Go To</th>
          <th scope="col">Departure Date</th>
          <th scope="col">Fare class</th>
          <th scope="col"> Fare price</th>
        </tr>
      </thead>
      <tbody>
       
        {data.map((item) => 
        {
          
        return (
          <tr key={item.flightDto.flightNum}>
            <th scope="row">{item.flightDto.flightNum}</th>
            <td>{item.flightDto.origin}</td>
            <td>{item.flightDto.destination}</td>
            <td>{item.flightDto.departureDate}</td>
            <td>{fareLabel}</td>
            <td>{item.fareDto[fareValue]}</td>
            <button onClick={handleBookClick}>Book Now
  {showBooking ? <Booking flight={item.flightDto} fareLabel={fareLabel} fare={item.fareDto[fareValue]}  seats={item.seats} /> : null}
</button>

          </tr>
        )})}     
      </tbody>
    </table>
    
    </div>
  )
}

export default SearchBar



// import React from 'react'

// import {useNavigate} from 'react-router-dom'
// import Booking from '../Booking';

// const SearchBar = (props) => {
//   const navigate=useNavigate();
//   const {data, selectedFare}=props;
//   const fareLabel= selectedFare.label;
//   const fareValue= selectedFare.value;

//   if(data.length === 0) return <div>No flights available</div>;
 
//   return (
//     <div>
//       <table class="table table-striped table-hover">
//       <thead class="thead-light  bg-dark text-white table-responsive-lg">
//         <tr>
//           <th scope="col">Flight Number</th>
//           <th scope="col">Leave From</th>
//           <th scope="col">Go To</th>
//           <th scope="col">Departure Date</th>
//           <th scope="col">Fare class</th>
//           <th scope="col"> Fare price</th>
//         </tr>
//       </thead>
//       <tbody>
       
//         {data.map((item) => 
//         {
          
//         return (
//           <tr key={item.flightDto.flightNum}>
//             <th scope="row">{item.flightDto.flightNum}</th>
//             <td>{item.flightDto.origin}</td>
//             <td>{item.flightDto.destination}</td>
//             <td>{item.flightDto.departureDate}</td>
//             <td>{fareLabel}</td>
//             <td>{item.fareDto[fareValue]}</td>
           
           
//             {/* <td>
//                   <button onClick={() => navigate("/passengerDetails")}>
//                     Add Passenger
//                   </button>
//                 </td> */}
//           </tr>
//         )})}     
//       </tbody>
//     </table>
    
//     </div>
//   )
// }

// export default SearchBar


