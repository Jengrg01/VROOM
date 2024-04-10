import React from "react";
import "./Header.css";
import logo from "../ImagesFol/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
const Header = () => {
  return (
    <div>
      {/* Second Header */}
      {/* <div className="secondHeader">
        <div className="contactInfo">
          <span>Call us: 9808871331</span>
        </div>
        <div className='foricons'>
        <a href="#" className="socialIcon"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#" className="socialIcon"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#" className="socialIcon"><FontAwesomeIcon icon={faInstagram} /></a>
           <a href="#" className="socialIcon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
      </div> */}
      <div className="navBar">
        <Navbar expand="lg" id="mainnav">
          <div className="container">
            <div className="logoDiv">
              <img src={logo} alt="Logo Image" className="logo" />
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <ul className="navigation">
                  <li className="navbar-links">
                    <Nav.Link href="#home">Home</Nav.Link>
                  </li>
                  <li className="navbar-links">
                    <Nav.Link href="#about">About</Nav.Link>
                  </li>
                  <li className="navbar-links">
                    <Nav.Link href="#Vehicles">Vehicles</Nav.Link>
                  </li>
                  <li className="navbar-links">
                    <Nav.Link href="#Hire">Hire</Nav.Link>
                  </li>
                  <li className="navbar-links">
                    <NavDropdown title="Contact Us" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.4">
                        Phone no
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.2">
                        Contact Form
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Email
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.1">
                        FAQs
                      </NavDropdown.Item>
                    </NavDropdown>
                  </li>
                </ul>
              </Nav>
              <Nav className="Sign">
                <button id="btn">
                    <h2 className="signup">Sign Up</h2>
                </button>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
