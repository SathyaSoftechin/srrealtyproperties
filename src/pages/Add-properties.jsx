import React from "react";
import "./Add-properties.css";
import mapImg from "../assets/Addproperties.png";

// ICONS
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaBed, FaBath, FaCar } from "react-icons/fa";
import { MdSquareFoot } from "react-icons/md";
import { FiUpload } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsListUl } from "react-icons/bs";
import { BiCheckCircle } from "react-icons/bi";

const AddProperty = () => {
  return (
    <div className="addproperties-container">
      <div className="addproperties-wrapper">

        {/* Header */}
        <div className="addproperties-header">
          <p className="addproperties-step">STEP 2 OF 4</p>
          <h1>Add New Property</h1>
          <p className="addproperties-subtitle">
List your premium asset on the exclusive marketplace. Details are verified for quality.          </p>
        </div>

        <div className="addproperties-grid">

          {/* LEFT */}
          <div className="addproperties-left">

            {/* CORE INFO */}
            <div className="addproperties-section">
              <h3 className="addproperties-title-icon">
                <AiOutlineInfoCircle className="title-icon" />
                Core Information
              </h3>

              <input
                type="text"
                placeholder="e.g. The Glass House, Beverly Hills"
                className="addproperties-input addproperties-full"
              />

              <div className="addproperties-row">
                <input type="text" value="Penthouse" className="addproperties-input" />
                <input type="text" value="$ 5,500,000" className="addproperties-input" />
              </div>
            </div>

            {/* LOCATION */}
            <div className="addproperties-section">
              <h3 className="addproperties-title-icon">
                <HiOutlineLocationMarker className="title-icon" />
                Location Details
              </h3>

              <div className="addproperties-map-box">
                <img src={mapImg} alt="map" className="addproperties-map-img" />
                <button className="addproperties-set-pin-btn">SET PIN</button>
              </div>

              <input
                type="text"
                placeholder="Enter Full Address"
                className="addproperties-input addproperties-full"
              />
            </div>

            {/* SPEC */}
            <div className="addproperties-section">
              <h3 className="addproperties-title-icon">
                <BsListUl className="title-icon" />
                Specifications
              </h3>

              <div className="addproperties-spec-grid">

                <div className="addproperties-spec-card">
                  <FaBed className="spec-icon" />
                  <p>BEDS</p>
                  <h4>4</h4>
                </div>

                <div className="addproperties-spec-card">
                  <FaBath className="spec-icon" />
                  <p>BATHS</p>
                  <h4>5</h4>
                </div>

                <div className="addproperties-spec-card">
                  <MdSquareFoot className="spec-icon" />
                  <p>SQ FT</p>
                  <h4>4200</h4>
                </div>

                <div className="addproperties-spec-card">
                  <FaCar className="spec-icon" />
                  <p>GARAGE</p>
                  <h4>3</h4>
                </div>

              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="addproperties-section">
              <h3 className="addproperties-title-icon">
                <AiOutlineInfoCircle className="title-icon" />
                Detailed Description
              </h3>

              <textarea
                className="addproperties-textarea"
                placeholder="Describe the lifestyle, architectural details, and unique selling points of the 
property..."
              ></textarea>
            </div>

          </div>

          {/* RIGHT */}
          <div className="addproperties-right">

            <div className="addproperties-media-box">
              <FiUpload className="upload-icon" />
              <p>Drop high-res images</p>
              <span>Max file size 10MB (JPG, PNG)</span>
            </div>

            {/* TIPS */}
            <div className="addproperties-tips-box">
              <h4>Publishing Tips</h4>

         <ul>
  <li>
    <BiCheckCircle className="tips-icon" />
    Use professional wide-angle photography.
  </li>

  <li>
    <BiCheckCircle className="tips-icon" />
    Highlight school districts and local amenities.
  </li>

  <li>
    <BiCheckCircle className="tips-icon" />
    Mention smart home integrations.
  </li>
</ul>
            </div>

           <a href="/submission"> <button className="addproperties-next-btn">Next Step →</button></a>
            <button className="addproperties-draft-btn">Save Draft</button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default AddProperty;