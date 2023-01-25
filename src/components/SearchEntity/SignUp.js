import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const SignUp =()=>{
  const navigate = useNavigate();
    const [data,setData]=useState(
        {
            fullName:'',
            userName:'',
            email:'',
            password:'',
        } )
      const [errors, setErrors] = useState({});    
      const [isSubmit, setIsSubmit] = useState(false);

    const {fullName,userName,email,password,confirmPassword}=data;

    const changeHandler=((e)=>
    {
        setData({...data,[e.target.name]: e.target.value});  
    })
    useEffect(() => {
      console.log(errors);
      if (Object.keys(errors).length === 0  && isSubmit) {
        console.log(data);
      }
    }, [errors]);

    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.fullName) {
        errors.fullName = "fullname is required!";
      }
      else if (values.fullName.length < 4) {
        errors.fullName = "Password must be more than 4 characters";
      }
      if (!values.userName) {
        errors.userName = "Username is required!";
      }
      else if (values.userName.length < 4) {
        errors.userName = "Password must be more than 4 characters";
      }
      if (!values.email) {
        errors.email = "Email is required!";
    
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 4) {
        errors.password = "Password must be more than 4 characters";
      } 
      if (!values.confirmPassword) {
        errors.confirmPassword = "Password is required";
      } else if (confirmPassword.length < 8) {
        errors.confirmPassword = "Password must be more than 4 characters";
      } else if (confirmPassword !== values.password) {
        return "Passwords do not match";
      }
      return errors;

  };
  const submitHandler=(e)=>{
    e.preventDefault();
   
    axios.post('http://localhost:9093/api/signUp/add', data,
    {
      headers: {
        'Content-Type': 'application/json'
    }
    })
      .then(response => {
        console.log(response);
        navigate("/login");
      })
      .catch(error => {
        console.log(error);
      });
    }
    return(
        <div>
             <div className="container ">
                <div className="row justify-content-center pt-5">
                 <div className="col-6 shadow ">
                      <h1 className="text-center pt-3 text-secondary">SignUp Form</h1>
            <form onSubmit={submitHandler} style={{"margin":"10px"}} autoComplete='off'>
              <input  type="text" name="fullName" value={fullName}  placeholder='Enter your Full Name' onChange={changeHandler} class="form-control" id="exampleFormControlInput1"  /> <br/> 
              <p>{errors.fullName}</p>
              <input type="text" name="userName" value={userName}  placeholder='Username' onChange={changeHandler} class="form-control" id="exampleFormControlInput1" /> <br/> &nbsp;
              <p>{errors.userName}</p>
              <input  type="email" name="email" value={email} placeholder='email' onChange={changeHandler} class="form-control" id="exampleFormControlInput1" /> <br/> &nbsp;
              <p>{errors.email}</p>
              <input  type="password" name="password" value={password}  placeholder='password' onChange={changeHandler} class="form-control" id="exampleFormControlInput1" /> <br/> &nbsp;
              <p>{errors.password}</p>
              
              <button onClick={submitHandler} class="btn btn-success">Signup</button>

            </form>    
            </div>
            </div>
            </div>
        </div>
       
    )
}
export default SignUp;
