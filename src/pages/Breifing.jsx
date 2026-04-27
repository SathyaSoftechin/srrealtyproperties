import React from "react";
import "./Breifing.css";
import {
  FaBriefcase,
  FaCog,
  FaFolderOpen,
  FaArrowRight,
} from "react-icons/fa";

import profileImg from "../assets/Breifing-profile.png";
import houseImg from "../assets/Breifing-house.png";
import avatar1 from "../assets/Breifing-avatar1.png";
import avatar2 from "../assets/Breifing-avatar2.png";
// import avatar3 from "../assets/Breifing-avatar3.png";

import Sidebar from "../components/UserProfile-sidebar";
import { FaEye } from "react-icons/fa";
const Breifing = () => {
  return (
    <div className="Breifing-container">
       
      {/* SIDEBAR */}
      <div className="Breifing-sidebar">
        <div className="Breifing-profile">
          <img src={profileImg} alt="profile" />
          <h3>Alexander Thorne</h3>
          <span>ELITE MEMBER</span>
        </div>

        <Sidebar />
      </div>

      {/* MAIN */}
      <div className="Breifing-main">
        <div className="Breifing-header">
          <span>INVESTMENT INTELLIGENCE</span>

          <h1>
            Property <span>Briefings</span>
          </h1>

          <p>
            Your curated stream of private market insights, exclusive
            architectural dossiers,<br /> and one-on-one consultation summaries.
          </p>


             <div className="Breifing-Live">Live & Upcoming</div>




        </div>

        <div className="Breifing-curators">
          <div className="Breifing-curator-images">
            <img src={avatar2} alt="c1" />
            {/* <img src={avatar3} alt="c2" /> */}
        
          </div>
          <span>TALK TO YOUR CURATORS</span>
        </div>

        {/* TOP SECTION */}
        <div className="Breifing-top">
          
          {/* LEFT CARD */}
          <div className="Breifing-card">
            <img src={houseImg} alt="house" />
            <div className="Breifing-card-content">
              <span className="Breifing-tag">UPCOMING</span>
              <h2>The Belvedere Collection: Private Unveiling</h2>
              <p>
                Exclusive architectural briefing on newly acquired coastal
                estates.
              </p>

             <a href="/join"> <button>
                JOIN BRIEFING <FaArrowRight />
              </button></a>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="Breifing-right">
            <div className="Breifing-session">
              <span>1-ON-1 STRATEGY</span>
              <h3>Portfolio Rebalancing Session</h3>

              <div className="Breifing-user">
                <img src={avatar1} alt="" />
                <p>Julian Vane</p>
              </div>

              <p className="Breifing-date">Nov 18, 2024</p>

              <button className="Breifing-outline">ADD TO CALENDAR</button>
            </div>

            <div className="Breifing-report">
              <span>MARKET REPORT</span>
              <h3>Q4 Emerging Markets Brief</h3>
              <p>Drafting in progress by Research
Team.</p>
<span>Available in 4 days</span>
            </div>
          </div>
        </div>

        {/* ARCHIVE */}
        <div className="Breifing-archive"> 

<div className="breifing-Filter">

          <h4>DOSSIER ARCHIVE</h4> <span>Filter by region</span></div>

         <a href="/ViewSummary"> <div className="Breifing-item">
            <span>01</span>
            <div>
              <h3>The Alpine Sanctuary Report</h3>
              <p>Consultant: Julian Vane • October 28, 2024</p>
            </div>
           <span>VIEW SUMMARY <FaEye className="eye-icon" /></span>
          </div></a>

          <div className="Breifing-item">
            <span>02</span>
            <div>
              <h3>Urban Luxury: Tokyo District Briefing</h3>
              <p>Consultant: Sarah Chen • October 15, 2024</p>
            </div>
          <span>VIEW SUMMARY <FaEye className="eye-icon" /></span>
          </div>

          <div className="Breifing-item">
            <span>03</span>
            <div>
              <h3>Mediterranean Estate Liquidity Analysis</h3>
              <p>Consultant: Julian Vane • Sept 30, 2024</p>
            </div>
            <span>VIEW SUMMARY <FaEye className="eye-icon" /></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breifing;