import React from "react";
import "./Messages.css";
import {
  FiSend,
  FiPaperclip,
  FiSmile,
  FiDownload,
  FiFileText
} from "react-icons/fi";
import { FiShield, FiPhone, FiMoreVertical } from "react-icons/fi";
import profileImg from "../assets/message-profile.png";

const MessagePage = () => {
  return (
    <div className="message-container">



{/* TOP HEADER */}
<div className="message-header">
  <div className="message-header-left">
    <div className="logo-box"></div>
    <div>
      <h2>AUREUM ESTATES</h2>
      <span>PRIVATE WEALTH PORTAL</span>
    </div>
  </div>

  <div className="message-header-right">
    <div className="status">
      <span className="dot"></span>
      ENCRYPTED CONNECTION
    </div>

  <div className="circle">
  <FiShield />
  {/* <FiPhone className="inner-icon" /> */}
</div>

<div className="circle">
  <FiMoreVertical />
</div>
  </div>
</div>








      {/* LEFT SIDEBAR */}
      <div className="message-sidebar">
        <div className="message-profile">
          <img src={profileImg} alt="profile" />
          <h3>Julian Thorne</h3>
          <p>Executive Estates Director</p>
        </div>

        <div className="message-actions">
          <button className="message-btn primary">Schedule Consultation</button>
          <button className="message-btn">Request Documents</button>
        </div>

        <div className="message-portfolio">
          <h4>Active Portfolio</h4>
          <div className="message-card">
            <p>Mayfair Residence</p>
            <span>Ref: AE-9022</span>
            <div className="message-progress">
              <div className="message-progress-bar"></div>
            </div>
            <small>Escrow stage: 75% complete</small>
          </div>
        </div>
      </div>

      {/* CHAT SECTION */}
      <div className="message-chat">

        <div className="message-date">Today, October 24</div>

        {/* Incoming */}
        <div className="message-row left">
          <img src={profileImg} alt="" />
          <div className="message-bubble">
            Good afternoon. I've prepared the confidential prospectus for the
            Mayfair portfolio. Shall we review the financing terms?
          </div>
        </div>

        {/* Outgoing */}
        <div className="message-row right">
          <div className="message-bubble yellow">
            Yes, please. I'm interested in tax implications and stamp duty
            exemptions.
          </div>
        </div>

        {/* File message */}
        <div className="message-row left">
          <img src={profileImg} alt="" />
          <div className="message-bubble">
            <p>I've uploaded the Revised Structuring Document below.</p>

            <div className="message-file">
              <div className="message-file-icon">
                <FiFileText />
              </div>

              <div>
                <p>Mayfair_Structuring_v2.pdf</p>
                <span>2.4 MB • Secure Document</span>
              </div>

              <FiDownload className="message-download" />
            </div>
          </div>
        </div>

        {/* INPUT */}
        <div className="message-input">
          <FiPaperclip />
          <FiSmile />
          <input placeholder="Type your secure message..." />
          <button>
            <FiSend />
          </button>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="message-right">
        <h4>Upcoming Schedule</h4>

        <div className="message-schedule">
          <p>Property Viewing</p>
          <span>Tomorrow at 10:00 AM</span>
        </div>

        <div className="message-schedule">
          <p>Legal Review Call</p>
          <span>Friday, Oct 27</span>
        </div>

        <h4>Vault Assets</h4>

        <div className="message-assets">
          <div>Shared</div>
          <div>Contracts</div>
          <div>Financials</div>
          <div>Media</div>
        </div>
      </div>

    </div>
  );
};

export default MessagePage;