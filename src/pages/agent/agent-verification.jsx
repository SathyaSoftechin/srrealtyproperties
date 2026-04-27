import React from "react";
import "./agent-verification.css";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

import {
  FaSearch,
  FaFilter,
  FaMapMarkerAlt,
  FaClock
} from "react-icons/fa";

import img1 from "../../assets/verification1.png";
import img2 from "../../assets/verification2.png";
import img3 from "../../assets/verification3.png";

const AgentVerification = () => {
  const verificationData = [
    {
      id: "AP-502",
      priority: "HIGH PRIORITY",
      title: "Penthouse 502",
      location: "Downtown District, Sky Tower",
      owner: "Alexander Sterling",
      time: "Today, 04:30 PM",
      status: "PENDING",
      image: img1,
      btn: "Start Verification",
      action: "View"
    },
    {
      id: "AV-112",
      priority: "MEDIUM PRIORITY",
      title: "Emerald Villa",
      location: "Coastal Ridge, Estate 4",
      owner: "Elena Rodriguez",
      time: "Tomorrow, 10:00 AM",
      status: "IN PROGRESS",
      image: img2,
      btn: "Start Verification",
      action: "View"
    },
    {
      id: "IM-089",
      priority: "LOW PRIORITY",
      title: "Azure Heights",
      location: "Cliffside Manor, 22B",
      owner: "Marcus Chen",
      time: "Oct 12, 09:15 AM",
      status: "COMPLETED",
      image: img3,
      btn: "Verified",
      action: "Logs"
    }
  ];

  return (
    <div className="agent-verification-wrapper">
         <Sidebar />

      <div className="agent-verification-main">
                <TopNavbar />

        <div className="agent-verification-content">
          {/* Header */}
          <div className="agent-verification-header">
            <div>
              <h1>Property Verification</h1>
              <p>Manage and execute your scheduled property audits.</p>
            </div>

            <button className="agent-verification-filter-btn">
              <FaFilter />
              All Filters
            </button>
          </div>

          {/* Filters */}
          <div className="agent-verification-filters">
            <div className="agent-verification-filter-box">
              <label>STATUS</label>
              <select>
                <option>All Tasks</option>
              </select>
            </div>

            <div className="agent-verification-filter-box">
              <label>PRIORITY</label>
              <select>
                <option>Any Priority</option>
              </select>
            </div>

            <div className="agent-verification-filter-box">
              <label>VISIT DATE</label>
              <select>
                <option>Upcoming</option>
              </select>
            </div>

            <div className="agent-verification-search-box">
              <label>QUICK SEARCH</label>
              <div>
                <FaSearch />
                <input type="text" placeholder="Property ID..." />
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="agent-verification-grid">
            {verificationData.map((item, index) => (
              <div className="agent-verification-card" key={index}>
                <div className="agent-verification-image-wrap">
                  <img src={item.image} alt={item.title} />

                  <span className="agent-verification-priority">
                    {item.priority}
                  </span>

                  <span className="agent-verification-id">
                    ID: {item.id}
                  </span>
                </div>

                <div className="agent-verification-card-body">
                  <div className="agent-verification-title-row">
                    <h2>{item.title}</h2>
                    <span className="agent-verification-status">
                      {item.status}
                    </span>
                  </div>

                  <p className="agent-verification-location">
                    <FaMapMarkerAlt />
                    {item.location}
                  </p>

                  <div className="agent-verification-info-row">
                    <div>
                      <label>OWNER</label>
                      <p>{item.owner}</p>
                    </div>

                    <div>
                      <label>SCHEDULED</label>
                      <p>
                        <FaClock />
                        {item.time}
                      </p>
                    </div>
                  </div>

                  <div className="agent-verification-btn-row">
                    <button className="agent-verification-primary-btn">
                      {item.btn}
                    </button>

                    <button className="agent-verification-secondary-btn">
                      {item.action}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentVerification;