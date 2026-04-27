import React from "react";
import "./Header.css";
import logo from "../assets/header-icon.png"; // adjust path if needed
import { FaPlus } from "react-icons/fa";
import {useNavigate} from   "react-router-dom";
import { MdPerson } from "react-icons/md";


const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="container header-container">

        <div >
          <span className="header-logo-icon">
            <a href="/"><img src={logo} alt="logo" className="header-logo" /></a>
          </span>

          {/* <span className="logo-text">
            SR REALITY <span>ESTATES</span>
          </span> */}
        </div>

        <nav className="nav">
          <ul className="nav-list">
            <a href="/"> <li className="active">Home</li></a>
            <a href="/about"> <li className="active">About Us</li></a>
            <a href="/buy" className="buy"><li>Buy</li></a>
            <a href="/eliterental"><li>Rent</li></a>
            <a href="/propertiesgallery"><li>Properties</li></a>
            <a href="/eliteagent">  <li>Agent</li></a>
          </ul>
        </nav>



        <a href="/contactus"> <button className="contact-header">Contact</button></a>


        <button 
        onClick={()=>navigate("/addproperty")}
        className="nav-btn">
          + ADD PROPERTY
      </button>
            
     <a href="/userprofile">  <MdPerson className="header-contact-icon" /></a>
    </div>
    </header >
  );
};

export default Header;