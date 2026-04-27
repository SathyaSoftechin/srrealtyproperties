import React from "react";
import "./Review.css";
// Images
import { FaWineBottle, FaSpa, FaFilm, FaCar } from "react-icons/fa";

import penthouseImg from "../assets/Review-penthouse.png";



export default function Review() {
  return (
    <div className="Review">
      <div className="Review-container">
        {/* Header */}
        <div className="Review-header">
          <div>
            <p className="Review-subtitle">CONFIDENTIAL MEMORANDUM</p>
            <h1 className="Review-title">
              The Obsidian Penthouse,<nobr /> Vanguard District
            </h1>
          </div>
          <div className="Review-price">
            <p>PROPOSED VALUATION</p>
            <h2>$12,450,000</h2>
          </div>
        </div>

        <div className="Review-content">
          {/* Left Section */}
          <div className="Review-left">
            <div className="Review-card">
              <h3>Foundational Details</h3>
              <div className="Review-grid">
                <div>
                  <p>PROPERTY TYPE</p>
                  <h4>Sky-Villa / Penthouse</h4>
                </div>
                <div>
                  <p>INTERNAL AREA</p>
                  <h4>8,450 SQ. FT.</h4>
                </div>
                <div>
                  <p>BEDROOMS / BATHS</p>
                  <h4>5 En-suite / 6.5</h4>
                </div>
                <div>
                  <p>YEAR BUILT</p>
                  <h4>2023 (New Commission)</h4>
                </div>
              </div>
            </div>

            <div className="Review-card dark">
              <h3>Technical Specifications</h3>
              <ul>
                <li>
                  HVAC System <span>Zoned Geothermal Climate Control</span>
                </li>
                <li>
                  Security Infrastructure{" "}
                  <span>Biometric Entry & Encrypted Circuitry</span>
                </li>
                <li>
                  Smart Integration <span>Full Home Automation</span>
                </li>
              </ul>
            </div>

            <div className="Review-amenities">
  <h3>Curated Amenities</h3>
  <div className="Review-amenities-grid">
    
    <div className="Review-amenity">
      <FaWineBottle className="Review-icon" />
      <h4>Private Cellar</h4>
      <p>2,000-bottle climate-controlled sanctuary</p>
    </div>

    <div className="Review-amenity">
      <FaSpa className="Review-icon" />
      <h4>Wellness Suite</h4>
      <p>Infrared sauna & hydrotherapy</p>
    </div>

    <div className="Review-amenity">
      <FaFilm className="Review-icon" />
      <h4>Cinema Room</h4>
      <p>4K projection & acoustic isolation</p>
    </div>

    <div className="Review-amenity">
      <FaCar className="Review-icon" />
      <h4>Gallery Garage</h4>
      <p>Secure auto storage</p>
    </div>

  </div>
</div>
          </div>

          {/* Right Section (Missing - Added) */}
          <div className="Review-right">
            <div className="Review-image">
              <img src={penthouseImg} alt="Penthouse" />
              <button className="Review-badge">PRIMARY CAPTURE</button>
            </div>

            <div className="Review-submit">
              <p>FINAL REVIEW STATUS</p>
              <h4>Awaiting Submission</h4>
              <button>SUBMIT TO CURATOR →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}