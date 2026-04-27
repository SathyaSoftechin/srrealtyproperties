import React from "react";
import "./AgentBreifing.css";
import { FaBriefcase, FaUser, FaShieldAlt, FaCog } from "react-icons/fa";

import img1 from "../assets/brief1.png";
import img2 from "../assets/brief2.png";
import img3 from "../assets/brief3.png";
import AgentSidebar from "../components/Agentprofile-sidebar";
const AgentBreifing = () => {
  return (
    <div className="AgentBreifing-container">

      <AgentSidebar />

      {/* MAIN CONTENT */}
      <div className="AgentBreifing-main">

        <div className="AgentBreifing-header">
          <p className="AgentBreifing-subtitle">EXECUTIVE MANAGEMENT</p>
          <h1>Strategic Briefings Calendar</h1>
          <p className="AgentBreifing-desc">
            A curated overview of upcoming high-value consultations and intelligence briefings.
            Review client dossiers and investment strategies ahead of scheduled sessions.
          </p>
        </div>

        {/* LIST */}
        <div className="AgentBreifing-list">

          {/* ITEM 1 */}
          <div className="AgentBreifing-item">
            <div className="AgentBreifing-date">
              <h2>14</h2>
              <span>OCT</span>
            </div>

            <img src={img1} alt="brief" />

            <div className="AgentBreifing-info">
              <p className="time">09:00 AM – INVESTMENT STRATEGY</p>
              <h3>Alexander Thorne</h3>
              <span>The Obsidian Penthouse, Dubai Marina</span>
            </div>

            <div className="AgentBreifing-actions">
              <button className="AgentBreifing-outline">REVIEW DOSSIER</button>
              <button className="AgentBreifing-filled">JOIN BRIEFING</button>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="AgentBreifing-item">
            <div className="AgentBreifing-date">
              <h2>14</h2>
              <span>OCT</span>
            </div>

            <img src={img2} alt="brief" />

            <div className="AgentBreifing-info">
              <p className="time">01:30 PM – PORTFOLIO EXPANSION</p>
              <h3>Elena Moretti</h3>
              <span>Santorini Heights Estate Portfolio</span>
            </div>

            <div className="AgentBreifing-actions">
              <button className="AgentBreifing-outline">REVIEW DOSSIER</button>
              <button className="AgentBreifing-filled">JOIN BRIEFING</button>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="AgentBreifing-item">
            <div className="AgentBreifing-date">
              <h2>15</h2>
              <span>OCT</span>
            </div>

            <img src={img3} alt="brief" />

            <div className="AgentBreifing-info">
              <p className="time">11:00 AM – INITIAL CONSULTATION</p>
              <h3>Jonathan Vane</h3>
              <span>Harbor Point Development Site</span>
            </div>

            <div className="AgentBreifing-actions">
              <button className="AgentBreifing-outline">PREP BRIEFING</button>
            </div>
          </div>

        </div>

        {/* REPORTS */}
        <div className="AgentBreifing-reports">
          <div className="AgentBreifing-reports-header">
            <p>INTELLIGENCE ASSETS</p>

            <div className="Agentbreifing-recent-report">
            <h2>Recent Reports & Summaries</h2>
            <span>VIEW ALL ARCHIVES</span></div>
          </div>

          <div className="AgentBreifing-reportCards">

            <div className="AgentBreifing-card">
              <h4>Q4 Global Luxury Trends</h4>
              <p>
                Executive summary of capital flow in high-tier residential markets.
              </p>
              <button>DOWNLOAD PDF</button>
            </div>

            <div className="AgentBreifing-card">
              <h4>Thorne Portfolio Audit</h4>
              <p>
                Comprehensive risk assessment and valuation briefing.
              </p>
              <button>DOWNLOAD PDF</button>
            </div>

            <div className="AgentBreifing-card">
              <h4>Emerging Architectures</h4>
              <p>
                Visual analysis of zero-carbon residential trends.
              </p>
              <button>DOWNLOAD PDF</button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AgentBreifing;