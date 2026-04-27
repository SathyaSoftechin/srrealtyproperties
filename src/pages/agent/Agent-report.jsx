import React from "react";
import "./Agent-report.css";

import {
  FaSearch,
  FaBell,
  FaUser,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";

import img1 from "../../assets/report1.png";
import img2 from "../../assets/report2.png";
import img3 from "../../assets/report3.png";

import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";
const AgentReport = () => {
  return (
    <div className="agent-report">
     
<div>

      <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main">
        <TopNavbar />
      {/* TITLE + FILTERS */}
      <div className="agent-report-top">
        <div>
          <p className="agent-report-subtitle">SYSTEM OVERSIGHT</p>
          <h1>Reports & Complaints</h1>
        </div>

        <div className="agent-report-filters">
          <button>TYPE: All Assets <FaChevronDown /></button>
          <button>STATUS: Pending <FaChevronDown /></button>
          <button>PRIORITY: All <FaChevronDown /></button>
        </div>
      </div>

      {/* REPORT CARDS */}
      <div className="agent-report-list">
        <div className="agent-report-card">
          <div className="agent-report-property">
            <img src={img1} alt="" />
            <span className="priority high">HIGH PRIORITY</span>
          </div>

          <div className="agent-report-info">
            <h3>The Obsidian Spire</h3>
            <p><FaMapMarkerAlt /> Dubai Marina, Penthouse 4B</p>
          </div>

          <div className="agent-report-context">
            <span>REPORT CONTEXT</span>
            <h4>Fraudulent Listing</h4>
          </div>

          <div className="agent-report-status">
            <span>STATUS</span>
            <p className="pending">● Pending Review</p>
          </div>

          <div className="agent-report-flags">8 Flags</div>

          <div className="agent-report-actions">
            <button>View Details</button>
            <FaCheckCircle />
          </div>
        </div>

        <div className="agent-report-card">
          <div className="agent-report-property">
            <img src={img2} alt="" />
            <span className="priority medium">MEDIUM PRIORITY</span>
          </div>

          <div className="agent-report-info">
            <h3>Villa Mariposa</h3>
            <p><FaMapMarkerAlt /> Marbella, Spain</p>
          </div>

          <div className="agent-report-context">
            <span>REPORT CONTEXT</span>
            <h4>Fake Listing</h4>
          </div>

          <div className="agent-report-status">
            <span>STATUS</span>
            <p className="review">● In Review</p>
          </div>

          <div className="agent-report-flags">3 Flags</div>

          <div className="agent-report-actions">
            <button>View Details</button>
            <FaCheckCircle />
          </div>
        </div>

        <div className="agent-report-card">
          <div className="agent-report-property">
            <img src={img3} alt="" />
            <span className="priority low">LOW PRIORITY</span>
          </div>

          <div className="agent-report-info">
            <h3>Belgrave Estate</h3>
            <p><FaMapMarkerAlt /> London, Knightsbridge</p>
          </div>

          <div className="agent-report-context">
            <span>REPORT CONTEXT</span>
            <h4>Misleading Photos</h4>
          </div>

          <div className="agent-report-status">
            <span>STATUS</span>
            <p className="pending">● Pending Review</p>
          </div>

          <div className="agent-report-flags">12 Flags</div>

          <div className="agent-report-actions">
            <button>View Details</button>
            <FaCheckCircle />
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="agent-report-footer">
        <p>Showing 3 of 142 reports</p>

        <div className="agent-report-pagination">
          <button><FaChevronLeft /></button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button><FaChevronRight /></button>
        </div>
      </div>
    </div>

</div>
</div>
</div>
   
  );
};

export default AgentReport;