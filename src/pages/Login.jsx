import React from "react";
import "./Login.css";
import bgImage from "../assets/Login.jpeg";

const Login = () => {
  return (
    <div
      className="login-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay"></div>

      <div className="login-card">
        <h1 className="welcome-text">Welcome Back</h1>
        <p className="subtitle">
          Enter your credentials to access your private portfolio.
        </p>

        <form>
          <label>EMAIL ADDRESS</label>
          <input
            type="email"
            placeholder="curator@aureum.com"
          />

          <div className="password-row">
            <label>PASSWORD</label>
            <span className="forgot">FORGOT ACCESS?</span>
          </div>

          <input
            type="password"
            placeholder="••••••••••"
          />

          <button type="submit" className="login-btn">
            LOGIN →
          </button>
        </form>

        <p className="signup-text">
             Don’t have an account? 
           <a href="/signup"> Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;