import React from "react";
import "./Agent-setting.css";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";
import {
  FaCheckCircle,
  FaBell,
  FaShieldAlt,
  FaLaptop,
  FaMobileAlt,
  FaPen,
  FaLock
} from "react-icons/fa";

import profileImg from "../../assets/profile-agent.png";

const AgentSettings = () => {
  return (
    <div className="Agent-performance-wrapper">
      <Sidebar />

      <div className="Agent-performance-main">
        <TopNavbar />

        <div className="Agent-setting-container">
          <h1 className="Agent-setting-title">Agent Settings</h1>
          <p className="Agent-setting-subtitle">
            Refine your operational identity and system preferences.
          </p>

          {/* Profile Section */}
          <div className="Agent-setting-card Agent-setting-profile-card">
            <div className="Agent-setting-profile-left">
              <div className="Agent-setting-profile-img-wrapper">
                <img src={profileImg} alt="Profile" />
                <button className="Agent-setting-edit-btn">
                  <FaPen />
                </button>
              </div>
            </div>

            <div className="Agent-setting-profile-grid">
              <div>
                <label>FULL NAME</label>
                <input value="James Sterling" readOnly />
              </div>

              <div>
                <label>ROLE</label>
                <input value="Elite Curator" readOnly />
              </div>

              <div>
                <label>EMAIL ADDRESS</label>
                <input value="j.sterling@aureumonyx.com" readOnly />
              </div>

              <div>
                <label>PHONE NUMBER</label>
                <input value="+1 (555) 012-3456" readOnly />
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="Agent-setting-card">
            <h3>
              <FaCheckCircle /> Availability & Work Status
            </h3>

            <div className="Agent-setting-availability-grid">
              <div>
                <label>OPERATIONAL STATUS</label>
                <div className="Agent-setting-status-buttons">
                  <button className="active">Online</button>
                  <button>Busy</button>
                  <button>Offline</button>
                </div>
              </div>

              <div>
                <label>AUTO-ACCEPT TASKS</label>
                <div className="Agent-setting-toggle active"></div>
              </div>

              <div>
                <label>DAILY TASK LIMIT</label>
                <div className="Agent-setting-task-limit">12 Tasks</div>
              </div>

              <div>
                <label>PREFERRED WORKING HOURS</label>
                <div className="Agent-setting-hours">
                  <input value="09:00 AM" readOnly />
                  <span>to</span>
                  <input value="06:00 PM" readOnly />
                </div>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="Agent-setting-card">
            <h3>
              <FaBell /> Notification Channels
            </h3>

            <table className="Agent-setting-table">
              <thead>
                <tr>
                  <th>TRIGGER EVENT</th>
                  <th>IN-APP</th>
                  <th>EMAIL</th>
                  <th>SMS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>New Mission Assignments</td>
                  <td>🟡</td>
                  <td>🟡</td>
                  <td>⚫</td>
                </tr>
                <tr>
                  <td>Deadline Reminders</td>
                  <td>🟡</td>
                  <td>⚫</td>
                  <td>🟡</td>
                </tr>
                <tr>
                  <td>Direct Messages</td>
                  <td>🟡</td>
                  <td>⚫</td>
                  <td>⚫</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Security */}
          <div className="Agent-setting-card">
            <h3>
              <FaShieldAlt /> Security & Privacy
            </h3>

            <div className="Agent-setting-security-grid">
              <div className="Agent-setting-security-left">
                <label>TWO-FACTOR AUTHENTICATION</label>

                <div className="Agent-setting-toggle active"></div>

                <button className="Agent-setting-password-btn">
                  <FaLock /> Change Access Password
                </button>
              </div>

              <div className="Agent-setting-security-right">
                <label>ACTIVE SESSIONS</label>

                <div className="Agent-setting-session">
                  <FaLaptop />
                  <div>
                    <h4>MacBook Pro - London, UK</h4>
                    <p>Current Session</p>
                  </div>
                </div>

                <div className="Agent-setting-session">
                  <FaMobileAlt />
                  <div>
                    <h4>iPhone 15 Pro - London, UK</h4>
                    <p>Last active: 2 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="Agent-setting-footer">
            <button className="Agent-setting-reset-btn">Reset to Default</button>
            <button className="Agent-setting-save-btn">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentSettings;