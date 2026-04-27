import React from "react";
import "./ListProperty.css";
import heroImg from "../assets/ListProperty-hero.png"; // background image
import { FiUploadCloud } from "react-icons/fi";
import { FaGlobe } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const ListProperty = () => {
  return (
    <div className="ListProperty">
      {/* HERO SECTION */}
      <div
        className="lp-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="lp-overlay">
          <p className="lp-tag">ELITE ASSET MANAGEMENT</p>

          <h1 className="lp-title">
            List Your Asset <br />
            with the <span>Global Authority</span>
          </h1>

          <p className="lp-subtitle">
            Aureum Estates provides a sanctuary for high-value properties,
            connecting distinguished sellers with our exclusive circle of global
            private investors.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="lp-container">
        {/* SIDEBAR */}
        <div className="lp-sidebar">
          <div className="lp-step active">
            <span>01</span> Asset Details
          </div>
         <a href="/media"> <div className="lp-step">
            <span>02</span> Media & Docs
          </div></a>
         <a href="/review"><div className="lp-step">
            <span>03</span> Review & Submit
          </div></a>

          <div className="lp-quote">
            “Precision is our hallmark. Every detail provided ensures your asset
            is presented with the reverence it deserves.”
          </div>
        </div>

        {/* FORM SECTION */}
        <div className="lp-form">
          <h2>Foundational Details</h2>

          <div className="lp-grid">
            <div className="lp-input">
              <label>Property Title</label>
              <input placeholder="e.g The Obsidian Pavilion" />
            </div>

            <div className="lp-input">
              <label>Primary Location</label>
              <input placeholder="City, Country" />
            </div>

            <div className="lp-input">
              <label>Estimated Valuation (USD)</label>
              <input placeholder="$10,000,000+" />
            </div>

            <div className="lp-input">
              <label>Asset Type</label>
              <select>
                <option>Select category</option>
              </select>
            </div>
          </div>

          {/* UPLOAD SECTION */}
          <h2>Visual Presentation</h2>
          <p className="lp-upload-text">
            Upload high-resolution editorial photography. Minimum 4K resolution
            recommended.
          </p>

         

             <div className="lp-upload-box">
  <FiUploadCloud className="lp-icon upload-icon" />
  <p>Drag Assets for Upload</p>
  <span>Support for RAW, TIFF, and JPEG</span>
  <button>Browse Files</button>
</div>

{/* WHY SECTION */}
<div className="lp-why">
  <div className="lp-why-left">
    <h3>
      Why List with <span>Aureum Estates?</span>
    </h3>
    <p>
      Our platform is more than a marketplace; it is a global stage for
      architectural masterpieces. We specialize in the quiet
      disposition of assets that never reach the public eye.
    </p>
  </div>

  <div className="lp-why-right">
    <div className="lp-feature">
      <FaGlobe className="lp-icon" />
      <div>
        <h4>Global Reach</h4>
        <p>
          Instantaneous exposure to the world's most prolific
          ultra-high-net-worth families.
        </p>
      </div>
    </div>

    <div className="lp-feature">
      <FaLock className="lp-icon" />
      <div>
        <h4>Private Network</h4>
        <p>
          Assets are handled within a closed ecosystem, ensuring
          discretion and security.
        </p>
      </div>
    </div>
  </div>
</div>




          {/* FOOTER ACTION */}
          <div className="lp-actions">
            <button className="draft">Save Draft</button>
            <button className="next">Proceed to Step 02</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProperty;