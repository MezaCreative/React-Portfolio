import React, { useState } from 'react';
import "./style.css";
// import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Meza-logo.png';

function Nav() {
    return (
        
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
      {/*Navbar brand*/}
      <a className="navbar-brand" href="index.html">
        <logo/>
        <img src={logo} alt="Meza Creative" />
      </a>
      {/*Collapse button*/}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"> </span>
      </button>
      {/*Collapsible Content*/}
      <div className="collapse navbar-collapse" id="navbarResponsive">
        {/*Links*/}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Home <span className="sr-only"> (current) </span>
            </a>
            <div className="dropdown-menu" aria-labellyby="navbarDropdown">
              <a className="dropdown-item" href="portfolio.html">Portfolio</a>
              <a className="dropdown-item" href="contact.html">Contact</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    )
}
export default Nav;