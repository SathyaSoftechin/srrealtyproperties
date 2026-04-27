import React from "react";
import "./Applynow.css";
import partnerBg from "../assets/Applynow.png";
const ApplyNow = () => {
  return (
    <div className="apply-container">



{/* HEADER */}
<div
  className="apply-header"
  style={{ backgroundImage: `url(${partnerBg})` }}
>
  <div className="overlay">
    <span className="tag">PARTNER PROGRAM</span>
    <h1>Expand Your Reach With Aureum</h1>
    <p>
      Apply to join an exclusive global network of real estate leaders,
      luxury developers, and wealth managers.
    </p>
  </div>
</div>

      {/* FORM */}
      <div className="apply-form">

        {/* Company Info */}
        <div className="form-section">
          <h3>Company Information</h3>

          <div className="form-grid">
            <input type="text" placeholder="Registered Company Name" />
            <input type="text" placeholder="Headquarters Location" />
            <input type="text" placeholder="Website URL" />
            
            <select>
              <option>$0 - $10M</option>
              <option>$10M - $50M</option>
              <option>$50M+</option>
            </select>
          </div>
        </div>

  

        {/* Portfolio */}
        <div className="form-section">
          <h3>Portfolio & Qualifications</h3>

          <input
            type="text"
            placeholder="Portfolio Link or Pitch Deck (URL)" className="Applynow-portfolio"
          />

          <textarea
            placeholder="Briefly describe your unique value proposition..."
          ></textarea>
        </div>

        {/* Terms */}
        <div className="terms">
          <input type="checkbox" />
          <p>
            I agree to the Terms of Service and acknowledge that all information provided is accurate for vetting
purposes. Aureum Estates reserves the right to request further documentation.
          </p>
        </div>

        {/* Button */}
        <button className="submit-btn">
          Submit Partnership Application 🚀
        </button>

        <span className="note">
          Response typical time: 2-3 business days.
        </span>

      </div>
    </div>
  );
};

export default ApplyNow;