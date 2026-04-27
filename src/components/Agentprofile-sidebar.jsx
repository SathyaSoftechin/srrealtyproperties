import React from "react";
import "./Agentprofile-sidebar.css";
import { useNavigate, useLocation } from "react-router-dom";

import {
  FaChartBar,
  FaFileAlt,
  FaUser,
  FaShieldAlt,
  FaPlus
} from "react-icons/fa";

import userImg from "../assets/Agent-user.png";

const AgentSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="Agent-sidebar">
      <h2 className="Agent-logo">PrivateOffice</h2>
      <p className="Agent-sub">ELITE CURATOR STATUS</p>

      <ul className="Agent-menu">
        <li
          className={location.pathname === "/agent" ? "active" : ""}
          onClick={() => navigate("/agent")}
        >
          <FaChartBar /> Portfolio
        </li>

        <li
          className={location.pathname === "/briefings" ? "active" : ""}
          onClick={() => navigate("/agentbreifing")}
        >
          <FaFileAlt /> Briefings
        </li>

        <li
          className={location.pathname === "/client" ? "active" : ""}
          onClick={() => navigate("/clientinquiries")}
        >
          <FaUser /> Client Inquiries
        </li>

        <li
          className={location.pathname === "/settings" ? "active" : ""}
          onClick={() => navigate("/agentsetting")}
        >
          <FaShieldAlt /> Security
        </li>
      </ul>

      <button className="Agent-new-btn">
        <FaPlus /> NEW LISTING
      </button>

    
      </div>

  );
};

export default AgentSidebar;