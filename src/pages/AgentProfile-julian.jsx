import React from "react";
import "./AgentProfile-julian.css";

import profileImg from "../assets/AgentProfile-agent.png";
import property1 from "../assets/AgentProfile-property1.png";
import property2 from "../assets/AgentProfile-property2.png";

import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdOutlineEventNote } from "react-icons/md";
import { BsCheckCircle } from "react-icons/bs";

const AgentProfile = () => {
  return (
    <div className="agent-profile-container">
      
      {/* LEFT SECTION */}
      <div className="agent-profile-left">

        {/* HERO */}
        <div className="agent-profile-hero">
          <img src={profileImg} alt="agent" />
          <div className="agent-profile-overlay">
            <h1>Julian Vane</h1>
            <p>Senior Portfolio Manager</p>
          </div>
        </div>

        {/* STATS */}
        <div className="agent-profile-stats">
          <div>
            <h2>15+</h2>
            <p>Years Experience</p>
          </div>
          <div>
            <h2>$2.4B</h2>
            <p>Volume Closed</p>
          </div>
          <div>
            <h2>99%</h2>
            <p>Client Satisfaction</p>
          </div>
        </div>

        {/* BIO */}
        <div className="agent-profile-bio">
          <h2>Professional Biography</h2>
          <p>
            With over a decade of experience in the ultra-high-net-worth real estate sector,
            Julian Vane has established himself as a premier authority in the acquisition
            and disposition of global luxury assets.
          </p>

          <p>
            Formerly a private wealth advisor in London, Julian transitioned to real estate
            with a unique perspective on property as a cornerstone of diverse investment portfolios.
          </p>

          <div className="agent-profile-specialties">
            <span><BsCheckCircle /> Ultra-Luxury Residential</span>
            <span><BsCheckCircle /> Off-Market Global Assets</span>
            <span><BsCheckCircle /> Investment Portfolio Management</span>
            <span><BsCheckCircle /> New Development Consulting</span>
          </div>
        </div>

        {/* PORTFOLIO */}
        <div className="agent-profile-portfolio">
          <div className="agent-profile-section-header">
            <h2>Active Portfolio</h2>
            <span>VIEW ALL</span>
          </div>

          <div className="agent-profile-cards">
            <div className="agent-profile-card">
              <img src={property1} alt="property" />
              <span className="agent-profile-badge">ACTIVE</span>
              <h3>The Obsidian Pavilion</h3>
              <p>Beverly Hills, CA</p>
              <h4>$42,500,000</h4>
            </div>

            <div className="agent-profile-card">
              <img src={property2} alt="property" />
              <span className="agent-profile-badge light">RECENTLY CLOSED</span>
              <h3>Sky Garden Duplex</h3>
              <p>Tribeca, NY</p>
              <h4>$18,900,000</h4>
            </div>
          </div>
        </div>

        {/* TESTIMONIAL */}
        <div className="agent-profile-testimonial">
          <h2>Client Reflections</h2>
          <div className="agent-profile-quote">
            <p>
             "Julian's ability to navigate the complexities of off-market acquisitions is
unparalleled. He doesn't just find houses; he secures legacies. His discretion
and professionalism were essential for our family's move to the coast."
            </p>
            <span>— CEO, Global Tech Conglomerate</span>
          </div>
        </div>

      </div>

      {/* RIGHT SIDEBAR */}
      <div className="agent-profile-right">

        <div className="agent-profile-contact">
          <p className="agent-profile-small-title">CONNECT WITH JULIAN</p>

          <a href="/schedulebriefing"> <button className="primary">
            <MdOutlineEventNote /> Schedule Briefing
          </button></a>

         <a href="/requestcall"> <button className="secondary">
            <FaPhoneAlt /> Request Call
          </button></a>

          <div className="agent-profile-contact-info">
            <p><FaEnvelope /> j.vane@aureumestates.com</p>
            <p><FaPhoneAlt /> +1 (555) 012-9844</p>
          </div>

          <div className="agent-profile-socials">
            <FaLinkedin />
            <FaTwitter />
          </div>
        </div>

        {/* CREDENTIALS */}
        <div className="agent-profile-credentials">
          <h3>Credentials & Awards</h3>
          <div><ul>
            <li><BsCheckCircle /> WSJ Top 50 Agent (2020–2023)</li>
            <li><BsCheckCircle /> Certified International Property Specialist</li>
            <li><BsCheckCircle /> Institute for Luxury Home Marketing</li>
          </ul></div>
        </div>

      </div>

    </div>
  );
};

export default AgentProfile;