
import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import SearchBar from './SearchEntity/searchBar';

const FlightApp = () => {

  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    departureDate: '',
  });

  const [responseData, setResponseData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { origin, destination, departureDate } = formData;
    
    try {
      const res = await axios.post(`http://localhost:8181/api/flight/getFare`, {
        
          origin: formData.origin,
         destination: formData.destination,
          departureDate: formData.departureDate,
    },
      {
        headers: {
          'Content-Type': 'application/json'
      }
      }
        );
      //console.log(res.params.origin);
      setResponseData(res.data);
      console.log(res);
      //navigate('/searchBar');
      
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        required
        placeholder="Origin"
        name="origin"
        value={formData.origin}
        onChange={handleChange}
      />

<input
        type="text"
        required
        placeholder="Destination"
        name="destination"
        value={formData.destination}
        onChange={handleChange}
      />

<input
        type="date"
        required
        placeholder="Departure Date"
        name="departureDate"
        value={formData.departureDate}
        onChange={handleChange}
      />

<button type="submit" >Search</button>
    </form>
    <br/>
    <br/>
    <hr/>
    <SearchBar data={responseData}/>
    </div>
  )
}

export default FlightApp


// import React, {useEffect, useState} from 'react'
// import {
//   Paper,
//   Box,
//   Grid,
//   TextField,
//   Typography,
//   FormControlLabel,
//   Checkbox,
//   Button  
// } from '@material-ui/core';
// import {useNavigate} from 'react-router-dom'
// import axios from 'axios';
// import FlightsClass from './SearchEntity/flightsClass';
// import SearchBar from 'material-ui-search-bar';

// const FlightApp = () => {
//   const navigate=useNavigate();
  
//   const [data,setData]=useState(  
//     {
//         origin:'',
//         destination:'',
//         departureDate:'',
//       }
//   )

//   // useEffect(()=>{
//   //   loadUserData();
//   // },[]); 
//    const changeHandler =(e)=>{
//     setData({...data,[e.target.name]: e.target.value});
//    }

//    const submitHandler=(e,data)=>{
//     // const {origin,destination,departureDate}=data
//      //console.log(origin);
//     e.preventDefault();
//     axios.get(`http://localhost:8181/api/flight/getFare/{origin}/{destination}/{departureDate}`)
//     .then((res) => {
//      <SearchBar data={res}/>
//       console.log(<SearchBar data={res}/>);
//       navigate('/searchBar');
//       console.log(navigate('/searchBar'));
//       console.log(res);
//     })
//     .catch((err) => {
//       alert("Error");
//     });

   
//    } 

//    const {origin,destination,departureDate}=data;  

//   return (
    
//     <div>
//     <div className="container bg bg-light">
//        <div className="row justify-content-center pt-5">
//         <div className="col-6 shadow ">
//              <h1 className="text-center pt-3 text-secondary">Book your tickets now</h1>
//              <br/>
//              <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
//                   noValidate autoComplete="off">
//         <form onSubmit={submitHandler}>
        
//           <TextField name="origin" type="search"  value={origin} onChange={changeHandler} 
//                   id="outlined-multiline-flexible"
//                   label="Leave From"
//                   multiline
//                   maxRows={4} /> 
//              <br/>
//           <TextField name="destination"  value={destination} onChange={changeHandler}
//               id="outlined-multiline-flexible"
//               label="Going To"
//               multiline
//               maxRows={4}/>
//         <br/>
//         <div class="form-floating mb-3 bg bg-light" style={{'margin':'8px', 'width':'25ch'}}>
//                 <input type="date"  name="departureDate" placeholder="MM/DD/YYYY"  value={departureDate} onChange={changeHandler} class="form-control mb-3 ui-autocomplete-input" id="floatingInput" size="22"  autocomplete="off"/>
//                 <label for="floatingInput">Date of Journey</label>
//         </div>      
       
//                 <button type="submit" value="submit" onClick={submitHandler} className="btn btn-success">Search for Flight</button>
//                 <br/> <br/>
                
//                 </form>
//                 </Box>
//         </div> 
//         </div> 
//     </div>
//     </div>      
//   )
// }

// export default FlightApp;


// import React, {useEffect, useState} from 'react'
// import {
//   Paper,
//   Box,
//   Grid,
//   TextField,
//   Typography,
//   FormControlLabel,
//   Checkbox,
//   Button  
// } from '@material-ui/core';
// import {useNavigate} from 'react-router-dom'
// import axios from 'axios';
// import FlightsClass from './SearchEntity/flightsClass';
// import SearchBar from 'material-ui-search-bar';

// const FlightApp = () => {
//   const navigate=useNavigate();
  
//   const [data,setData]=useState(  
//     {
//       flights:{
//         origin:'',
//         destination:'',
//         departureDate:'',
//       }
     
//     }
//   )

//   // useEffect(()=>{
//   //   loadUserData();
//   // },[]); 
//   // const loadUserData=async ()=>{
//   //   return await axios
//   //   .get(`http://localhost:8181/api/flight/getFare/{origin}/{destination}{departureDate}`)
//   //   .then((response)=> setData(response.data))
//   //   .catch((err)=> console.log(err));
//   // };
//   // const [value, setValue] = React.useState(null);
//   // const [errors, setErrors] = useState({});    
//    const {origin,destination,departureDate}=data; 

//    const changeHandler =(e)=>{
//     e.preventDefault();
//     setData({...data,[e.target.name]: e.target.value});
//    }

//    const submitHandler=(e)=>{
//     e.preventDefault();
//     // setErrors(validate(data));
//     console.log(data);
//     navigate('/searchBar');
//    }

  

//   return (
    
//     <div>
//     <div className="container bg bg-light">
//        <div className="row justify-content-center pt-5">
//         <div className="col-6 shadow ">
//              <h1 className="text-center pt-3 text-secondary">Book your tickets now</h1>
//              <br/>
//              <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
//                   noValidate autoComplete="off">
//         <form onSubmit={submitHandler}>
        
//           <TextField name="origin" required type="search"  value={origin} onChange={changeHandler} 
//                   id="outlined-multiline-flexible"
//                   label="Leave From"
//                   // error={errors.fullname ? true : false}
//                   multiline
//                   maxRows={4} /> 
//                    {/* <Typography variant="inherit" color="textSecondary">
//                 {errors.fullname?.message} */}
//              <br/>
//           <TextField name="destination"  value={destination} onChange={changeHandler}
//               id="outlined-multiline-flexible"
//               label="Going To"
//               multiline
//               maxRows={4}/>
//         <br/>
//         <div class="form-floating mb-3 bg bg-light" style={{'margin':'8px', 'width':'25ch'}}>
//                 <input type="date"  name="departureDate" placeholder="MM/DD/YYYY"  value={departureDate} onChange={changeHandler} class="form-control mb-3 ui-autocomplete-input" id="floatingInput" size="22"  autocomplete="off"/>
//                 <label for="floatingInput">Date of Journey</label>
//         </div>      
       
//         {/* <SearchBar flights={data}/> */}
//                 <button type="submit" value="submit" onClick={submitHandler} className="btn btn-success">Search for Flight</button>
//                 <br/> <br/>
//                 {/* onClick={()=>navigate('/searchBar')} */}
//                 </form>
//                 </Box>
//                 {/* <FlightsClass flights={data.flights}/> */}
               
//         </div> 
//         </div> 
//     </div>

    
//     </div>  
    


    
//   )
// }

// export default FlightApp;

