import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo" />
        <h2>Ramnad Taxi</h2>
      </div>
      <ul className="navbar-links">
        <li><a href="#Home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#Vechicles">Taxi Packages</a></li>
        <li><a href="#Contact">Contact Us</a></li>
      </ul>
      <div className="navbar-actions">
        <a href='#Contact' className="book-now"><i className="fa-solid fa-calendar-days"></i> Book Now</a>
        <p className="call-now">
          <i className="fa-solid fa-phone"></i> Call Now <br /><span>+91 987654310</span>
        </p>
      </div>
    </div>
  );
};

export default NavBar;
