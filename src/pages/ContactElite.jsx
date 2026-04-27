import React from "react";
import "./ContactElite.css";

import heroImg from "../assets/ContactElite-hero.png";
import villa1 from "../assets/ContactElite-villa1.png";
import villa2 from "../assets/ContactElite-villa2.png";
import villa3 from "../assets/ContactElite-villa3.png";

import { FaArrowLeft, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactElite = () => {
  return (
    <div className="ContactElite">

      {/* HERO SECTION */}
      <div
        className="ContactElite-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="ContactElite-hero-overlay">
          <div className="ContactElite-topbar">
            <FaArrowLeft className="ContactElite-back-icon" />
           <a href="/" className="ContactElite-back-go"> <span>Back</span></a>
          </div>

          <div className="ContactElite-hero-content">
            <p className="ContactElite-subtitle">SENIOR PARTNER</p>
            <h1 className="ContactElite-title">Julian Vane</h1>
            <p className="ContactElite-desc">
              Specializing in the acquisition and divestment of architecturally
              significant estates across the global corridor.
            </p>

            <div className="ContactElite-stats">
              <div>
                <h3>$2.4B+</h3>
                <span>Career Volume</span>
              </div>
              <div>
                <h3>18</h3>
                <span>Years Experience</span>
              </div>
              <div>
                <h3>420</h3>
                <span>Elite Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN SECTION */}
      <div className="ContactElite-main">

        {/* LEFT CONTENT */}
        <div className="ContactElite-left">
          <h2>A Legacy of Discretion</h2>

          <p>
            Julian Vane has defined the standard for high-net-worth
            representation for nearly two decades. His approach is rooted in the
            philosophy of the "Digital Curator" — treating every listing not as a
            transaction, but as a masterpiece to be placed with the right
            collector.
          </p>

          <p>
            With a background in architectural history and global finance, Julian
            offers a dual perspective that is rare in the luxury market.
          </p>

          <div className="ContactElite-testimonials">
            <div className="ContactElite-card">
              <p>
                "Julian's ability to navigate complex offshore transactions with
                absolute privacy was paramount to our family’s relocation."
              </p>
              <span>Managing Director</span>
            </div>

            <div className="ContactElite-card dark">
              <p>
                "An unparalleled eye for architecture. He didn't just sell our
                penthouse, he curated an experience that found the perfect
                steward."
              </p>
              <span>A. Sterling</span>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="ContactElite-form">
          <h3>Inquiry Portal</h3>
          <p>Direct Access for Private Clients</p>

          <input type="text" placeholder="Full Identity" />
          <input type="email" placeholder="Secure Email" />

          <select>
            <option>Select Acquisition Type</option>
          </select>

          <textarea placeholder="How may Julian assist your portfolio?" />

          <button className="primary">Secure Briefing Request</button>
          

          
       
        </div>

      </div>

      {/* COLLECTION */}
      <div className="ContactElite-collection">
        <h2>The Vane Collection</h2>

        <div className="ContactElite-grid">
          <div
            className="ContactElite-item"
            style={{ backgroundImage: `url(${villa1})` }}
          >
            <div className="ContactElite-overlay">
              <span>Closed • $42M</span>
              <h4>The Obsidian Villa</h4>
            </div>
          </div>

          <div
            className="ContactElite-item"
            style={{ backgroundImage: `url(${villa2})` }}
          >
            <div className="ContactElite-overlay">
              <span>Available • Private Listing</span>
              <h4>Helios Penthouse</h4>
            </div>
          </div>

          <div
            className="ContactElite-item"
            style={{ backgroundImage: `url(${villa3})` }}
          >
            <div className="ContactElite-overlay">
              <span>Closed • $38M</span>
              <h4>Sanctum Pavilion</h4>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContactElite;