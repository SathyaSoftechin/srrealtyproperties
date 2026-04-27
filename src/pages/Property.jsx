import React from "react";
import "./Property.css";

import hero from "../assets/property-hero.png";
import side1 from "../assets/property-side1.png";
import side2 from "../assets/property-side2.png";

import marble from "../assets/property-marble.png";
import steel from "../assets/property-steel.png";
import wood from "../assets/property-wood.png";

import mapImg from "../assets/property-map.png";
import profile from "../assets/property-profile.png";
import { BedDouble, Bath, Square } from "lucide-react";
import { Waves, Wine, Clapperboard, Home } from "lucide-react";





const PropertyDetails = () => {
  return (
    <div className="property-container">

      {/* HERO SECTION */}
      <div className="property-hero">
        <div className="property-hero-left">
          <img src={hero} alt="hero" />
          <div className="property-hero-overlay">
            <span className="property-tag">OFF-MARKET LISTING</span>
            <h1>The Obsidian Vista</h1>
            <p>Hollywood Hills, Los Angeles, CA</p>
          </div>
        </div>

        <div className="property-hero-right">
          <img src={side1} alt="side" />
          <img src={side2} alt="side" />
        </div>
      </div>

      {/* STATS */}
   <div className="property-page-stats">

  <div className="property-stat">
    <BedDouble className="icon" />
    <h3>6</h3>
    <p>Bedrooms</p>
  </div>

  <div className="property-stat">
    <Bath className="icon" />
    <h3>8</h3>
    <p>Bathrooms</p>
  </div>

  <div className="property-stat">
    <Square className="icon" />
    <h3>12,500</h3>
    <p>Sq.Ft</p>
  </div>

</div>

      <div className="property-main">

        {/* LEFT CONTENT */}
        <div className="property-left">

          {/* DESCRIPTION */}
          <div className="property-section">
            <h4>ARCHITECTURAL NARRATIVE</h4>
            <p className="property-highlight">
              A masterwork of contemporary minimalism. The Obsidian Vista merges
              industrial steel with organic textures to create a living sculpture.
            </p>
            <p>
              Designed by award-winning firm Zenith Arc, the residence features
              floor-to-ceiling glass systems that vanish into the walls, blurring
              the boundary between the interior and the breathtaking California landscape.
            </p>
          </div>

          {/* AMENITIES */}
          <div className="property-section">
            <h4>AMENITIES & LIFESTYLE</h4>

  <div className="property-amenities">
  <div>
    <Waves size={20} />
    <span>Infinity Pool</span>
  </div>
  <div>
    <Wine size={20} />
    <span>Wine Cellar</span>
  </div>
  <div>
    <Clapperboard size={20} />
    <span>Private Cinema</span>
  </div>
  <div>
    <Home size={20} />
    <span>Smart Home</span>
  </div>
</div>
          </div>

          {/* MATERIALS */}
          <div className="property-section">
            <h4>MATERIALITY & FINISHES</h4>

            <div className="property-materials">
              <img src={marble} alt="marble" />
              <img src={steel} alt="steel" />
              <img src={wood} alt="wood" />
            </div>
          </div>

          {/* MAP */}
          <div className="property-section">
            <h4>PRIME LOCATION</h4>
            <img src={mapImg} alt="map" className="property-map" />
          </div>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="property-right">

          <div className="property-card">
            <h4>Investment Highlights</h4>

            <div className="property-info">
              <span>Annual ROI</span>
              <b>8.4%</b>
            </div>

            <div className="property-info">
              <span>Stability Rating</span>
              <b>AAA+</b>
            </div>

            <div className="property-info">
              <span>Yield Est.</span>
              <b>$2.4M</b>
            </div>

            <a href="/secure-access"><button className="property-btn">
              Request Prospectus
            </button></a>
          </div>

          {/* AGENT */}
          <div className="property-agent">
            <img src={profile} alt="agent" />

            <div>
              <h4>Julian Vane</h4>
              <span>Global Portfolio<br/> Advisor</span>
            </div>

            <div className="property-agent-actions">
              <button>Call</button>
              <button>Tour</button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default PropertyDetails;