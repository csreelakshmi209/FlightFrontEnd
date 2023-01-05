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
          {/* <!-- Footer --> */}
          <footer class="bg-dark text-center text-white">
            {/* <!-- Grid container --> */}
            <div class="container p-4">
              {/* <!-- Section: Social media --> */}
              <section class="mb-2">
                <a
                  class="btn btn-outline-light btn-floating m-1"
                  href="https://www.sandiego.gov/airports/brown"
                  role="button"
                >
                  <FlightIcon/>
                </a>
                <a
                  class="btn btn-outline-light btn-floating m-1"
                  href="https://twitter.com"
                  role="button"
                >
                  <TwitterIcon></TwitterIcon>
                </a>
                <a
                  class="btn btn-outline-light btn-floating m-1"
                  href="https://instagram.com/emergency.ngo?utm_medium=copy_link"
                  role="button"
                >
                  <InstagramIcon></InstagramIcon>
                </a>
                <a
                  class="btn btn-outline-light btn-floating m-1"
                  href="https://esahaj.gov.in/contactus"
                  role="button"
                >
                  <ContactEmergencyIcon/>
                </a>
                {/* <a
                  class="btn btn-outline-light btn-floating m-1"
                  href="https://github.com/KalyaniDhavale98/Ngo-React.git"
                  role="button"
                >
                  <GitHubIcon></GitHubIcon>
                </a> */}
              </section>
              {/* <!-- Section: Social media --> */}

              {/* <!-- Section: Form --> */}
              <h1 className="text-light">Save time Save money</h1>
        <strong className="text-light">Sign up and we'll send the best deals to you</strong>
              <section class="">
                <form action="" onSubmit={submitHandler}>
                  {/* <!--Grid row--> */}
                  <div class="row d-flex justify-content-center">
                    {/* <!--Grid column--> */}
                    <div class="col-auto">
                      <p class="pt-2">
                        
                      </p>
                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div class="col-md-5 col-12">
                      {/* <!-- Email input --> */}
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
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div class="col-auto">
                      {/* <!-- Submit button --> */}
                      <button type="submit" class="btn btn-outline-light mb-4">
                        Subscribe
                      </button>
                    </div>
                    {/* <!--Grid column--> */}
                  </div>
                  {/* <!--Grid row--> */}
                </form>
              </section>
              {/* <!-- Section: Form --> */}

              {/* <!-- Section: Text --> */}
              <section class="mb-4">
                <p>
                Brown Field Municipal is located 1.5 miles north of the
                 U.S.-Mexico border in the Otay Mesa community of the City
                  of San Diego. The airport, originally named East Field in 
                  honor of Army Maj. Whitten J. East, opened in 1918 when the 
                  U.S. Army established an aerial gunnery and aerobatics 
                school in order to relieve congestion at North Island.
                </p>
              </section>
              {/* <!-- Section: Text --> */}

              {/* <!-- Section: Links --> */}
              <section class="">
                {/* <!--Grid row--> */}
                <div class="row">
                  {/* <!--Grid column--> */}
                  <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    {/* <h5 class="text-uppercase">About airline</h5> */}

                    <ul class="list-unstyled mb-0">
                      <li>
                        <Link to="https://www.airindia.in/about-airindia.htm " className="text-white">
                          About airline
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.airindia.in/images/pdf/Clean_copy_Conditions_of_Carriage_09112022.pdf" className="text-white">
                          Conditions of Carriage
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.airindia.in/terms-conditions.htm" className="text-white">
                          Terms and Conditions
                        </Link>
                        <Link to="https://www.airindia.in/terms-conditions.htm" className="text-white">
                          Policy
                        </Link>

                      </li>
                    </ul>
                  </div>
                  {/* <!--Grid column--> */}

                  {/* <!--Grid column--> */}
                  <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">Explore</h5>

                    <ul class="list-unstyled mb-0">
                      <li>
                        <a href="#!" class="text-white">
                          Contact
                        </a>
                      </li>
                      <li>
                        <a href="#!" class="text-white">
                          Blog Posts
                        </a>
                      </li>
                      <li>
                        <a href="#!" class="text-white">
                          Social Connect
                        </a>
                      </li>
                      <li>
                        <a href="#!" class="text-white">
                          Help Topics
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!--Grid column--> */}

                  {/* <!--Grid column--> */}
                  <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">Links</h5>

                    <ul class="list-unstyled mb-0">
                      <li>
                        <Link to=" " className="text-white">
                          Podcasts
                        </Link>
                      </li>
                      <li>
                        <Link to=" " className="text-white">
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link to=" " className="text-white">
                          {" "}
                          Vedio
                        </Link>
                      </li>
                      <li>
                        <Link to=" " className="text-white">
                          {" "}
                          Terms of Use
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* <!--Grid column--> */}

                  {/* <!--Grid column--> */}
                  <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">Contact</h5>

                    <ul class="list-unstyled mb-0">
                      <li>
                        <a href="#!" class="text-white">
                          India
                        </a>
                      </li>
                      <li>
                        <a href="#!" class="text-white">
                          Needhelp@brownfieldairline.com
                        </a>
                      </li>
                      <li>
                        <a href="#!" class="text-white">
                          York
                        </a>
                      </li>
                      <li>
                        <a href="#!" class="text-white">
                          666 888 0000
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!--Grid column--> */}
                </div>
                {/* <!--Grid row--> */}
              </section>
              {/* <!-- Section: Links --> */}
            </div>
            {/* <!-- Grid container --> */}

            {/* <!-- Copyright --> */}
            <div class="text-center p-3">
              © 2020 Copyright:
              <a class="text-white" href="https://oxpitan-gatsby.vercel.app/">
                Flight Management Team
              </a>
            </div>
            {/* <!-- Copyright --> */}
          </footer>
          {/* <!-- Footer --> */}
        </div>
      </div>
    );
  }

export default Footer;
