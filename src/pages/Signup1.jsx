import React from "react";
import "./Signup1.css";
import bgImage from "../assets/Login.jpeg";  

const AgentSignup = () => {
  return (
    <div
      className="agent-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="agent-overlay"></div>

      <div className="agent-card">
        <div className="agent-header">
          <h1 className="agent-begin">Begin Your Journey As a Agent</h1>
          <button className="user-btn"><a href="/signup">Create User Profile</a></button>
        </div>

        <p className="agent-subtitle">
          Access the world's most exclusive architectural masterpieces.
        </p>

        <form>
          <label>NAME</label>
          <input type="text" placeholder="ALEXANDER VANE" />

          <label>E-MAIL ADDRESS</label>
          <input type="email" placeholder="ALEXANDER VANE" />

          <label>MOBILE NUMBER</label>
          <input type="text" placeholder="ALEXANDER VANE" />

          <label>YEARS OF EXPERIENCE</label>
          <input type="text" placeholder="ALEXANDER VANE" />

          <label>SPECIALIZATION</label>
          <input type="text" placeholder="ALEXANDER VANE" />

          <label>PASSWORD</label>
          <input type="password" placeholder="curator@aureum.com" />

          <label>PASSWORD CONFIRMATION</label>
          <input type="password" placeholder="••••••••••" />

          <div className="agent-checkbox">
            <input type="checkbox" />
            <p>
              I acknowledge the <span>Privacy Accord</span> and consent to the
              digital processing of my preferences.
            </p>
          </div>

          <button type="submit" className="agent-submit">
            CREATE ACCOUNT
          </button>
         <p className="login-text">
             Already have an account? 
           <a href="/"> Login</a>
        </p>

        </form>
      </div>
    </div>
  );
};

export default AgentSignup;