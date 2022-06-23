import React from 'react';
import "./Navbar.css";
import logo from "../../images/logo.png";

function Navbar() {
  return (
    <div>
    <div className="navbar_container">
        <img src={logo} alt="amazon.in"/>
        <input type="text" placeholder="How can we help you?" class="banner_input"></input>
        
    </div>
    




    </div>
  )
}

export default Navbar
