import React from "react";
import "./Header-home.css";
import logo from "../assets/header-icon.png"; // adjust path if needed

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        
              <div className="logo">
  <span className="logo-icon">
    <img src={logo} alt="logo" />
  </span>

  <span className="logo-text">
    SR REALITY <span>ESTATES</span>
  </span>
</div>

        <nav className="nav">
          <ul className="nav-list">
           <a href="/"> <li className="active">Home</li></a>
           <a href="/about"> <li className="active">About Us</li></a>
           <a href="/buy" className="buy"><li>Buy</li></a>
            <a href="/eliterental"><li>Rent</li></a>
            <a href="/Propertiesgallery"><li>Properties</li></a>
           <a href="/elite-agent"> <li>Agent</li></a>
          </ul>
        </nav>
     
     
     
    <a href="/contactus">  <button className="contact">Contact</button></a>

       <a href="/Login"> <button className="nav-btn">Sign Up / Login</button></a>

      </div>
    </header>
  );
};

export default Header;