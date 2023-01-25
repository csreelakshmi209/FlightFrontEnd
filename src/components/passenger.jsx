
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import axios from 'axios';
import { useLocation } from "react-router-dom";

const Passenger = () => {

  const location = useLocation();
  const { flight, fare, fareLabel, totalFare, selectedSeats } = location.state;

    const [submissionCount, setSubmissionCount] = useState(0);
  console.log(selectedSeats)
  const initialData =Array.from({ length: selectedSeats.length }, (_, i) => ({
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    passportNumber: '',
    nationality: '',
    pnr:''
  }))
  //  Array(selectedSeats.length).fill({
  //   firstName: '',
  //   lastName: '',
  //   gender: '',
  //   email: '',
  //   passportNumber: '',
  //   nationality: '',
    
  // });

  const [data, setData] = useState(initialData);
  const navigate = useNavigate();
        const changeHandler = (e, index) => {
          const newPassengerForms = [...data];
          newPassengerForms[index] = { ...newPassengerForms[index], [e.target.name]: e.target.value };
          setData(newPassengerForms);
        }

        const submitHandler=(e,index)=>{
          e.preventDefault();

          const loginStatus = localStorage.getItem("isLoggedIn");
          if (!loginStatus) {
            navigate("/login", { state: { flight, fare, fareLabel, totalFare, selectedSeats,initialData } });

          }
          console.log(`Index passed in: ${index}`);
          console.log(`Selected seats: ${selectedSeats}`);
         
           if (index < data.length) {
              const passenger = data[index];
              console.log(passenger);
              if (passenger) {
                  axios.post('http://localhost:9093/api/passenger/add', passenger,
                  {
                      headers: {
                          'Content-Type': 'application/json'
                      }
                  })
                  .then(response => {
                      console.log(response);
                      setSubmissionCount(submissionCount + 1);
                  })
                  .catch(error => {
                      console.log(error);
                  });
              } else {
                  console.log("Passenger object is null")
              }
          } else {
              console.log("Index out of bounds of data array")
          }
          
      }
          
   return(
   <div>
   {selectedSeats.map((seat, index) => {
  return (

      <div key={index}>
        
          <div className="container" >
       <div className="row justify-content-center pt-5">
        <div className="col-6 shadow ">
          <h1 className="text-center pt-3 text-secondary">Fill your details here</h1>
          <h4>Passenger details for seat number: {seat}</h4>
            <form onSubmit={(e) => submitHandler(e, index)}>
             <div class="input-group">
              <span class="input-group-text">First and last name</span>
              <input type="text" name="firstName" value={data[index].firstName} onChange={(e) => changeHandler(e, index)} aria-label="First name" class="form-control"/>
              <input type="text" name="lastName" value={data[index].lastName} onChange={(e) => changeHandler(e, index)} aria-label="Last name" class="form-control"/>
              
             </div> 
             <br/>
             <div class="form-check">
  <input value="male" name="gender" onChange={(e) => changeHandler(e, index)} class="form-check-input" type="radio"  id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Male
  </label>
</div>
<div class="form-check">
  <input value="female" name="gender" onChange={(e) => changeHandler(e, index)} class="form-check-input" type="radio"  id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Female
  </label>
</div>
<div class="form-check">
  <input value="other" name="gender" onChange={(e) => changeHandler(e, index)} class="form-check-input" type="radio"  id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Other
  </label>
</div>
<br/>
  <input type="email" value={data[index].email} name="email" onChange={(e) => changeHandler(e, index)} class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  <br/>
  <input type="text" value={data[index].passportNumber} name="passportNumber"  onChange={(e) => changeHandler(e, index)} class="form-control" id="exampleFormControlInput1" placeholder="Passport Number"/>            
  <br/>
  <input type="text" value={data[index].nationality} name="nationality" onChange={(e) => changeHandler(e, index)} class="form-control" id="exampleFormControlInput1" placeholder="nationality"/>           
   <br/>
  
   <button onClick={(e) => submitHandler(e, index)} className="btn btn-success">submit</button>
   {submissionCount === selectedSeats.length && (
        <button>Pay Now</button>

      )}
    <br/>
    </form>
        </div>
       </div>
    </div>  
    
  </div>
  )
})}  
</div>
)
}

export default Passenger;

// import React, { useState } from 'react'
// import axios from 'axios';
// import { useLocation } from "react-router-dom";

// const Passenger = () => {

//   const location = useLocation();
//     const { selectedSeats } = location.state;
//   console.log(selectedSeats)
//     const [data,setData]=useState(
//         {
//             firstName:'',
//             lastName:'',
//             gender:'',
//             email:'',
//             passportNumber:'',
//             nationality:'',
//             address:''

//         })
       
//         const {firstName,lastName,gender,email,dob,passportNumber,nationality,address}=data;
//   const changeHandler =(e)=>{
//     setData({...data,[e.target.name]: e.target.value});
//   }
//   const submitHandler=(e)=>{
//     e.preventDefault();
//     axios.post('http://localhost:9093/passenger/add', data,
//     {
//       headers: {
//         'Content-Type': 'application/json'
//     }
//     })
//       .then(response => {
//         console.log(response);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//    }
//    return(
//    <div>
//    {selectedSeats.map((seat, index) => {
//   return (

//       <div key={index}>
        
    
      
//           <div className="container" >
//        <div className="row justify-content-center pt-5">
//         <div className="col-6 shadow ">
//           <h1 className="text-center pt-3 text-secondary">Fill your details here</h1>
//           <h4>Passenger details for seat number: {seat}</h4>
//             <form onSubmit={submitHandler}>
//              <div class="input-group">
//               <span class="input-group-text">First and last name</span>
//               <input type="text" name="firstName" value={firstName} onChange={changeHandler} aria-label="First name" class="form-control"/>
//               <input type="text" name="lastName" value={lastName} onChange={changeHandler} aria-label="Last name" class="form-control"/>
              
//              </div> 
//              <br/>
//              <div class="form-check">
//   <input value="male" name="gender" onChange={changeHandler} class="form-check-input" type="radio"  id="flexRadioDefault1"/>
//   <label class="form-check-label" for="flexRadioDefault1">
//     Male
//   </label>
// </div>
// <div class="form-check">
//   <input value="female" name="gender" onChange={changeHandler} class="form-check-input" type="radio"  id="flexRadioDefault1"/>
//   <label class="form-check-label" for="flexRadioDefault1">
//     Female
//   </label>
// </div>
// <div class="form-check">
//   <input value="other" name="gender" onChange={changeHandler} class="form-check-input" type="radio"  id="flexRadioDefault1"/>
//   <label class="form-check-label" for="flexRadioDefault1">
//     Other
//   </label>
// </div>
// <br/>
//   <input type="email" value={email} name="email" onChange={changeHandler} class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
//   <br/>
//   <input type="text" value={passportNumber} name="passportNumber"  onChange={changeHandler}class="form-control" id="exampleFormControlInput1" placeholder="Passport Number"/>            
//   <br/>
//   <input type="text" value={nationality} name="nationality" onChange={changeHandler} class="form-control" id="exampleFormControlInput1" placeholder="nationality"/>           
//    <br/>
//    <input type="text" value={address} name="address" onChange={changeHandler} class="form-control" id="exampleFormControlInput1" placeholder="address"/>           
//    <br/> 
//    <button onClick={submitHandler} className="btn btn-success">submit</button>
//     <br/>
//     </form>
//         </div>
//        </div>
//     </div>  
    
//   </div>
//   )
// })}  
// </div>
// )
// }


// export default Passenger;
