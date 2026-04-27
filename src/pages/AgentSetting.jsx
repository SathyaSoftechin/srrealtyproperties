import React from "react";
import "./AgentSetting.css";
import {
  FaShieldAlt,
  FaEye,
  FaLock,
  FaUsers,
  FaCalendarAlt,
  FaFingerprint
} from "react-icons/fa";

import profileImg1 from "../assets/AgentSetting-profile1.png"; // add your image
import profileImg2 from "../assets/AgentSetting-profile2.png";
import profileImg3 from "../assets/AgentSetting-profile3.png";
import AgentSidebar from "../components/Agentprofile-sidebar";
import { FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";

const AgentBooking = () => {
  return (
    <div className="AgentBooking-container">
      
      {/* LEFT SIDEBAR */}
      <div>


          <AgentSidebar />

<div className="AgentBooking-bottom">
  <span>
    <FaQuestionCircle style={{ marginRight: "6px" }} />
    Support
  </span>

  <span>
    <FaSignOutAlt style={{ marginRight: "6px" }} />
    Sign Out
  </span>
</div>
      </div>

      {/* MAIN CONTENT */}
      <div className="AgentBooking-main">

        <h1>Security & Private Office Settings</h1>
        <p className="AgentBooking-subtitle">
        Manage your elite credentials, portfolio accessibility, and high-stakes encryption<br/>
protocols from one centralized command center.
        </p>

        <div className="AgentBooking-grid">

          {/* PROFILE CARD */}
          <div className="AgentBooking-profile">
            <img src={profileImg1} alt="profile" />
            <h3>Julian Vane</h3>
            <span>SENIOR PARTNER | GLOBAL PRIVATE OFFICE</span>

            <button className="AgentBooking-smallBtn">TOP 1% GLOBAL</button>
            <button className="AgentBooking-smallBtn outline">PLATINUM CIRCLE</button>

            <p className="AgentBooking-desc">
              Curating the world’s most exceptional architectural legacies.
            </p>

            <a href="#">EDIT NARRATIVE</a>
          </div>

          {/* PORTFOLIO SETTINGS */}
          <div className="AgentBooking-card">
            <h3><FaEye /> Portfolio Management</h3>

            <div className="AgentBooking-toggleRow">
              <span>Off-Market Listings</span>
              <input type="checkbox" />
            </div>

            <div className="AgentBooking-toggleRow">
              <span>Transaction Privacy</span>
              <input type="checkbox" />
            </div>

            <div className="AgentBooking-toggleRow">
              <span>Global Region Assignments</span>
              <input type="checkbox" />
            </div>

            <div className="AgentBooking-toggleRow">
              <span>Automated NDAs</span>
              <input type="checkbox" />
            </div>
          </div>

          {/* SECURITY VAULT */}
          <div className="AgentBooking-highlight">
            <h3><FaLock /> Security & Data Vault</h3>

            <div className="AgentBooking-vaultGrid">
              <div>
                <FaFingerprint />
                <span>Biometric Login</span>
              </div>

              <div>
                <FaShieldAlt />
                <span>2FA Status</span>
              </div>

              <div>
                <FaLock />
                <span>Digital Vault</span>
              </div>
            </div>

            <div className="AgentBooking-actions">
              <span>ROTATE KEYS</span>
              <button>ACCESS VAULT</button>
            </div>
          </div>

          {/* MATCH */}
          <div className="AgentBooking-card small">
            <h3>Match Sensitivity</h3>
            <p>
              AI will prioritize inquiries exceeding $25M with architectural preferences.
            </p>
          </div>

          {/* SCHEDULE */}
          <div className="AgentBooking-card small">
            <h3><FaCalendarAlt /> Scheduling</h3>
            <p>Tuesday - Friday</p>
            <span>10:00 AM - 4:00 PM</span>
          </div>

          {/* TEAM */}
          <div className="AgentBooking-card full">
            <h3><FaUsers /> Team & Collective</h3>

            <div className="AgentBooking-team">
              <div className="AgentBooking-member">
                <img src={profileImg2} alt="" />
                <div>
                  <h4>Markus Thorne</h4>
                  <span>Junior Associate</span>
                </div>
              </div>

              <div className="AgentBooking-member">
                <img src={profileImg3} alt="" />
                <div>
                  <h4>Elena Rossi</h4>
                  <span>Client Liaison</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AgentBooking;