import React from "react";
import "./properties-gallery.css";

import villa1 from "../assets/properties-villa1.png";
import villa2 from "../assets/properties-villa2.png";
import villa3 from "../assets/properties-villa3.png";
import { FaMapMarkerAlt, FaBuilding, FaMoneyBillWave, FaSlidersH } from "react-icons/fa";
import { FaThLarge } from "react-icons/fa";
import { useState } from "react";
import { FaMapMarkedAlt } from "react-icons/fa";

const PropertiesGallery = () => {

  // ✅ FIX: moved inside component
  const [isGrid, setIsGrid] = useState(false);

  return (
    <div className="properties-gallery">

      {/* TOP SECTION */}
      <div className="properties-gallery-header">
        <p className="properties-gallery-subtitle">CURATED EXCELLENCE</p>
        <h1>Explore Our Portfolio</h1>
        <p className="properties-gallery-desc">
          Discover a world of unparalleled luxury where architecture meets artistry.
          From coastal villas to penthouse sanctuaries, find your next masterpiece.
        </p>
      </div>

      {/* FILTER BAR */}
      <div className="properties-gallery-filters">
        <div>
          <FaMapMarkerAlt className="properties-gallery-filter-icon" />
          Global Locations ⌄
        </div>

        <div>
          <FaBuilding className="properties-gallery-filter-icon" />
          Property Type ⌄
        </div>

        <div>
          <FaMoneyBillWave className="properties-gallery-filter-icon" />
          Price Range ⌄
        </div>

        <div>
          <FaSlidersH className="properties-gallery-filter-icon" />
          More Filters ⌄
        </div>

        <button className="properties-gallery-search-btn">Search</button>
      </div>

      {/* TABS */}
      <div className="properties-gallery-inline">
        <div className="properties-gallery-tabs">
          <span className="active">NEWEST</span>
          <span>PRICE: HIGH TO LOW</span>
          <span>POPULAR</span>
        </div>

        <div className="properties-gallery-controls">

          {/* ✅ FIX: moved JSX inside component */}
          <div
            className="properties-gallery-grid-btn"
            onClick={() => setIsGrid(!isGrid)}
          >
            <span className={isGrid ? "icon inactive" : "icon active"}>☷</span>

            <FaThLarge
              className={`properties-gallery-grid-icon ${
                isGrid ? "active" : "inactive"
              }`}
            />
          </div>

        <div className="properties-gallery-map-btn">
  <FaMapMarkedAlt className="properties-gallery-map-icon" />
  View on Map
</div>
        </div>
      </div>

      {/* CARDS */}
      <div className="properties-gallery-cards">

        <div className="properties-gallery-card">
          <img src={villa1} alt="properties-gallery-card-villa" />
          <span className="properties-gallery-card-tag">FEATURED</span>
          <div className="properties-gallery-card-content">
            <h3>The Obsidian Villa <span>$24,500,000</span></h3>
            <p>Beverly Hills, Los Angeles</p>
            <div className="properties-gallery-card-details">
              <span>6 Beds</span>
              <span>8 Baths</span>
              <span>12,400 sq ft</span>
            </div>
          <a href="/propertiesdetails"><button>VIEW DETAILS</button></a>
          </div>
        </div>

        <div className="properties-gallery-card">
          <img src={villa2} alt="properties-gallery-card-villa" />
          <span className="properties-gallery-card-tag new">NEW LISTING</span>
          <div className="properties-gallery-card-content">
            <h3>Azure Penthouse <span>$18,900,000</span></h3>
            <p>Monte Carlo, Monaco</p>
            <div className="properties-gallery-card-details">
              <span>4 Beds</span>
              <span>5 Baths</span>
              <span>6,200 sq ft</span>
            </div>
            <button>VIEW DETAILS</button>
          </div>
        </div>

        <div className="properties-gallery-card">
          <img src={villa3} alt="properties-gallery-card-villa" />
          <div className="properties-gallery-card-content">
            <h3>The Zenith Estate <span>$32,000,000</span></h3>
            <p>Palm Jumeirah, Dubai</p>
            <div className="properties-gallery-card-details">
              <span>8 Beds</span>
              <span>10 Baths</span>
              <span>18,500 sq ft</span>
            </div>
            <button>VIEW DETAILS</button>
          </div>
        </div>

      </div>

      {/* BOTTOM CTA */}
      <div className="properties-gallery-cta">
        <h2>Ready to Find Your Dream Home?</h2>
        <p>
          Our bespoke advisory services ensure your next acquisition is as exceptional
          as your lifestyle.
        </p>
        <button>SCHEDULE A PRIVATE BRIEFING</button>
      </div>

    </div>
  );
};

export default PropertiesGallery;