import React from "react";
import "./Tax.css";
import { FaFileAlt, FaDownload, FaUniversity } from "react-icons/fa";
import building from "../assets/Taxbuilding.jpg";

const Tax = () => {
  return (
    <div className="Tax-container">
      
      {/* HEADER */}
      <div className="Tax-header">
        <p className="Tax-security">SECURITY LEVEL: TIER 1</p>
        <h1>
          Tax <span>Statements</span>
        </h1>
        <p className="Tax-subtext">
          Access your encrypted fiscal documentation for the Aureum Estates global portfolio.
          All documents are verified and ready for official declaration purposes.
        </p>
      </div>

      {/* YEAR 2024 */}
      <div className="Tax-section">
        <div className="Tax-year">
          <h2>Fiscal Year 2024</h2>
          <span className="Tax-badge current">CURRENT</span>
        </div>

        <div className="Tax-table">
          <div className="Tax-table-header">
            <span>Document Name</span>
            <span>Property Asset</span>
            <span>Date Issued</span>
            <span>Action</span>
          </div>

          {/* ROW */}
          <div className="Tax-row">
            <div className="Tax-doc">
              <FaFileAlt />
              <div>
                <p>Q3 Property Tax Assessment</p>
                <small>REF: AE-2024-092</small>
              </div>
            </div>
            <span>The Obsidian Penthouse, NY</span>
            <span>Oct 12, 2024</span>
            <button className="Tax-download">
              DOWNLOAD PDF <FaDownload />
            </button>
          </div>

          <div className="Tax-row">
            <div className="Tax-doc">
              <FaFileAlt />
              <div>
                <p>Annual Yield Statement</p>
                <small>REF: AE-2024-001</small>
              </div>
            </div>
            <span>Global Portfolio Aggregate</span>
            <span>Aug 22, 2024</span>
            <button className="Tax-download">
              DOWNLOAD PDF <FaDownload />
            </button>
          </div>
        </div>
      </div>

      {/* YEAR 2023 */}
      <div className="Tax-section">
        <div className="Tax-year">
          <h2>Fiscal Year 2023</h2>
          <span className="Tax-badge archived">ARCHIVED</span>
        </div>

        <div className="Tax-table">
          <div className="Tax-row">
            <div className="Tax-doc">
              <FaFileAlt />
              <div>
                <p>EOY Reconciliation Report</p>
                <small>REF: AE-2023-082</small>
              </div>
            </div>
            <span>Azure Coast Villa, Monaco</span>
            <span>Dec 31, 2023</span>
            <button className="Tax-download">
              DOWNLOAD PDF <FaDownload />
            </button>
          </div>

          <div className="Tax-row">
            <div className="Tax-doc">
              <FaFileAlt />
              <div>
                <p>Capital Gains Audit</p>
                <small>REF: AE-2023-042</small>
              </div>
            </div>
            <span>Emerald Valley Estate</span>
            <span>Apr 15, 2023</span>
            <button className="Tax-download">
              DOWNLOAD PDF <FaDownload />
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="Tax-bottom">
        
        {/* LEFT */}
        <div className="Tax-storage">
          <h3>Secure Storage & Compliance</h3>
          <p>
            Aureum Estates employs military-grade AES-256 encryption for all financial records.
            Your tax statements are generated directly from audited transaction logs, ensuring
            100% compliance with international real estate tax laws.
          </p>

          <div className="Tax-info">
            <div>
              <p>ENCRYPTED BY</p>
              <span>UipherVault™</span>
            </div>
            <div>
              <p>RETENTION PERIOD</p>
              <span>10 Fiscal Years</span>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="Tax-assistance">
          <img
            src={building}
            alt="building"
          />
          <div className="Tax-overlay">
            <FaUniversity />
            <h4>Need professional assistance?</h4>
            <p>
              Our elite tax consultancy partners are available for private briefings regarding your portfolio’s fiscal health.
            </p>
            <button>Schedule a Briefing</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tax;