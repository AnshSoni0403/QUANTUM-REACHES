import React from 'react';
import './Navbar.css'; 
import logo from '../Landing/logo.png';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="./landing">Home</a></li>
        {/* <li><a href="#about">About</a></li> */}
        <li><a href="./Portfolio">Services</a></li>
        {/* <li><a href="#contact">Contact</a></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
