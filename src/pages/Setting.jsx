import React from "react";
import "./Setting.css";
import { FaUser, FaStar, FaShieldAlt, FaEyeSlash } from "react-icons/fa";
import { FiKey } from "react-icons/fi";
import { IoMdLock } from "react-icons/io";

import profileImg from "../assets/Settings-profile.png"; // add your image
import Sidebar from "../components/UserProfile-sidebar";

const Settings = () => {
  return (
    <div className="setting-container">
      
      {/* LEFT SIDEBAR */}
      <div className="setting-sidebar">
        <div className="setting-profile">
          <img src={profileImg} alt="profile" />
          <h3>ALEXANDER THORNE</h3>
          <p>ELITE MEMBER</p>
        </div>

        <Sidebar />

      </div>

      {/* MAIN CONTENT */}
      <div className="setting-main">

        <h1 className="setting-title">Account Settings</h1>
        <p className="setting-subtitle">
          Manage your architectural preferences, security protocols, and curated investment alerts.
        </p>

        <div className="setting-grid">

          {/* PROFILE INFO */}
          <div className="setting-card">
            <h2><FaUser /> Profile Information</h2>

            <label>LEGAL NAME</label>
            <input type="text" value="Alexander Thorne" readOnly />

            <label>DIGITAL CORRESPONDENCE</label>
            <input type="text" value="a.thorne@aureum-estates.com" readOnly />

            <div className="setting-avatar-box">
              <img src={profileImg} alt="avatar" />
              <span>REPLACE CURATED PORTRAIT</span>
            </div>
          </div>

          {/* PREFERENCES */}
          <div className="setting-card">
            <h2><FaStar /> Preferences</h2>

            <label>INVESTMENT TIER</label>
            <div className="setting-buttons">
              <button className="active">PINNACLE</button>
              <button>ELITE</button>
            </div>

            <label>NOTIFICATION FREQUENCY</label>
            <select>
              <option>Real-time Acquisitions</option>
            </select>
          </div>

          {/* SECURITY */}
          <div className="setting-card">
            <h2><FaShieldAlt /> Security Protocols</h2>

            <div className="setting-security-item">
              <IoMdLock />
              <div>
                <h4>Two-Factor Authentication</h4>
                <p>ACTIVE VIA BIOMETRICS</p>
              </div>
              <button>CONFIGURE</button>
            </div>

            <div className="setting-security-item">
              <FiKey />
              <div>
                <h4>Hardware Security Keys</h4>
                <p>2 KEYS REGISTERED</p>
              </div>
              <button>MANAGE</button>
            </div>

            <div className="setting-security-item">
              <FaUser />
              <div>
                <h4>Login Vault</h4>
                <p>LAST ENTRY: LONDON, UK</p>
              </div>
              <button>REVIEW</button>
            </div>
          </div>

          {/* PRIVACY */}
          <div className="setting-card">
            <h2><FaEyeSlash /> Privacy & Sovereignty</h2>

            <div className="setting-toggle">
              <span>Discrete Portfolio Mode</span>
              <input type="checkbox" defaultChecked />
            </div>

            <p className="setting-desc">
              Hide your acquisition history from institutional trackers and partner agencies.
            </p>

            <div className="setting-download">
              <p>Personal Data Archive</p>
              <button>DOWNLOAD</button>
            </div>

            <div className="setting-danger">
              <h4>Deactivation</h4>
              <p>Permanently dissolve your relationship and purge all curated data.</p>
              <span>COMMENCE EXIT PROTOCOL</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Settings;