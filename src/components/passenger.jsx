import React, { useState } from 'react'

const Passenger = () => {
    const [data,setData]=useState(
        {
            firstName:'',
            lastName:'',
            gender:'',
            email:'',
            dob:'',
            passportNumber:'',
            nationality:'',
            address:''

        })

        const {firstName,lastName,gender,email,dob,passportNumber,nationality,address}=data;
  const changeHandler =(e)=>{
    setData({...data,[e.target.name]: e.target.value});
  }
  const submitHandler=(e)=>{
    e.preventDefault();
    setData("");
    console.log(data);
   }
  
        return (
  <div>
    <div className="container  ">
       <div className="row justify-content-center pt-5">
        <div className="col-6 shadow ">
          <h1 className="text-center pt-3 text-secondary">Fill your details here</h1>
            <form onSubmit={submitHandler}>
             <div class="input-group">
              <span class="input-group-text">First and last name</span>
              <input type="text" name="firstName" value={firstName} onChange={changeHandler} aria-label="First name" class="form-control"/>
              <input type="text" name="lastName" value={lastName} onChange={changeHandler} aria-label="Last name" class="form-control"/>
              
             </div> 
             <br/>
             <div class="form-check">
  <input value="male" name="gender" onChange={changeHandler} class="form-check-input" type="radio"  id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Male
  </label>
</div>
<div class="form-check">
  <input value="female" name="gender" onChange={changeHandler} class="form-check-input" type="radio"  id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Female
  </label>
</div>
<div class="form-check">
  <input value="other" name="gender" onChange={changeHandler} class="form-check-input" type="radio"  id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Other
  </label>
</div>
<br/>
  <input type="email" value={email} name="email" onChange={changeHandler} class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  <br/>
  <input name="dob" value={dob} type="date" onChange={changeHandler} class="form-control" id="formGroupExampleInput" placeholder=" DOB MM/DD/YYYY"/>
  <br/>
  <input type="text" value={passportNumber} name="passportNumber"  onChange={changeHandler}class="form-control" id="exampleFormControlInput1" placeholder="Passport Number"/>            
  <br/>
  <input type="text" value={nationality} name="nationality" onChange={changeHandler} class="form-control" id="exampleFormControlInput1" placeholder="nationality"/>           
   <br/>
   <input type="text" value={address} name="address" onChange={changeHandler} class="form-control" id="exampleFormControlInput1" placeholder="nationality"/>           
   <br/> 
   <button onClick={submitHandler} className="btn btn-success">submit</button>
    <br/>
    </form>
        </div>
       </div>
    </div>         
  </div>
  )
}

export default Passenger;