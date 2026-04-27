import React from "react";
import "./BrowseExclusive.css";
import { FaSearch, FaSlidersH } from "react-icons/fa";

// Images (replace with your actual paths)
import img1 from "../assets/Browse-property1.png";
import img2 from "../assets/Browse-property2.png";
import img3 from "../assets/Browse-property3.png";
import img4 from "../assets/Browse-property4.png";
import img5 from "../assets/Browse-property5.png";
import img6 from "../assets/Browse-property6.png";

const Browse = () => {
  const properties = [
    {
      img: img1,
      title: "The Obsidian Monolith",
      location: "Reykjavík, Iceland",
      price: "$12,450,000",
      beds: "8 BEDS",
      size: "6,500 SQFT",
    },
    {
      img: img2,
      title: "Villa Alabaster",
      location: "Antibes, France",
      price: "$28,000,000",
      beds: "6 BEDS",
      size: "8,200 SQFT",
    },
    {
      img: img3,
      title: "The Alpine Sanctuary",
      location: "Zermatt, Switzerland",
      price: "$8,900,000",
      beds: "5 BEDS",
      size: "3,800 SQFT",
    },
    {
      img: img4,
      title: "Nexus Penthouse",
      location: "Minato City, Tokyo",
      price: "$15,200,000",
      beds: "4 BEDS",
      size: "6,100 SQFT",
    },
    {
      img: img5,
      title: "Earthen Arc",
      location: "Sedona, USA",
      price: "$6,750,000",
      beds: "3 BEDS",
      size: "4,600 SQFT",
    },
    {
      img: img6,
      title: "Echo Lake Estate",
      location: "Ontario, Canada",
      price: "$11,800,000",
      beds: "8 BEDS",
      size: "9,500 SQFT",
    },
  ];

  return (
    <div className="Browse">
      <div className="Browse-container">

        {/* Header */}
        <div className="Browse-header">
       <a href="/" className="Browse-back"> Back</a>
          <p >THE GLOBAL PORTFOLIO</p>

          <h1 className="Browse-title">
            Discovery of <span>Architectural Mastery</span>
          </h1>

          <p className="Browse-desc">
            A curated collection of the world's most significant residences,
            from Brutalist cliffside retreats to gilded Manhattan penthouses.
          </p>
        </div>

        {/* Search Bar */}
        <div className="Browse-search">
          <div className="Browse-searchInput">
            <FaSearch />
            <input
              type="text"
              placeholder="Location, Architect, or Style..."
            />
          </div>

          <button className="Browse-btn">
            <FaSlidersH /> TYPE
          </button>

          <button className="Browse-btn">PRICE RANGE</button>
          <button className="Browse-btn">AMENITIES</button>

          <button className="Browse-refine">REFINE SEARCH</button>
        </div>

        {/* Grid */}
        <div className="Browse-grid">
          {properties.map((item, index) => (
            <div key={index} className="Browse-card">
              <img src={item.img} alt="" />

              <div className="Browse-cardContent">
                <div className="Browse-cardTop">
                  <h3>{item.title}</h3>
                  <span>{item.price}</span>
                </div>

                <p className="Browse-location">{item.location}</p>

                <div className="Browse-meta">
                  <span>{item.beds}</span>
                  <span>{item.size}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="Browse-pagination">
          <button>{"<"}</button>
          <span className="active">01</span>
          <span>02</span>
          <span>03</span>
          <span>04</span>
          <button>{">"}</button>
        </div>

        <p className="Browse-footer">
          DISPLAYING 1–6 OF 162 GLOBAL ESTATES
        </p>
      </div>
    </div>
  );
};

export default Browse;