import React from "react";
import "./UserProfile.css";
import {
  FaThLarge,
  FaFileAlt,
  FaCog,
  FaHeart,
} from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

import villa1 from "../assets/UserProfile-villa1.png";
import villa2 from "../assets/UserProfile-villa2.png";
import  Sidebar from "../components/UserProfile-sidebar"
import { MdDateRange } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa";

import { HiOutlinePlus } from "react-icons/hi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { HiOutlineShieldCheck  } from "react-icons/hi";










const UserProfile = () => {
  return (
    <div className="UserProfile-container">





    <Sidebar />
      
    


      {/* MAIN */}
      <div className="UserProfile-main">
        
        {/* HEADER */}
        <div className="UserProfile-header">
          <div>
            <p className="UserProfile-subtitle">PRIVATE WEALTH CLIENT</p>
            <h1>Alexander Thorne</h1>

            <div className="UserProfile-badge">
              <span>ELITE TIER MEMBER</span>
              <small>• Member since 2018</small>
            </div>
          </div>

          <div className="UserProfile-header-btns">
            <button>Edit Profile</button>
            <button className="highlight">Membership Benefits</button>
          </div>
        </div>

        {/* STATS */}
        <div className="UserProfile-stats">
          <div className="UserProfile-card">
            <p>Total Portfolio Value</p>
            <h2>$42.8M</h2>
            <span className="green">+12.4% this year</span>
          </div>

          <div className="UserProfile-card">
            <p>Active Assets</p>
            <h2>08</h2>
            <span>Global Prime Residences</span>
          </div>

          <div className="UserProfile-card">
            <p>Acquisition Targets</p>
            <h2>03</h2>
            <span>Opportunity Identified</span>
          </div>
        </div>

        {/* SAVED */}
        <div className="UserProfile-section">
          <div className="UserProfile-section-header">
            <h3>Saved Masterpieces</h3>
            <span>VIEW ALL FAVORITES</span>
          </div>

          <div className="UserProfile-properties">
            
            {/* CARD 1 */}
            <div className="UserProfile-property">
              <img src={villa1} alt="" />
              <FaHeart className="UserProfile-heart" />

              <div className="UserProfile-property-info">
                <h4>The Glass Villa</h4>
                <p>6 Beds • 8 Baths • 12,000 sq.ft</p>
                <div className="UserProfile-price">$18,500,000</div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="UserProfile-property">
              <img src={villa2} alt="" />
              <FaHeart className="UserProfile-heart" />

              <div className="UserProfile-property-info">
                <h4>Obsidian Vista</h4>
                <p>4 Beds • 5 Baths • 8,500 sq.ft</p>
                <div className="UserProfile-price">$12,200,000</div>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="UserProfile-bottom">

          {/* BRIEFINGS */}
          <div className="UserProfile-briefings">
            <h3>Active Briefings</h3>

            <div className="UserProfile-brief-card">
              <div>
               <p className="UserProfile-brief-yellow">
                <MdDateRange /> UPCOMING CONSULTATION
              </p>
                <h4>Portfolio Strategy with Julian Vane</h4>
                <span>October 24, 2023 • 14:00 GMT</span>
              </div>
              <BsThreeDotsVertical />
            </div>

            <div className="UserProfile-brief-card dim">
              <div>
                <p>
               <FaFilePdf /> DRAFT REVIEW
                  </p>
                <h4>Monaco Penthouse Legal Brief</h4>
                <span>Waiting for signature</span>
              </div>
            </div>
          </div>

          {/* CONCIERGE */}
          <div className="UserProfile-concierge">
            <h3>Executive Concierge</h3>

           <a href="/requestname"> <div className="UserProfile-con-item">
  <HiOutlinePlus /> Request New Briefing →
</div></a>

<a href="/tax"> <div className="UserProfile-con-item">
  <HiOutlineDocumentText /> View Tax Statements →
</div></a>

<a href="/securemessage"> <div className="UserProfile-con-item">
  <HiOutlineShieldCheck  /> Secure Message Vault →
</div></a>
          </div>

        </div>

      </div>
    </div>
  );
};

export default UserProfile;