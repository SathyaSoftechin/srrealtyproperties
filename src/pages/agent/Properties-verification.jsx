import React, { useState } from "react";
import "./Properties-verification.css";
import {
  FaMapMarkerAlt,
  FaCamera,
  FaExpand,
  FaSave,
  FaArrowRight,
} from "react-icons/fa";

import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

import propertyImg from "../../assets/property-verification-house.png";

const PropertyVerification = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const verificationItems = [
    "Property exists physically",
    "Matches description",
    "Address/location correct",
    "No duplicate/fake listing",
    "Property condition valid",
  ];

  const tags = [
    "Exterior Verified",
    "Interior Checked",
    "Premium Finish",
    "Luxury Grade",
    "Geo Confirmed",
  ];

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((item) => item !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="Property-verification-wrapper">
      <Sidebar />

      <div className="Property-verification-main">
        <TopNavbar />

        <div className="Property-verification-content">

          {/* LEFT */}
          <div className="Property-verification-left">

            <div className="Property-verification-top-info">
              <span className="Property-verification-status">
                OPERATIONAL: ACTIVE
              </span>

              <span className="Property-verification-id">
                ID: SP-VER-99201
              </span>
            </div>

            <h1 className="Property-verification-title">
              Veridian Heights Estate
            </h1>

            <div className="Property-verification-meta">
              <div>
                <span>TYPE</span>
                <h4>Residential Luxury</h4>
              </div>

              <div>
                <span>VALUATION</span>
                <h4>$2,450,000</h4>
              </div>

              <div>
                <span>OWNER</span>
                <h4>Alistair Sterling</h4>
              </div>
            </div>

            <div className="Property-verification-location">
              <FaMapMarkerAlt />
              882 Skyline Ridge, Cloud District, Metropolis Central, 90210
            </div>

            {/* CAMERA FEED */}
            <div className="Property-verification-camera-card">
              <div className="Property-verification-camera-header">
                <h3>Live Capture Feed</h3>

                <div className="Property-verification-camera-badges">
                  <span>AUTO TIMESTAMP ENABLED</span>
                  <span>GPS VALIDATED</span>
                </div>
              </div>

              <div className="Property-verification-camera-frame">
                <img src={propertyImg} alt="Property" />

                <div className="Property-verification-camera-controls">
                  <button>
                    <FaCamera />
                  </button>

                  <button className="record-btn"></button>

                  <button>
                    <FaExpand />
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT */}
          <div className="Property-verification-right">

            {/* MAP */}
            <div className="Property-verification-map-card">
              <div className="Property-verification-map-overlay">
                GPS LOCK
                <span>34.0522° N, 118.2437° W</span>
              </div>
            </div>

            {/* PROTOCOL */}
            <div className="Property-verification-protocol-card">
              <h3>Verification Protocol</h3>

              {verificationItems.map((item, index) => (
                <div
                  key={index}
                  className="Property-verification-protocol-item"
                >
                  <span className="dot"></span>
                  {item}
                </div>
              ))}
            </div>

            {/* TAG SELECT */}
            <div className="Property-verification-tags-card">
              <h3>Verification Tags</h3>

              <div className="Property-verification-tags">
                {tags.map((tag, index) => (
                  <button
                    key={index}
                    className={`Property-verification-tag ${
                      selectedTags.includes(tag) ? "active" : ""
                    }`}
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* OBSERVATIONS */}
            <div className="Property-verification-observation-card">
              <h3>Field Observations</h3>

              <textarea
                placeholder="Record detailed notes regarding exterior condition, immediate surroundings, and any anomalies detected during transit..."
              />
            </div>

            {/* BUTTONS */}
            <button className="Property-verification-save-btn">
              <FaSave />
              Save Progress
            </button>

            <button className="Property-verification-submit-btn">
              Proceed to Submit
              <FaArrowRight />
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default PropertyVerification;