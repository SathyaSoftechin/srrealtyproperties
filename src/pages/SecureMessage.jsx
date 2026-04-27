import React from "react";
import "./SecureMessage.css";
import { FaPhoneAlt, FaVideo, FaEllipsisV, FaPaperclip, FaMicrophone, FaClock } from "react-icons/fa";
import profileImg from "../assets/SecureMessage-profile.png"; // replace with your image
import { FaFilePdf } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
const SecureMessage = () => {
  return (
    <div className="SecureMessage-container">

      {/* LEFT SIDEBAR */}
      <div className="SecureMessage-sidebar">
        <h2>Active Briefings</h2>
        <p className="SecureMessage-unread">4 UNREAD COMMUNICATIONS</p>

        <div className="SecureMessage-list">

          <div className="SecureMessage-item active">
            <span className="tag">PRIORITY</span>
            <h4>Julian Vane - Portfolio Strategy</h4>
            <p>"The Monaco offshore trust structure is now finalized..."</p>
            <span className="time">14:22 GMT</span>
          </div>

          <div className="SecureMessage-item">
            <span className="tag">LEGAL</span>
            <h4>Legal Team - Monaco Acquisition</h4>
            <p>Reviewing the latest amendment...</p>
            <span className="time">Yesterday</span>
          </div>

          <div className="SecureMessage-item">
            <span className="tag">CONCIERGE</span>
            <h4>Private Yacht Charter</h4>
            <p>Booking confirmed for the 14th...</p>
            <span className="time">2 days ago</span>
          </div>

          <div className="SecureMessage-item">
            <span className="tag">ASSET MGMT</span>
            <h4>Geneva Vault Update</h4>
            <p>Bi-annual audit results uploaded...</p>
            <span className="time">Nov 12</span>
          </div>

        </div>
      </div>

      {/* RIGHT CHAT AREA */}
      <div className="SecureMessage-chat">

        {/* HEADER */}
        <div className="SecureMessage-header">
          <div className="SecureMessage-user">
            <img src={profileImg} alt="profile" />
            <div>
              <h3>Julian Vane</h3>
              <span>Senior Managing Partner | Zürich</span>
            </div>
          </div>

          <div className="SecureMessage-actions">
            <FaPhoneAlt />
            <FaVideo />
            <FaEllipsisV />
          </div>
        </div>

        {/* ENCRYPTION TEXT */}
        <div className="SecureMessage-encryption">
          COMMUNICATIONS ENCRYPTION VERIFIED
        </div>

        {/* CHAT MESSAGES */}
        <div className="SecureMessage-messages">

          <div className="SecureMessage-msg left">
            <p>
              Good morning. I have received the updated valuation for the Cap d’Antibes estate.
              The market appreciation since last quarter is holding steady at 4.2%.
            </p>
            <span>Julian Vane • 09:15 AM</span>
          </div>

          <div className="SecureMessage-msg right">
            <p>
              Understood, Julian. Please proceed with the diversification plan we discussed.
              Does this valuation impact our liquidity requirement for the Swiss acquisition?
            </p>
            <span>You • 10:45 AM</span>
          </div>

          {/* FILE */}
          <div className="SecureMessage-file">
            <div className="file-left">
              <div className="SecureMessage-pdf-icon">
               <FaFilePdf />
                 </div>
              <div>
                <h4>PORTFOLIO_STRATEGY_V4.PDF</h4>
                <span>2.4 MB • Encrypted Asset</span>
              </div>
            </div>
          <div className="SecureMessage-download">
            <FaDownload />
             </div>
          </div>

        </div>

        {/* INPUT */}
        <div className="SecureMessage-input">
          <input type="text" placeholder="Type a secure message..." />

          <div className="SecureMessage-icons">
            <FaPaperclip />
            <FaMicrophone />
            <FaClock />
          </div>

          <button>SEND MESSAGE</button>
        </div>

      </div>
    </div>
  );
};

export default SecureMessage;