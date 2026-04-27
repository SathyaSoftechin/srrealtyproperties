import React from "react";
import "./Join.css";
import {
  FaMicrophone,
  FaVideo,
  FaShareSquare,
  FaPhoneSlash,
  FaShieldAlt,
} from "react-icons/fa";

import bgImage from "../assets/join-bg.png";
import profile1 from "../assets/Join-profile1.png";
import profile2 from "../assets/Join-profile2.png";
import videoImg from "../assets/Join-video.png";

const Join = () => {
  return (
    <div
      className="Join-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Top Section */}
      <div className="Join-header">
        <div>
          <p className="Join-session">SESSION ACTIVE</p>
          <h1>The Azure Penthouse Review</h1>
          <span>Consultation with Julian Vane</span>
        </div>

        <div className="Join-secure">
          <FaShieldAlt />
          <span>Secure Connection Verified</span>
        </div>
      </div>

      {/* Left Card */}
      <div className="Join-asset-card">
        <h4>CURRENT ASSET</h4>
        <h2>Skyline Penthouse IV</h2>

        <div className="Join-asset-grid">
          <div>
            <p>VALUATION</p>
            <h3>$24,500,000</h3>
          </div>

          <div>
            <p>SQUARE FOOTAGE</p>
            <h3>8,420 sq ft</h3>
          </div>

          <div>
            <p>ANNUAL YIELD</p>
            <h3>4.8%</h3>
          </div>

          <div>
            <p>MARKET TREND</p>
            <h3 className="Join-green">+1.2%</h3>
          </div>
        </div>

        <div className="Join-buttons">
          <button className="Join-outline">View Full Blueprint</button>
         <a href="/body"><button className="Join-primary">Request Inspection</button></a>
        </div>
      </div>

      {/* Right Panel */}
      <div className="Join-right-panel">
        <div className="Join-briefing">
          <div className="Join-briefing-header">
            <h3>Briefing Room</h3>
            <span>3 Online</span>
          </div>

          <div className="Join-users">
            <div className="Join-user">
              <img src={profile1} alt="" />
              <div>
                <h4>Julian Vane (Host)</h4>
                <p>Senior Advisor</p>
              </div>
            </div>

            <div className="Join-user">
              <div className="Join-avatar">You</div>
              <div>
                <h4>You</h4>
                <p>Member</p>
              </div>
            </div>

            <div className="Join-user">
              <img src={profile2} alt="" />
              <div>
                <h4>Elena Rossi</h4>
                <p>Lead Architect</p>
              </div>
            </div>
          </div>

          <div className="Join-chat">
            <p>
              <strong>Julian:</strong> I've just highlighted the terrace metrics
              for your review.
            </p>
          </div>

          <div className="Join-input">
            <input placeholder="Type message..." />
            <button>➤</button>
          </div>
        </div>

        {/* Video */}
        <div className="Join-video">
          <img src={videoImg} alt="" />
          <span>Julian Vane</span>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="Join-controls">
        <button>
          <FaMicrophone />
          <span>Mute</span>
        </button>

        <button>
          <FaVideo />
          <span>Camera</span>
        </button>

        <button>
          <FaShareSquare />
          <span>Share</span>
        </button>

        <button className="Join-end">
          <FaPhoneSlash />
          <span>End Call</span>
        </button>
      </div>

    </div>
  );
};

export default Join;