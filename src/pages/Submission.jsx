import React from "react";
import "./Submission.css";
import { FaCheckCircle, FaFileAlt, FaHome, FaRocket } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";

import propertyImg from "../assets/submissionimg.png"; // your image
import agentImg from "../assets/submission-agent.png"; // your agent image
import { FaList, FaPlus } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const Submission = () => {
    const navigate = useNavigate();
  
  return (
    
    <div className="submission-container">
      {/* TOP ICON */}
      <div className="submission-top-icon">
        <FaCheckCircle />
      </div>

      {/* TITLE */}
      <h1 className="submission-title">Property Successfully Submitted</h1>
      <p className="submission-subtitle">
        Listing ID: <span>AE-98234</span> · Your property has been received and is
        currently in the verification queue.
      </p>

      {/* MAIN CONTENT */}
      <div className="submission-main">

        {/* LEFT CARD */}
        <div className="submission-card">
          <div className="submission-image-box">
            <img src={propertyImg} alt="property" />
            <span className="submission-badge">AWAITING VERIFICATION</span>
          </div>

          <div className="submission-card-content">
            <div>
              <h3>The Golden Penthouse</h3>
              <p>📍 124 Luxury Blvd, Dubai Marina</p>
            </div>
            <h2>$4,500,000</h2>
          </div>

          <div className="submission-details">
            <div>
              <h4>4</h4>
              <p>BEDS</p>
            </div>
            <div>
              <h4>5</h4>
              <p>BATHS</p>
            </div>
            <div>
              <h4>5,200</h4>
              <p>SQFT</p>
            </div>
          </div>

          <div className="submission-buttons">
            <button className="submission-edit">
              <MdEdit /> Edit Listing
            </button>
            <button className="submission-print">
              <IoDocumentTextOutline /> Print Receipt
            </button>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="submission-right">
          <h3>What’s Next</h3>

          <div className="submission-step">
            <FaFileAlt />
            <div>
              <h4>Document Review</h4>
              <p>Our legal team is verifying ownership documents.</p>
              <span>IN PROGRESS</span>
            </div>
          </div>

          <div className="submission-step">
            <FaHome />
            <div>
              <h4>Site Inspection</h4>
              <p>A certified inspector will visit soon.</p>
            </div>
          </div>

          <div className="submission-step">
            <FaFileAlt />
            <div>
              <h4>Final Appraisal</h4>
              <p>Official valuation based on market trends.</p>
            </div>
          </div>

          <div className="submission-step">
            <FaRocket />
            <div>
              <h4>Listing Live</h4>
              <p>Published to premium network.</p>
            </div>
          </div>

          <div className="submission-actions">
            
          </div>


           
        </div>




      </div>

 
<div className="submission-actions">
  <button  onClick={() => navigate("/dashboard")}> 
    <FaList className="submission-btn-icon" />
    View My Listings
  </button> 

  <button onClick={() => navigate("/anotherproperties")}>
    <FaPlus className="submission-btn-icon" />
    Add Another
  </button>
</div>
      {/* AGENT SECTION */}
      <div className="submission-agent">
        <div className="submission-agent-left">
          <img src={agentImg} alt="agent" />
          <div>
            <h4>Marcus Sterling</h4>
            <p>ASSIGNED LISTING AGENT</p>
          </div>
        </div>

        <div className="submission-agent-buttons">
       <button onClick={() => navigate("/messages")} className="msg">Message Agent</button>
         <button onClick={() => navigate("/directcall")} className="call">Call Agent</button>
        </div>
      </div>
    </div>
  );
};

export default Submission;