import React from "react";
import "./Agent.css";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaChartBar,
  FaFileAlt,
  FaUser,
  FaShieldAlt,
  FaPlus
} from "react-icons/fa";

// IMAGES
import villa from "../assets/Agent-villa.png";
import penthouse from "../assets/Agent-penthouse.png";
import estate from "../assets/Agent-estate.png";
import userImg from "../assets/Agent-user.png";
import AgentSidebar from "../components/Agentprofile-sidebar";

const Agent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="Agent-container">
      <div>
      <AgentSidebar />

      <div className="Agent-user">
        <img src={userImg} alt="user" />
        <div>
          <h4>Julian Vane</h4>
          <span>SENIOR MANAGING PARTNER</span>
        </div>
      </div> {/* ✅ FIX: properly closed */}
</div>
      {/* MAIN */}
      <div className="Agent-main">

        {/* STATS */}
        <div className="Agent-stats">
          <div className="Agent-card">
            <h5>TOTAL ASSET VALUE</h5>
            <h2>$2.4<span>B</span></h2>
            <p>↑ 14% since last quarter</p>
          </div>

          <div className="Agent-card">
            <h5>ACTIVE LISTINGS</h5>
            <h2>12</h2>
            <p>Avg. 42 days on market</p>
          </div>

          <div className="Agent-card">
            <h5>PENDING CLOSURES</h5>
            <h2>03</h2>
            <p>$84M combined value</p>
          </div>
        </div>

        {/* TITLE */}
        <div className="Agent-header">
          <h2>Active High-Value Listings</h2>
          <div>
            <button>SORT: VALUE</button>
            <button>FILTERS</button>
          </div>
        </div>

        {/* PROPERTY GRID */}
        <div className="Agent-grid">

          {/* CARD 1 */}
          <div className="Agent-property">
            <img src={villa} alt="" />
            <div className="Agent-overlay">
              <h3>The Obsidian Villa</h3>
              <p>Bel Air, California</p>

              <div className="Agent-meta">
                <span>$142,000,000</span>
                <span>18 Days</span>
              </div>

              <button>MANAGE</button>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="Agent-property">
            <img src={penthouse} alt="" />
            <div className="Agent-overlay">
              <h3>Helios Penthouse</h3>
              <p>New York</p>

              <div className="Agent-meta">
                <span>$89,500,000</span>
                <span>4 Days</span>
              </div>

              <button>MANAGE</button>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="Agent-property">
            <img src={estate} alt="" />
            <div className="Agent-overlay">
              <h3>Azure Cove Estate</h3>
              <p>Caribbean</p>

              <div className="Agent-meta">
                <span>$210,000,000</span>
                <span>62 Days</span>
              </div>

              <button>MANAGE</button>
            </div>
          </div>

          {/* ADD NEW */}
          <div className="Agent-add">
            <FaPlus />
            <p>Initialize New Asset</p>
          </div>

        </div>

        {/* ACTIVITY */}
        <div className="Agent-activity">
          <div className="agent-portfolio">
            <h3>Portfolio Activity Briefing</h3>
            <span>View All Logs</span>
          </div>

          <p><strong>New Offer Received:</strong> : $138M cash offer for The Obsidian Villa from Sovereign Wealth Fund 02. Analysis pending.</p>
          <p><strong>Inquiry Surge:</strong> 8 new qualified inquiries for Helios Penthouse following Architectural Digest feature</p>
          <p><strong>Price Update:</strong> Azure Cove Estate valuation updated to $210M (+5%) based on local market comps</p>
        </div>

      </div>
    </div>
  );
};

export default Agent;