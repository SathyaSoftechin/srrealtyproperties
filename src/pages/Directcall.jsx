import React from "react";
import "./DirectCall.css";

// images
import bannerImg from "../assets/directcall-bg.png";
import profileImg from "../assets/directcall-profile.jpg";

// icons
import { FiPhone, FiMail, FiMessageSquare, FiMapPin } from "react-icons/fi";
import { BsBuilding } from "react-icons/bs";
import { HiOutlineDotsVertical } from "react-icons/hi";

const DirectCall = () => {
  return (
    


       <div className="directcall-container">
       <div className="directcall-card">

        {/* HEADER */}
        <div className="directcall-header">
          <span className="directcall-title">Agent Profile</span>
          <HiOutlineDotsVertical className="directcall-menu" />
        </div>

        {/* ✅ TOP IMAGE INSIDE CARD */}
        <div className="directcall-banner">
          <img src={bannerImg} alt="banner" />
        </div>




        {/* PROFILE */}
        <div className="directcall-profile">
          <img src={profileImg} alt="profile" />
          <h2>Alexander</h2>
          <h2>Sterling</h2>
          <p>LUXURY ESTATES SPECIALIST</p>
        </div>

        {/* AVAILABILITY */}
        <div className="directcall-availability">
          <p className="directcall-avail-title">Availability</p>
          <h3>9:00 AM - 6:00 PM EST</h3>
           <div className="directcall-status-row">
          <span className="directcall-timezone">Currently in your timezone</span>

          <span className="directcall-online">• Online Now</span>
        </div>

        {/* CALL BUTTON */}
        <button className="directcall-call-btn">
          <FiPhone /> Call Now
        </button>

        {/* ACTION BUTTONS */}
        <div className="directcall-actions">
          <button>
            <FiMail /> Email
          </button>
          <button>
            <FiMessageSquare /> Chat
          </button>
        </div>

        {/* INFO */}
        <div className="directcall-info">

          <div className="directcall-info-item">
            <div className="icon-box">
              <BsBuilding />
            </div>
            <div>
              <p>Office Direct</p>
              <span>+1 (555) 012-3456</span>
            </div>
          </div>

          <div className="directcall-info-item">
            <div className="icon-box">
              <FiMapPin />
            </div>
            <div>
              <p>Corporate HQ</p>
              <span>5th Ave, New York, NY</span>
            </div>
          </div>

        </div>

        <p className="directcall-footer">
          LICENSED REAL ESTATE BROKERAGE
        </p>

      </div>
    </div>
    </div>
  );
};

export default DirectCall;