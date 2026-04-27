import React from "react";
import "./Browse.css";

import img1 from "../assets/Browse-cart1.png";
import img2 from "../assets/Browse-cart2.png";
import img3 from "../assets/Browse-cart3.png";
import img4 from "../assets/Browse-cart4.png";
import img5 from "../assets/Browse-cart5.png";
 import { BellRing } from "lucide-react";

const Browse = () => {
  return (
    <div className="browse-page">







{/* HEADER */}
<div className="BrowseAssets-header container">
  <h1>Asset Marketplace</h1>
  <p>
    Curated high-yield opportunities in the world's most exclusive jurisdictions.<br/>
    Secure your position in the future of real estate.
  </p>

  <div className="BrowseAssets-topbar">
    <div className="BrowseAssets-tabs">
      <button className="active">Gallery</button>
      <button>Table View</button>
    </div>

    <button className="BrowseAssets-filter-btn">Filters</button>
  </div>

  <div className="BrowseAssets-category-tabs">
    <button className="active">All Categories</button>
    <button>Residential</button>
    <button>Commercial</button>
    <button>Industrial</button>
    <button>Land</button>
  </div>
</div>











{/* CARDS */}
<div className="BrowseAssets-grid container">

  {/* CARD */}
  <div className="BrowseAssets-card">
    <span className="BrowseAssets-tag gold">FLAGSHIP</span>
    <img src={img1} alt="" />

    <div className="BrowseAssets-card-body">
      <div className="BrowseAssets-card-top">
        <h3>The Gilded Manor</h3>
        <span className="BrowseAssets-percent">8.5%</span>
      </div>
      <p className="BrowseAssets-location">Mayfair, London</p>

      <div className="BrowseAssets-card-info">
        <div>
          <span>Price Per Share</span>
          <p>$2,500</p>
        </div>
        <div>
          <span>Funding</span>
          <p>75% Complete</p>
        </div>
      </div>

      <a href="/manor"><button className="BrowseAssets-primary-btn">View Prospectus</button></a>
    </div>
  </div>

  {/* CARD */}
  <div className="BrowseAssets-card">
    <span className="BrowseAssets-tag blue">WATERFRONT</span>
    <img src={img2} alt="" />

    <div className="BrowseAssets-card-body">
      <div className="BrowseAssets-card-top">
        <h3>Azure Coast Villa</h3>
        <span className="BrowseAssets-percent">6.2%</span>
      </div>
      <p className="BrowseAssets-location">Monte Carlo, Monaco</p>

      <div className="BrowseAssets-card-info">
        <div>
          <span>Price Per Share</span>
          <p>$5,200</p>
        </div>
        <div>
          <span>Funding</span>
          <p>Fully Funded</p>
        </div>
      </div>

      <a href="/manor"><button className="BrowseAssets-secondary-btn">Waitlist Open</button></a>
    </div>
  </div>

  {/* CARD */}
  <div className="BrowseAssets-card">
    <span className="BrowseAssets-tag red">HOT ASSET</span>
    <img src={img3} alt="" />

    <div className="BrowseAssets-card-body">
      <div className="BrowseAssets-card-top">
        <h3>Skyline Penthouse</h3>
        <span className="BrowseAssets-percent">12.4%</span>
      </div>
      <p className="BrowseAssets-location">Manhattan, NY</p>

      <div className="BrowseAssets-card-info">
        <div>
          <span>Price Per Share</span>
          <p>$1,850</p>
        </div>
        <div>
          <span>Funding</span>
          <p>Selling Fast</p>
        </div>
      </div>

      <a href="/manor"><button className="BrowseAssets-primary-btn">View Prospectus</button></a>
    </div>
  </div>

  {/* CARD */}
  <div className="BrowseAssets-card">
    <span className="BrowseAssets-tag gray">COMMERCIAL</span>
    <img src={img4} alt="" />

    <div className="BrowseAssets-card-body">
      <div className="BrowseAssets-card-top">
        <h3>Tech Hub Plaza</h3>
        <span className="BrowseAssets-percent">7.8%</span>
      </div>
      <p className="BrowseAssets-location">Berlin, Germany</p>

      <div className="BrowseAssets-card-info">
        <div>
          <span>Price Per Share</span>
          <p>$3,100</p>
        </div>
        <div>
          <span>Funding</span>
          <p>40% Complete</p>
        </div>
      </div>

      <a href="/manor"><button className="BrowseAssets-primary-btn">View Prospectus</button></a>
    </div>
  </div>

  {/* CARD */}
  <div className="BrowseAssets-card">
    <span className="BrowseAssets-tag blue">HOSPITALITY</span>
    <img src={img5} alt="" />

    <div className="BrowseAssets-card-body">
      <div className="BrowseAssets-card-top">
        <h3>Desert Rose Resort</h3>
        <span className="BrowseAssets-percent">9.1%</span>
      </div>
      <p className="BrowseAssets-location">Dubai, UAE</p>

      <div className="BrowseAssets-card-info">
        <div>
          <span>Price Per Share</span>
          <p>$4,400</p>
        </div>
        <div>
          <span>Funding</span>
          <p>New Release</p>
        </div>
      </div>

      <a href="/manor"><button className="BrowseAssets-primary-btn">View Prospectus</button></a>
    </div>
  </div>







{/* EMPTY CARD */}
<div className="BrowseAssets-empty">
  <div className="BrowseAssets-empty-icon">
    <BellRing />
  </div>

  <h3>More assets coming soon</h3>
  <p>Our acquisitions team is vetting ultra-premium properties.</p>
  <a href="/manor"><button className="BrowseAssets-outline-btn">
    Alert Me of New Listings
  </button></a>
</div>
 </div>  
 </div> 
  );
};

export default Browse;