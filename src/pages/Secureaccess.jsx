import React from "react";
import "./Secureaccess.css";

import bg from "../assets/secure-bg.png";   // background image
import preview from "../assets/secure-preview.png"; // bottom image
import { FaLock, FaShieldAlt, FaChartBar, FaChartLine } from "react-icons/fa";
const SecureAccess = () => {
  return (
    <div className="secureaccess_container">

      {/* BACKGROUND */}
      <div className="secureaccess_bg">
        <img src={bg} alt="bg" />
        <div className="secureaccess_overlay"></div>
      </div>

      {/* CONTENT */}
      <div className="secureaccess_content container">

        {/* LEFT SIDE */}
        <div className="secureaccess_left">

          <span className="secureaccess_tag">
            🔒 SECURE & CONFIDENTIAL
          </span>

          <h1>
            Request an <br />
            <span>Exclusive Prospectus</span>
          </h1>

          <p>
            Access off-market opportunities and institutional-grade data.
            Our bespoke dossiers are handled with absolute discretion
            for high-net-worth individuals and capital funds.
          </p>

         

          
          <div className="secureaccess_preview">
  <img src={preview} alt="preview" />

  <div className="secureaccess_overlay">
    <span className="overlay-title">WHAT’S INSIDE</span>

    <div className="secureaccess_overlay-item">
      <FaChartLine /> ROI Analysis
    </div>

    <div className="secureaccess_overlay-item">
      <FaChartBar /> Comparable Data
    </div>
  </div>
</div>
<p className="secureaccess_text">
  <FaShieldAlt className="secureaccess_text-icon" />
  Your data is encrypted and used solely for the purpose of property
  evaluation. We respect your privacy and never share information with
  third parties.
</p>





        </div>

        {/* RIGHT SIDE FORM */}
        <div className="secureaccess_form">

          <div className="secureaccess_input_group">
            <label>FULL NAME</label>
            <input type="text" placeholder="e.g. Alexander Sterling" />
          </div>

          <div className="secureaccess_row">
            <div className="secureaccess_input_group">
              <label>PROFESSIONAL EMAIL</label>
              <input type="email" placeholder="alex@firm.com" />
            </div>

            <div className="secureaccess_input_group">
              <label>PHONE NUMBER</label>
              <input type="text" placeholder="+1 (555) 000-0000" />
            </div>
          </div>

          <div className="secureaccess_input_group">
            <label>COMPANY / INVESTMENT FUND (OPTIONAL)</label>
            <input type="text" placeholder="Sterling Global Capital" />
          </div>

          <div className="secureaccess_input_group">
            <label>MESSAGE OR SPECIFIC INTERESTS</label>
            <textarea placeholder="How can we tailor our portfolio for you?" />
          </div>

          <button className="secureaccess_btn">
            Request Access
          </button>
               



          <div className="secureaccess_end">
  <FaLock className="secureaccess_end-icon" />
  End-to-end encrypted request
</div>


        </div>

      </div>
 
    </div>
  );
};

export default SecureAccess;