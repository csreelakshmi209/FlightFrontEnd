import React, { Component, useState } from "react";
import FlightIcon from '@mui/icons-material/Flight';
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';

const Footer =()=> {
  
    const [mail,setMail]=useState({"email":''})
    const {email}=mail;
    const changeHandler =(e)=>{
        setMail({...mail,[e.target.name]: e.target.value});
    }
    const submitHandler =(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_p4pup5k', 'template_0cnap6s', e.target, 'yxVo3rhKyVh_zf3JI')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        console.log(mail);}
    return (
      <div>   
        <div class=" container-fluid bg-dark ">  
          <footer class="bg-dark text-center text-white">  
            <div class="container p-4"> 
            <section class="mb-2">
                <a
                  class="btn btn-outline-light btn-floating m-1"
                  href="https://www.sandiego.gov/airports/brown"
                  role="button"
                >
                  <FlightIcon/>
                </a>  
              </section>
             
              <h1 className="text-light">Save time Save money</h1>
        <strong className="text-light">Sign up and we'll send the best deals to you</strong>
             <br/><br/> <section >
                <form action="" onSubmit={submitHandler}>
                  <div class="row d-flex justify-content-center">
                    <div class="col-md-5 col-12">
                      <div class="form-outline form-white mb-4">
                      <input 
                         type="email" 
                            class="form-control bg-light" 
                            id="floatingInput" 
                             placeholder="name@example.com"
                             value={email} 
                            name="email" 
                            onChange={changeHandler}
                    />

                      </div>
                    </div>  
                    <div class="col-auto">
                      <button type="submit" class="btn btn-outline-light mb-4">
                        Subscribe
                      </button>
                    </div>   
                  </div>    
                </form>
              </section>  </div>
              
          </footer>
          </div>
        </div>

    );
  }

export default Footer;
