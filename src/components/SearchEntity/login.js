import React, { useState } from 'react';
import axios from 'axios';
import SignUp from './SignUp';
import { connect } from "react-redux";
import { loginAction } from '../actions/loginAction';
import { useLocation } from "react-router-dom";

import {useNavigate} from 'react-router-dom'

const LogIn =()=>{
    const location = useLocation();
    const { flight, fare, fareLabel, totalFare, selectedSeats,initialData } = location.state;
    const navigate=useNavigate();
    const [data,setData]=useState(
        {
            "userName": "",
            "password": ""
        }
    )
    const [loginStatus, setLoginStatus] = useState('');
const {userName,password}=data;
const changeHandler =(e)=>{
    setData({...data, [e.target.name]: e.target.value});
}
const handleSubmit =(e)=>{
    e.preventDefault();
    loginAction(data);
    alert("loggedin successfully")
    axios.post('http://localhost:9093/api/signUp/login', {
        userName: userName,
        password: password
    })
    .then(response => {
        console.log(response);
        if(response.status === 200){
            console.log("Login Successful")
            navigate("/payment", { state: { flight, fare, fareLabel, totalFare, selectedSeats,initialData } });
        }
    })
    .catch(error => {
        console.log(error);
    });
}
  
    return(
        <div>
            <form autoComplete='off' onSubmit={handleSubmit}>
                <input type="text" name='userName' required placeholder='userName' value={userName} onChange={changeHandler}/> <br/> <br/>
                <input type="password" name='password' required placeholder='password' value={password} onChange={changeHandler}/> <br/> <br/>
                <button onClick={handleSubmit}>Signin</button>  &nbsp; &nbsp;   
                {/* <button onClick={signUp} >Signup</button> */}
                <button onClick={()=> navigate('/SignUp')}>Create account</button>
                <div><h1>{loginStatus}</h1></div>
            </form>
        </div>
    )
    }
    // funtion to get updates from store
const mapStateToProps = (state) => {
    return {
      login: state.login,
    };
  };
  
  // function to dispatch actions
  const mapDispatchToProps = (dispatch) => {
    return {
      loginAction,
    };
  };
export default connect(mapStateToProps, mapDispatchToProps()) (LogIn);