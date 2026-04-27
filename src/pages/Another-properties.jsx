import React from "react";
import "./Another-properties.css";
import heroImg from "../assets/another-hero.png";
import { FaArrowUp, FaShieldAlt, FaChartLine,FaPlus } from "react-icons/fa";



const AnotherProperties = () => {
  return (
    <div className="another-properties">

      {/* HERO SECTION */}
      <div className="another-properties-hero">
        <img src={heroImg} alt="hero" className="another-properties-hero-img" />

        <div className="another-properties-hero-overlay">
          <p className="another-properties-tag">✨ SUCCESSFUL</p>

          <h1 className="another-properties-title">
            Your portfolio is growing.
          </h1>

          <h2 className="another-properties-subtitle">
            Keep the momentum.
          </h2>

          <p className="another-properties-desc">
            Join the top 5% of investors on Aureum Estates. Our data-driven platform ensures
            your properties are seen by high-net-worth global buyers.
          </p>

<div>
           
          </div>
        </div>
      </div>

      {/* CARDS SECTION */}
      <div className="another-properties-cards">

        <div className="another-properties-card">
          <div className="another-properties-icon">
            <FaArrowUp />
          </div>
          <h3>Maximized Returns</h3>
          <p>
            Our proprietary matching algorithm connects your property with buyers
            ready to pay a premium for quality architecture.
          </p>
        </div>

        <div className="another-properties-card">
          <div className="another-properties-icon">
            <FaShieldAlt />
          </div>
          <h3>Trusted Network</h3>
          <p>
            Benefit from our pre-vetted network of international investors and
            legal specialists to close deals 3x faster.
          </p>
        </div>

        <div className="another-properties-card">
          <div className="another-properties-icon">
            <FaChartLine />
          </div>
          <h3>Portfolio Insights</h3>
          <p>
            Get real-time analytics on your listings, market trends, and automated
            property valuation updates.
          </p>
        </div>

      </div>

      {/* CTA SECTION */}
      <div className="another-properties-cta">
        <div className="another-properties-cta-left">
          <h2>Have another property in mind?</h2>
          <p>
            Whether it's a coastal villa or a metropolitan penthouse, Aureum Estates
            provides the elite exposure your asset deserves.
          </p>
        </div>

       
      <a href="/newlisting"> <button className="another-properties-cta-btn">
          Create New Listing Now
        </button></a>
      </div>

    </div>
  );
};

export default AnotherProperties;