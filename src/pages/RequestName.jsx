import React from "react";
import "./RequestName.css";
import { FaShieldAlt, FaGlobe } from "react-icons/fa";

// Images (replace with your actual paths)
import consultant1 from "../assets/consultant1.png";
import consultant2 from "../assets/consultant2.png";
import consultant3 from "../assets/consultant3.png";

const RequestName = () => {
  return (
    <div className="RequestName-container">
      {/* LEFT SIDE */}
      <div className="RequestName-left">
        <p className="RequestName-tag">ELITE CLIENT SERVICES</p>

        <h1 className="RequestName-title">
          Request <span>Briefing</span>
        </h1>

        <p className="RequestName-description">
          Curated property insights and acquisition strategies for the discerning
          collector. Our private briefings provide unparalleled access to
          off-market opportunities globally.
        </p>

        <div className="RequestName-features">
          <div className="RequestName-feature">
            <FaShieldAlt className="RequestName-icon" />
            <div>
              <h4>CONFIDENTIALITY</h4>
              <p>
                Every inquiry is handled with absolute discretion and end-to-end
                encryption.
              </p>
            </div>
          </div>

          <div className="RequestName-feature">
            <FaGlobe className="RequestName-icon" />
            <div>
              <h4>GLOBAL NETWORK</h4>
              <p>
                Access to prime assets across 42 countries and exclusive
                metropolitan hubs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="RequestName-form">
        <p className="RequestName-label">AREA OF INTEREST</p>
        <select className="RequestName-select">
          <option>Select Territory</option>
        </select>

        <p className="RequestName-label">OBJECTIVE & SPECIALIZATION</p>
        <div className="RequestName-options">
          <button>Investment</button>
          <button>Acquisition</button>
          <button>Lifestyle</button>
        </div>

        <p className="RequestName-label">PREFERRED CONSULTANT</p>
        <div className="RequestName-consultants">
          <div className="RequestName-consultant">
            <img src={consultant1} alt="" />
            <div>
              <h5>Julian Vane</h5>
              <span>EUROPE</span>
            </div>
          </div>

          <div className="RequestName-consultant active">
            <img src={consultant2} alt="" />
            <div>
              <h5>Elena Rossi</h5>
              <span>AMERICAS</span>
            </div>
          </div>

          <div className="RequestName-consultant">
            <img src={consultant3} alt="" />
            <div>
              <h5>Marcus Chen</h5>
              <span>ASIA-PAC</span>
            </div>
          </div>
        </div>

        <p className="RequestName-label">TARGET ALLOCATION ($USD)</p>
        <input type="range" className="RequestName-range" />

        <button className="RequestName-submit">
          SUBMIT BRIEFING REQUEST
        </button>

        <p className="RequestName-footer">
          OUR TEAM WILL CONTACT YOU VIA PRIVATE CHANNEL WITHIN 4 HOURS
        </p>
      </div>
    </div>
  );
};

export default RequestName;