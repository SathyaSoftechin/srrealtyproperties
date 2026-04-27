import React from "react";
import "./RequestCall.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

const RequestCall = () => {
  return (
    <div className="RequestCall-container">
      <div className="RequestCall-card">

        {/* HEADER */}
        <div className="RequestCall-header">
          <p className="RequestCall-subtitle">PRIVATE CLIENT SERVICES</p>
          <h1>Request a Consultation</h1>
          <p className="RequestCall-description">
            Connect with a senior advisor to discuss your global real estate
            requirements in complete confidence.
          </p>
        </div>

        {/* FORM */}
        <div className="RequestCall-form">

          {/* ROW 1 */}
          <div className="RequestCall-row">
            <div className="RequestCall-field">
              <label>FULL NAME</label>
              <input type="text" placeholder="Johnathan Sterling" />
            </div>

            <div className="RequestCall-field">
              <label>INTERNATIONAL PHONE</label>
              <input type="text" placeholder="+44 20 7946 0000" />
            </div>
          </div>

          {/* ROW 2 */}
          <div className="RequestCall-row">
            <div className="RequestCall-field">
              <label>PREFERRED TIME WINDOW</label>
              <div className="RequestCall-select">
                <span>Morning (08:00 - 12:00)</span>
                <FiChevronDown />
              </div>
            </div>

            <div className="RequestCall-field">
              <label>AREA OF INTEREST</label>
              <div className="RequestCall-select">
                <span>European Estates</span>
                <HiOutlineLocationMarker />
              </div>
            </div>
          </div>

          {/* TEXTAREA */}
          <div className="RequestCall-field full">
            <label>SPECIFIC REQUIREMENTS (OPTIONAL)</label>
            <textarea placeholder="Briefly describe your objectives..."></textarea>
          </div>

          {/* BUTTON */}
          <button className="RequestCall-button">
            <FaPhoneAlt /> Confirm Request
          </button>

          <p className="RequestCall-footer">
            BY SUBMITTING, YOU AGREE TO OUR PRIVATE CLIENT CONFIDENTIALITY AGREEMENT.
          </p>

        </div>
      </div>
    </div>
  );
};

export default RequestCall;