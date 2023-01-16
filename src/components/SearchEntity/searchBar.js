import React from 'react'

const SearchBar = (props) => {
  const {data}=props;

  return (
    <div>
      <table class="table table-striped table-hover">
      <thead class="thead-light  bg-dark text-white table-responsive-lg">
        <tr>
          <th scope="col">Flight Number</th>
          <th scope="col">Leave From</th>
          <th scope="col">Go To</th>
          <th scope="col">Departure Date</th>
          <th scope="col">Economy Fare</th>
        </tr>
      </thead>
      <tbody>
       
        {data.map((item) => (
          <tr key={item.flightDto.flightNum}>
            <th scope="row">{item.flightDto.flightNum}</th>
            <td>{item.flightDto.origin}</td>
            <td>{item.flightDto.destination}</td>
            <td>{item.flightDto.departureDate}</td>
            <td>{item.fareDto.economyFare}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default SearchBar


{/* // import React ,{useState,useEffect} from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";

// const SearchBar =(props)=>{ */}
{/* //     console.log(props);
  
//     return (
//       <div>
//         <div >
//         <table className='table table-bordered table-hover'>
//         <thead className='table-dark'>
//             <tr>
//               <th>Id</th>
              
//               <th>origin</th>
//               <th>destination</th>
//               <th>departureDate</th>
//               <th>Economy Fare</th>
             
//             </tr>
//           </thead>
//           <tbody>
//             {props.tableData} */}
//             {/* {tableData ?.map((s)=>(
//               <tr >
//               <td>{s.data.flightDto.origin}</td>
//               <td>{s.flightDto.destination}</td>
//               <td>{s.flightDto.departureDate}</td>
//               <td>{s.fareDto.economyFare}</td>
//               </tr> */}
//             {/* ))} */}
          
//           </tbody>
//           </table>

//         </div>
//       </div>
//     );
//   }
//   export default SearchBar;

// import React ,{useState,useEffect} from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// // import bangalore from "../Images/bangalore.jpg";
// import { connect } from "react-redux";

// const SearchBar =({data})=>{
//    const {flights}=data
  
//   useEffect(()=>{
//     axios
//     .get(`http://localhost:8181/api/flight/getFare/bangalore/venkatagiri/2023-2-3`)
//     .then((res) => {
//       console.log(res);
//       // this.setState({ flights: res.data });
//     })
//     .catch((err) => console.log(err));

//     },[]); 

// //we can put handleDelete here 
  
//     return (
//       <div
//         // style={{
//         //   backgroundImage: `url(${banglore})`,
//         //   backgroundSize: "cover",
//         //   width: "1280px",
//         //   height: "1000px",
//         // }}
//       >
       
//         <div >
//         <table className='table table-bordered table-hover'>
//         <thead className='table-dark'>
//             <tr>
//               <th>Id</th>
              
//               <th>origin</th>
//               <th>destination</th>
//               <th>departureDate</th>
//               <th>Economy Fare</th>
             
//             </tr>
//           </thead>
//           <tbody>
//             {/* <tr>
//               <td>{origin}</td>
//               <td>{destination}</td>
//               <td>{departureDate}</td>
//             </tr> */}
//             {flights ?.map((s)=>(
//               <tr >
//               <td>{s.flightDto.origin}</td>
//               <td>{s.flightDto.destination}</td>
//               <td>{s.flightDto.departureDate}</td>
//               <td>{s.fareDto.economyFare}</td>
//               </tr>
//             ))}
          
//           </tbody>
//           </table>

//         </div>
//       </div>
//     );
//   }

// funtion to get updates from store
//export default SearchBar;
// const mapStateToProps = (state) => {
//   return {
//     login: state.login,
//   };
// };
// export default connect(mapStateToProps)(Flights);

