import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
const navBar = () => {
  return (
    <nav className="navbar sticky-top navbar-dark navbar-expand-lg text-white" style={{"background-color": "#563d7c" }}>
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li class="nav-item">
          <a class="nav-link" href="/checkIn">CheckIn</a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link" href="/passenger">Passengers</a>
        </li> */}
        {/* <li class="nav-item">
          <a class="nav-link" href="/searchForm">SearchForm</a>
        </li> */}

        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/flightData">FlightData</a></li>
           
         
          </ul>
        </li> */}
       
      </ul>
      <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto  mb-2 mb-lg-0 my-2 my-lg-0">
       
        <li class="nav-item">
          <a class="navbar-brand" href="/signUp">SignUp</a>
        </li>
        <li class="nav-item">
          <a class="navbar-brand " href="/login">Login</a>
        </li>
        </ul>
        </div>
        
    </div>
    
  </div>
</nav>
  )
}

export default navBar