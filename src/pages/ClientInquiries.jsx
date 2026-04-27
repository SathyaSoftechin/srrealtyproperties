import React from "react";
import "./ClientInquiries.css";
import { FaLock, FaPlus } from "react-icons/fa";

import propertyImg from "../assets/Client-property.png";
import userImg from "../assets/Client-user.png";
import AgentSidebar from "../components/Agentprofile-sidebar";

const ClientInquiries = () => {
  return (
    <div className="ClientInquiries-container">

      {/* Sidebar */}
      <div>
        <AgentSidebar />

        <div className="ClientInquiries-profile">
          <img src={userImg} alt="user" />
          <div>
            <h4>Julian Vane</h4>
            <p>Principal Agent</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ClientInquiries-main">

        <div className="ClientInquiries-header">
          <p>SECURE COMMUNICATIONS</p>
          <h1>Confidential Client Inquiries</h1>

          <div className="ClientInquiries-actions">
            <button>FILTER BY STATUS</button>
            <button>EXPORT LOGS</button>
          </div>
        </div>

        <div className="ClientInquiries-content">

          {/* Left List */}
          <div className="ClientInquiries-list">

            <div className="ClientInquiries-card">
              <h3>Alexander Rothschild</h3>
              <p>OCT 24, 2023 • REF: #ML-882</p>
              <div className="ClientInquiries-card-high"><span className="ClientInquiries-tag ClientInquiries-gold">HIGH NET WORTH</span>
              <small className="ClientInquiries-status ClientInquiries-red">AWAITING NDA</small></div>
            </div>

            <div className="ClientInquiries-card">
              <h3>Elena Moretti</h3>
              <p>OCT 22, 2023 • REF: #PV-401</p>
              <span className="ClientInquiries-tag ClientInquiries-blue">URGENT ACQUISITION</span>
              <small className="ClientInquiries-status ClientInquiries-yellow">CALL SCHEDULED</small>
            </div>

            <div className="ClientInquiries-card">
              <h3>Yusuf Al-Fayed</h3>
              <p>OCT 21, 2023 • REF: #WH-119</p>
              <span className="ClientInquiries-tag ClientInquiries-gray">CORPORATE ENTITY</span>
              <small className="ClientInquiries-status ClientInquiries-gray">NDA VERIFIED</small>
            </div>

            <div className="ClientInquiries-card">
              <h3>Sotheby's Associate</h3>
              <p>OCT 20, 2023 • REF: #PT-002</p>
              <span className="ClientInquiries-tag ClientInquiries-gray">BROKERAGE INQUIRY</span>
              <small className="ClientInquiries-status ClientInquiries-yellow">TOUR PENDING</small>
            </div>

          </div>

          {/* Right Panel */}
          <div className="ClientInquiries-details">

            <div className="ClientInquiries-analysis">
              <FaLock className="lockIcon" />
              <h2>Inquiry Analysis</h2>
              <p>
                Verification of financial standing complete. Proceeding with Level 2 due
                diligence for the "Lake Como Estate" acquisition.
              </p>

              <div className="ClientInquiries-property">
                <img src={propertyImg} alt="property" />
                <div>
                  <h4>Villa Serbelloni</h4>
                  <span>$42,500,000 USD</span>
                </div>
              </div>

              <div className="ClientInquiries-message">
                <p>
                  "We represent a principal looking for immediate closure on off-market
                  assets in the Lombardy region. Please provide the full dossier under
                  strict confidentiality protocols."
                </p>
              </div>

              <div className="ClientInquiries-stats">
                <div>
                  <p>Verification</p>
                  <h3>94%</h3>
                </div>
                <div>
                  <p>Risk Level</p>
                  <h3>Low Risk</h3>
                </div>
              </div>

              <button className="primary">GENERATE NDA DOSSIER</button>
              <button className="secondary">SCHEDULE SECURE CALL</button>
              <p className="decline">DECLINE INQUIRY</p>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default ClientInquiries;