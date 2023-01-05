import React, {useState} from 'react'

const FlightApp = () => {

  const [data,setData]=useState(  
    {
      origin:'',
      destination:'',
      departureDate:'',
     returnDate:'',
      numOfTravellers:''
    }
  )
   const {origin,destination,departureDate,returnDate,numOfTravellers}=data; 

   const changeHandler =(e)=>{
    setData({...data,[e.target.name]: e.target.value});
   }

   const submitHandler=(e)=>{
    e.preventDefault();
    console.log(data);
   }

  return (
    <div>
    <div className="container ">
       <div className="row justify-content-center pt-5">
        <div className="col-6 shadow ">
             <h1 className="text-center pt-3 text-secondary">Booking</h1>
                <form onSubmit={submitHandler}>
                
                <select name="origin" value={origin} class="form-select form-select-lg mb-3"  onChange={changeHandler} aria-label="Default select example">
                  <option selected>Select from city</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="chennai">Chennai</option>
                  <option value="hyderabad">Hyderabad</option>
                  <option value="pune">Pune</option>
                  <option value="mumbai">Mumbai</option>
                </select>
                <br/>
                
                <select name="destination" value={destination} class="form-select form-select-lg mb-3"  onChange={changeHandler} aria-label="Default select example">
                  <option selected>Select to city</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="chennai">Chennai</option>
                  <option value="hyderabad">Hyderabad</option>
                  <option value="pune">Pune</option>
                  <option value="mumbai">Mumbai</option>
                </select>
                <br/>
               
                <label  for="exampleFormControlInput1" class="form-label">Departure date</label>
                <input name="departureDate" value={departureDate} onChange={changeHandler} type="date" class="form-control" id="formGroupExampleInput" placeholder="MM/DD/YYYY"/>
                 

                <label for="exampleFormControlInput1" class="form-label">Arrival Date</label>
                <input type="date" name="returnDate" value={returnDate} onChange={changeHandler} class="form-control" id="formGroupExampleInput" placeholder="MM/DD/YYYY"/>
                <br/>
                {/* <input type="number" name="numOfTravellers" value={numOfTravellers} onChange={changeHandler} placeholder="NumOfPassengers" class="input-group mb-3" className="btn btn-outline-secondary dropdown-toggle"/>
                <br/> <br/> */}
                <button></button>

                <button onClick={submitHandler} className="btn btn-success">submit</button>
                <br/>
                </form>
        </div> 
        </div> 
    </div>
    </div>  

    
  )
}

export default FlightApp;