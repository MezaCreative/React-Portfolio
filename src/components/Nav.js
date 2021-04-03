import React, { useState } from 'react';
import "./style.css";
// import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Meza-logo.png';
import {Navbar, Nav, NavDropdown,} from 'react-bootstrap'

function Navigation() {
    return (
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="index"> 
        <img src={logo} alt="Meza Creative" /> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" href="/index">
          <NavDropdown title="Home" id="basic-nav-dropdown" >
            <NavDropdown.Item href="/Portfolio">Portfolio</NavDropdown.Item>
            <NavDropdown.Item href="/Contact">Contact</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>


    //   <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
    //   {/*Navbar brand*/}
    //   <a className="navbar-brand" href="index">
    //     <logo/>
    //     <img src={logo} alt="Meza Creative" />
    //   </a>
    //   {/*Collapse button*/}
    //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
    //     <span className="navbar-toggler-icon"> </span>
    //   </button>
    //   {/*Collapsible Content*/}
    //   <div className="collapse navbar-collapse" id="navbarResponsive">
    //     {/*Links*/}
    //     <ul className="navbar-nav ml-auto">
    //       <li className="nav-item dropdown">
    //         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //           Home <span className="sr-only"> (current) </span>
    //         </a>
    //         <div className="dropdown-menu" aria-labellyby="navbarDropdown">
    //           <a className="dropdown-item" href="portfolio">Portfolio</a>
    //           <a className="dropdown-item" href="contact">Contact</a>
    //         </div>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
    )
}
export default Navigation;