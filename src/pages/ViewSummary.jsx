import React from "react";
import "./viewSummary.css";
import heroImg from "../assets/viewSummary-pool.png";
import avatar from "../assets/viewSummary-avatar.png";
import { FaShieldAlt, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

const ViewSummary = () => {
  return (
    <div className="ViewSummary-container">

      <div className="ViewSummary-header">
        <p className="ViewSummary-confidential">CONFIDENTIAL MEMORANDUM</p>

        <h1 className="ViewSummary-title">
          The Belvedere Collection Summary
        </h1>

        <div className="ViewSummary-header-row">
          <p className="ViewSummary-subtitle">
            A curated analytical overview of the flagship residential<br/> acquisition
            in the Saint-Jean-Cap-Ferrat peninsula.
          </p>

          <div className="ViewSummary-date-box">
            <span>DATED</span>
            <p>October 14, 2024</p>
          </div>
        </div>
      </div>

      <div className="ViewSummary-hero">
        <img src={heroImg} alt="villa view" className="ViewSummary-heroImg"/>
      </div>

      <div className="ViewSummary-main">

        <div className="ViewSummary-left">
          <div className="ViewSummary-card">

            <div className="ViewSummary-consultant-header">
              <img src={avatar} alt="consultant" className="ViewSummary-avatar"/>

              <div>
                <h4>Consultant's Verdict</h4>
                <p>by Julian Vero, Senior Advisory</p>
              </div>
            </div>

            <p className="ViewSummary-quote">
              "The Belvedere isn't just an asset; it's a scarcity play. In the current Riviera climate, securing a land-to-structure ratio of this caliber is unprecedented. My recommendation is a decisive move before the Q4 market adjustment."
            </p>

            <p className="ViewSummary-note">
              Current valuations suggest an immediate 12% equity buffer upon acquisition due to the proprietary offshore holding structure we've identified.
            </p>

          </div>
        </div>

        <div className="ViewSummary-right">
          <div className="ViewSummary-metrics">

            <div className="ViewSummary-metric">
              <p>PROJECTED ROI</p>
              <h2>18.4%</h2>
            </div>

            <div className="ViewSummary-metric">
              <p>MARKET VALUE</p>
              <h2>€42.5M</h2>
            </div>

            <div className="ViewSummary-metric">
              <FaShieldAlt className="ViewSummary-icon" />
              <p>STABILITY INDEX</p>
              <h2>A++</h2>
            </div>

            <div className="ViewSummary-metric">
              <FaMapMarkerAlt className="ViewSummary-icon" />
              <p>SCARCITY RANK</p>
              <h2>Top 3</h2>
            </div>

          </div>
        </div>

      </div>

      <div className="ViewSummary-steps">

        <div className="ViewSummary-steps-left">
          <h3>Strategic Next Steps</h3>
          <p>
            Based on our latest briefing, we have outlined the critical path for the next 14 business days to maintain exclusivity.
          </p>

          <button className="ViewSummary-link-btn">
            REQUEST PRIVATE TOUR <FaArrowRight />
          </button>
        </div>

        <div className="ViewSummary-steps-right">

          <div className="ViewSummary-step">
            <span>01</span>
            <div>
              <h4>Escrow Initiation</h4>
              <p>Deposit of 5% to be held by the Geneva-based notary to lock in current pricing and suppress public listing.</p>
            </div>
          </div>

          <div className="ViewSummary-step">
            <span>02</span>
            <div>
              <h4>Structural Audit</h4>
              <p>Appointment of Herzog-Scheen team for a detailed engineering survey of the cliff-side foundation supports.</p>
            </div>
          </div>

          <div className="ViewSummary-step">
            <span>03</span>
            <div>
              <h4>Portfolio Integration</h4>
              <p>Legal briefing with your tax advisors to align the acquisition with the 2025 family trust restructuring.</p>
            </div>
          </div>

        </div>
      </div>

      <div className="ViewSummary-footer">
        <h2>Ready for Comprehensive Review?</h2>
        <p>
          The 142-page comprehensive report includes full architectural renderings, tax optimization strategies, and the 10-year market forecast.
        </p>
        <button className="ViewSummary-btn">DOWNLOAD FULL REPORT</button>
      </div>

    </div>
  );
};

export default ViewSummary;