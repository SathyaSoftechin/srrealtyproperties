import React from "react";
import "./properties-details.css";

/* IMAGES */
import mainImg from "../assets/property-main.png";
import img1 from "../assets/property-1.png";
import img2 from "../assets/property-2.png";
import img3 from "../assets/property-3.png";
// import img4 from "../assets/property-4.png";
import mapImg from "../assets/propertydetails-map.png";
import agentImg from "../assets/property-agent.png";
import image1 from "../assets/property-5.png";
import image2 from "../assets/property-6.png";
import image3 from "../assets/property-7.png";



/* ICONS */
import { FaBed, FaBath, FaRulerCombined, FaVectorSquare } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdOutlineCalendarToday } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
const PropertyDetails = () => {
  return (
    <div className="property-details">

      {/* GALLERY */}
      <div className="property-details-gallery">
        <div className="property-details-gallery-left">
          <img src={mainImg} alt="main" />

          <div className="property-details-badges">
            <span className="property-details-badge">FEATURED</span>
            <span className="property-details-badge property-details-badge-outline">
              ACTIVE LISTING
            </span>
          </div>
        </div>

        <div className="property-details-gallery-right">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />

          <div className="property-details-last-img">
            {/* <img src={img4} alt="" /> */}
            <button className="property-details-view-btn">
              View all 42 Photos
            </button>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <div className="property-details-header">
        <div className="property-details-title">
          <h1>The Obsidian Vista</h1>
          <p className="property-details-location">
            📍 1200 Sapphire Heights, Beverly Hills, CA
          </p>
        </div>

        <div className="property-details-price-box">
          <span>LISTING PRICE</span>
          <h2>$18,500,000</h2>
        </div>
      </div>

      {/* CONTENT */}
      <div className="property-details-content">

        {/* LEFT */}
        <div className="property-details-left">

          <div className="property-details-stats">
            <div className="property-details-stat-card">
              <FaRulerCombined />
              <h3>12,400</h3>
              <p>SQFT</p>
            </div>

            <div className="property-details-stat-card">
              <FaBed />
              <h3>6</h3>
              <p>BEDROOMS</p>
            </div>

            <div className="property-details-stat-card">
              <FaBath />
              <h3>8.5</h3>
              <p>BATHROOMS</p>
            </div>

            <div className="property-details-stat-card">
              <FaVectorSquare />
              <h3>1.2</h3>
              <p>ACRES</p>
            </div>
          </div>

          <div className="property-details-description">
            <h3>Architectural Masterpiece</h3>
            <p>
              Nestled atop the most prestigious ridge in Beverly Hills, The Obsidian Vista represents the
pinnacle of contemporary luxury. This architectural marvel, designed by world-renowned
Obsidian Group, features floor-to-ceiling glass walls that disappear into the structure, creating a
seamless transition between the avant-garde interior and the breathtaking panoramas of the
Los Angeles skyline.
            </p>
            <p>
             Every material has been meticulously curated, from the imported Italian basalt flooring to the
hand-carved walnut cabinetry. The residence features a dual-level wellness center, a
soundproof cinema for twenty, and a temperature-controlled vault for 3,000 bottles of vintage
curation. Outside, the zero-edge infinity pool appears to float over the city lights, offering an
unparalleled entertaining experience.
            </p>
          </div>

        <div className="property-details-features-box">
  <div>
    <h4>INTERIOR HIGHLIGHTS</h4>
    <ul>
      <li><FaCheck className="property-details-feature-icon" /> Professional Chef's Kitchen</li>
      <li><FaCheck className="property-details-feature-icon" /> Private Library & Study</li>
      <li><FaCheck className="property-details-feature-icon" /> Full-Service Wellness Spa</li>
    </ul>
  </div>

  <div>
    <h4>SMART TECHNOLOGY</h4>
    <ul>
      <li><FaCheck className="property-details-feature-icon" /> Savant Home Automation</li>
      <li><FaCheck className="property-details-feature-icon" /> Biometric Security</li>
      <li><FaCheck className="property-details-feature-icon" /> Advanced Air Purification</li>
    </ul>
  </div>
</div>

        </div>

        {/* RIGHT */}
        <div className="property-details-contact-card">

          <div className="property-details-agent">
            <img src={agentImg} alt="" />
            <h4>Alexander Sterling</h4>
            <p>Principal Listing Agent</p>
          </div>

          <input className="property-details-input" type="text" placeholder="Full Name" />
          <input className="property-details-input" type="email" placeholder="Email Address" />
          <input className="property-details-input" type="text" placeholder="Phone Number" />
          <textarea className="property-details-textarea" placeholder="I'm interested in viewing this property..." />

          <button className="property-details-submit-btn">SEND INQUIRY</button>

          <div className="property-details-contact-info">
            <p><FiPhone /> +1 (310) 555-0192</p>
            <p><MdOutlineCalendarToday /> Schedule a Private Tour</p>
          </div>

        </div>
      </div>

      {/* LOCATION */}
      <div className="property-details-location-section">
        <h3>Location Information</h3>
        <img src={mapImg} alt="" />
      </div>

      {/* SIMILAR */}
      <div className="property-details-similar">

        <div className="property-details-similar-header">
          <h3>Similar Extraordinary Estates</h3>
          <span>Browse Entire Portfolio</span>
        </div>

        <div className="property-details-cards">

          <div className="property-details-card">
            <img src={image1} alt="" />
            <span className="property-details-price-tag">$12,450,000</span>
            <h4>The Emerald Oasis</h4>
            <p>Bel Air, CA • 4 Beds • 5 Baths</p>
          </div>

          <div className="property-details-card">
            <img src={image2} alt="" />
            <span className="property-details-price-tag">$22,000,000</span>
            <h4>Ivory Horizon</h4>
            <p>Malibu, CA • 7 Beds • 9 Baths</p>
          </div>

          <div className="property-details-card">
            <img src={image3} alt="" />
            <span className="property-details-price-tag">$16,750,000</span>
            <h4>Shadow Ridge Manor</h4>
            <p>Hidden Hills, CA • 5 Beds • 6 Baths</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default PropertyDetails;
