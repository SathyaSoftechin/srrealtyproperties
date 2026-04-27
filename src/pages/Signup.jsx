import React from "react";
import "./Signup.css";
import bgImage from "../assets/Login.jpeg"; // or use /bg.jpg if in public

const Signup = () => {
  return (
    <div
      className="signup-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="signup-overlay"></div>

      {/* Card */}
      <div className="signup-card">
        <div className="signup-header">
          <h1 className="begin-your">Begin Your Journey</h1>
          <button className="agent-btn"><a href="/signup1">Create Agent Profile</a></button>
        </div>

        <p className="signup-subtitle">
          Access the world's most exclusive architectural masterpieces.
        </p>

        <form>
          <label>NAME</label>
          <input type="text" placeholder="ALEXANDER VANE" />

          <label>E-MAIL ADDRESS</label>
          <input type="email" placeholder="ALEXANDER VANE" />

          <label>MOBILE NUMBER</label>
          <input type="text" placeholder="ALEXANDER VANE" />

          <label>PASSWORD</label>
          <input type="password" placeholder="curator@aureum.com" />

          <label>PASSWORD CONFIRMATION</label>
          <input type="password" placeholder="••••••••••" />

          <div className="checkbox-row">
            <input type="checkbox" />
            <p>
              I acknowledge the <span>Privacy Agreement</span> and consent to
              processing of my preferences.
            </p>
          </div>

          <button type="submit" className="create-btn">
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

export default Signup;