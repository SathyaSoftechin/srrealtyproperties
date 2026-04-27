import React from "react";
import "./ExploreGlobal.css";

import heroImg from "../assets/ExploreGlobal-house.png";
import region1 from "../assets/ExploreGlobal-region1.png";
import region2 from "../assets/ExploreGlobal-region2.png";
import region3 from "../assets/ExploreGlobal-region3.png";
import region4 from "../assets/ExploreGlobal-region4.png";
import collection1 from "../assets/ExploreGlobal-collection1.png";
import collection2 from "../assets/ExploreGlobal-collection2.png";
import collection3 from "../assets/ExploreGlobal-collection3.png";



const ExploreGlobal = () => {
  return (
    <div className="exploreglobal-container">

      {/* HERO */}
      <div className="exploreglobal-hero">
        <img src={heroImg} alt="hero" />

        <div className="exploreglobal-overlay">
          <h1>
            Explore the <span>Signature</span> Portfolio
          </h1>
          <p>
            Discover an exclusive collection of high-yield assets and
            architectural masterpieces across the world's most coveted destinations.
          </p>

          <div className="exploreglobal-tag">
            • 12 New Assets This Week
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="exploreglobal-stats">
        <div className="exploreglobal-card">
          <h4>PORTFOLIO VALUE</h4>
          <h2>$4.2b</h2>
          <span>+12.4%</span>
        </div>

        <div className="exploreglobal-card">
          <h4>GLOBAL ASSETS</h4>
          <h2>128</h2>
          <span>+5 New</span>
        </div>

        <div className="exploreglobal-card">
          <h4>GLOBAL FOOTPRINT</h4>
          <h2>14</h2>
          <span>Countries</span>
        </div>
      </div>

      {/* REGION */}
      <div className="exploreglobal-section">
        <div className="exploreglobal-sectionHeader">
          <h2>Region-Based Discovery</h2>
          <span>VIEW ALL REGIONS →</span>
        </div>

        <div className="exploreglobal-regions">
          <div className="exploreglobal-regionCard">
            <img src={region1} alt="" />
            <p>32 PROPERTIES</p>
            <h3>North America</h3>
          </div>

          <div className="exploreglobal-regionCard">
            <img src={region2} alt="" />
            <p>45 PROPERTIES</p>
            <h3>Europe</h3>
          </div>

          <div className="exploreglobal-regionCard">
            <img src={region3} alt="" />
            <p>28 PROPERTIES</p>
            <h3>Middle East</h3>
          </div>

          <div className="exploreglobal-regionCard">
            <img src={region4} alt="" />
            <p>23 PROPERTIES</p>
            <h3>Asia</h3>
          </div>
        </div>
      </div>

      {/* COLLECTIONS */}
      <div className="exploreglobal-section">
        <h2 className="exploreglobal-center">
          Curated Collections
        </h2>
        <p className="exploreglobal-sub">
          Hand-picked selections based on investment profile and lifestyle.
        </p>

       


<div className="exploreglobal-collectionCard">
  <img src={collection1} alt="blue chip" />
  <h4>BLUE CHIP</h4>
  <p>Low-risk, stable appreciation assets</p>
 <a href="/secureaccess"><button>View Assets</button></a>
</div>

<div className="exploreglobal-collectionCard">
  <img src={collection2} alt="private islands" />
  <h4>PRIVATE ISLANDS</h4>
  <p>Ultimate privacy and luxury</p>
  <button>View Assets</button>
</div>

<div className="exploreglobal-collectionCard">
  <img src={collection3} alt="ultra modern" />
  <h4>ULTRA-MODERN</h4>
  <p>Cutting-edge architectural marvels</p>
  <button>View Assets</button>




          </div>
        </div>
      </div>

   
  );
};

export default ExploreGlobal;