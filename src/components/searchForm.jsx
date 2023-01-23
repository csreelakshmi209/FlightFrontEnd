import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import SearchBar from './SearchEntity/searchBar';
import Select from 'react-select';

import { Label } from '@material-ui/icons';
import { FormGroup } from 'react-bootstrap';
import {Paper,Box,Grid,TextField,MenuItem,Typography,FormControl,InputLabel,Button  
  } from '@material-ui/core';

const FlightApp = () => {
  
  const [showTable, setShowTable] = useState(false);

  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    departureDate: '',
    selectedFare:'',
  });

  const [responseData, setResponseData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8181/api/flight/getFare`, {
        
          origin: formData.origin,
         destination: formData.destination,
          departureDate: formData.departureDate,
          selectedFare: formData.selectedFare,
    },
      {
        headers: {
          'Content-Type': 'application/json'
      }
      }
        );
      //console.log(res.params.origin);
      setResponseData(res.data);
      setShowTable(true);
      console.log(res);
      
    } catch (err) {
      console.error(err);
      alert("No flights found");
    }
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fareOptions = [
    { value: 'economyFare', label: 'Economy' },
    { value: 'businessFare', label: 'Business' },
    { value: 'premiumFare', label: 'Premium' },
  ];

  const handleFareChange = (e) => {
    setFormData({ ...formData, selectedFare: e });
  };

  

  return (
   
      <div className="container bg bg-light">
        <div className="row justify-content-center pt-5">
         <div className="col-6 shadow ">
              <h1 className="text-center pt-3 text-secondary">Book your tickets now</h1>
              <br/>
              <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
                  noValidate ></Box>
      <form onSubmit={handleSubmit}>
      <TextField name="origin" required type="text"  value={formData.origin} onChange={changeHandler} 
                  id="outlined-multiline-flexible"
                  label="Leave From"
                  multiline
                  maxRows={4} /> <br/>
       <TextField name="destination" required type="text" value={formData.destination} onChange={changeHandler}
              id="outlined-multiline-flexible"
              label="Going To"
              multiline
              maxRows={4}/> 
      <br/> <br/>
      <FormControl style={{"width":"22ch", "margin":"8px"}}>
       <InputLabel id="demo-simple-select-label">Fare Class</InputLabel>
        <Select
          name="selectedFare"
          value={formData.selectedFare}
          onChange={handleFareChange}
          options={fareOptions}/>
        </FormControl>  

       <div class="form-floating mb-3 bg bg-light" style={{'margin':'8px', 'width':'22ch'}}>
                 <input type="date"  name="departureDate" placeholder="MM/DD/YYYY"  value={formData.departureDate} onChange={changeHandler} class="form-control mb-3 ui-autocomplete-input" id="floatingInput" size="22"  />
                 <label for="floatingInput">Date of Journey</label>
         </div> 
      <button type="submit" className="btn btn-success">Search</button>
     
     </form>
     </div>
     </div>
    <br/>  <br/> <br/>
    {responseData.length === 0 ? <div>No flights available</div> :showTable && <SearchBar data={responseData} selectedFare={formData.selectedFare}/> }
    
    </div>
  )
}

export default FlightApp;

// import React, { useState } from 'react';
// import axios from 'axios';
// import {useNavigate} from 'react-router-dom'
// import SearchBar from './SearchEntity/searchBar';
// import Select from 'react-select';

// import { Label } from '@material-ui/icons';
// import { FormGroup } from 'react-bootstrap';
// import {Paper,Box,Grid,TextField,MenuItem,Typography,FormControl,InputLabel,Button  
//   } from '@material-ui/core';

// const FlightApp = () => {
  
//   const [showTable, setShowTable] = useState(false);

//   const [formData, setFormData] = useState({
//     origin: '',
//     destination: '',
//     departureDate: '',
//     selectedFare:'',
//   });

//   const [responseData, setResponseData] = useState([]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(`http://localhost:8181/api/flight/getFare`, {
        
//           origin: formData.origin,
//          destination: formData.destination,
//           departureDate: formData.departureDate,
//           selectedFare: formData.selectedFare,
//     },
//       {
//         headers: {
//           'Content-Type': 'application/json'
//       }
//       }
//         );
//       //console.log(res.params.origin);
//       setResponseData(res.data);
//       setShowTable(true);
//       console.log(res);
      
//     } catch (err) {
//       console.error(err);
//       alert("No flights found");
//     }
//   };

//   const changeHandler = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const fareOptions = [
//     { value: 'economyFare', label: 'Economy' },
//     { value: 'businessFare', label: 'Business' },
//     { value: 'premiumFare', label: 'Premium' },
//   ];

//   const handleFareChange = (e) => {
//     setFormData({ ...formData, selectedFare: e });
//   };

  

//   return (
   
//       <div className="container bg bg-light">
//         <div className="row justify-content-center pt-5">
//          <div className="col-6 shadow ">
//               <h1 className="text-center pt-3 text-secondary">Book your tickets now</h1>
//               <br/>
//               <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
//                   noValidate ></Box>
//       <form onSubmit={handleSubmit}>
//       <TextField name="origin" required type="text"  value={formData.origin} onChange={changeHandler} 
//                   id="outlined-multiline-flexible"
//                   label="Leave From"
//                   multiline
//                   maxRows={4} /> <br/>
//        <TextField name="destination" required type="text" value={formData.destination} onChange={changeHandler}
//               id="outlined-multiline-flexible"
//               label="Going To"
//               multiline
//               maxRows={4}/> 
//       <br/> <br/>
//       <FormControl style={{"width":"22ch", "margin":"8px"}}>
//        <InputLabel id="demo-simple-select-label">Fare Class</InputLabel>
//         <Select
//           name="selectedFare"
//           value={formData.selectedFare}
//           onChange={handleFareChange}
//           options={fareOptions}/>
//         </FormControl>  

//        <div class="form-floating mb-3 bg bg-light" style={{'margin':'8px', 'width':'22ch'}}>
//                  <input type="date"  name="departureDate" placeholder="MM/DD/YYYY"  value={formData.departureDate} onChange={changeHandler} class="form-control mb-3 ui-autocomplete-input" id="floatingInput" size="22"  />
//                  <label for="floatingInput">Date of Journey</label>
//          </div> 
//       <button type="submit" className="btn btn-success">Search</button>
     
//      </form>
//      </div>
//      </div>
//     <br/>  <br/> <br/>
//     {responseData.length === 0 ? <div>No flights available</div> :showTable && <SearchBar data={responseData} selectedFare={formData.selectedFare}/> }
    
//     </div>
//   )
// }

// export default FlightApp;