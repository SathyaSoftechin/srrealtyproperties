import React from "react";
import "./Media.css";

// ✅ Import images properly
import houseImg from "../assets/media-house.png";
import kitchenImg from "../assets/media-kitchen.png";
import droneImg from "../assets/media-drone.png";
import { FaFilePdf } from "react-icons/fa";
const MediaPage = () => {
  return (
    <div className="media-container">
      {/* Header */}
      <div className="media-header">
        <h1 className="media-title">The Visual Narrative</h1>
        <p className="media-subtitle">
          Craft the cinematic identity of the estate. High-resolution editorial
          photography (4K minimum) and legal documentation provide the foundation
          of trust and desire for the elite collector.
        </p>
      </div>

      {/* Upload Section */}
      <div className="media-upload-section">
        <div className="media-upload-box">
          <div className="media-upload-icon">
            <img
              src="https://cdn-icons-png.flaticon.com/512/109/109612.png"
              alt="upload"
            />
          </div>
          <h2>Drop Editorial Assets</h2>
          <p>
            Drag 4K RAW images, drone cinematography, or architectural blueprints
            directly into the curator vault.
          </p>
          <button className="media-btn">BROWSE FILES</button>
        </div>

        <div className="media-info-box">
          <h4>MEDIA LIMITS</h4>

          <div className="media-info-row">
            <span>Max Files</span>
            <span>50</span>
          </div>
          <div className="media-info-row">
            <span>Max Size</span>
            <span>5 GB</span>
          </div>
          <div className="media-info-row">
            <span>Min Resolution</span>
            <span>4K UHD</span>
          </div>

          <div className="media-security">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png"
              alt="lock"
            />
            <p>
              All confidential documents are AES-256 encrypted and accessible
              only to verified concierge agents.
            </p>
          </div>
        </div>
      </div>

      {/* Assets Header */}
      <div className="media-assets-header">
        <h3>Curated Assets (12 items)</h3>
        <div className="media-actions">
          <button>SELECT ALL</button>
          <button className="danger">DELETE SELECTED</button>
        </div>
      </div>

      {/* Assets Grid */}
      <div className="media-grid">
        {/* House */}
        <div className="media-card">
          <img src={houseImg} alt="house" />
          <span className="media-tag">4K RAW</span>
        </div>

        {/* Kitchen */}
        <div className="media-card">
          <img src={kitchenImg} alt="kitchen" />
        </div>

        {/* Drone */}
        <div className="media-card media-video">
          <img src={droneImg} alt="drone" />
          <div className="media-play">
            <img
              src="https://cdn-icons-png.flaticon.com/512/727/727245.png"
              alt="play"
            />
          </div>
          <p className="media-video-title">Drone Sequence 01</p>
        </div>

        {/* Document */}
        <div className="media-card media-doc">
             <div className="media-doc-inner">
        <FaFilePdf className="media-doc-icon" />
          <p className="media-doc-type">LEGAL</p>
          <h4>Tax_Assessment_2024.pdf</h4>
          <span>1.2 MB | Verified</span>
        </div>
      </div>
</div>
      {/* Footer */}
      <button className="media-footer-btn">PROCEED TO STEP 03</button>
    </div>
  );
};

export default MediaPage;