import React from "react";
import "./Property-owner.css";
import { FaBell, FaSearch, FaEye } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { HiOutlineDownload } from "react-icons/hi";

// images
import property1 from "../assets/property-img1.png";
import property2 from "../assets/property-img2.png";
import avatar from "../assets/property-avatar.png";

function App() {
  return (
    <div className="property-owner-container">
      
      {/* HEADER */}
      <div className="property-owner-header">
        <h2>Portfolio Overview</h2>

        <div className="property-owner-header-right">
          <div className="property-owner-search">
            <FaSearch />
            <input type="text" placeholder="Search portfolio..." />
          </div>

          <FaBell className="property-owner-icon" />

          <div className="property-owner-profile">
            <img src={avatar} alt="profile" />
            <div>
              <h4>Julian Vane</h4>
              <p>Premium Partner</p>
            </div>
          </div>
        </div>
      </div>

      {/* WELCOME */}
      <div className="property-owner-welcome">
        <h1>Welcome back, Julian</h1>
        <p>
          Your real estate portfolio has increased by
          <span> +2.4% </span> this month.
        </p>
      </div>

      {/* STATS */}
      <div className="property-owner-stats">
        <div className="property-owner-card">
          <p>Total Portfolio Value</p>
          <h2>$42,580,000</h2>
          <span>+2.4% vs last month</span>
        </div>

        <div className="property-owner-card">
          <p>Active Inquiries</p>
          <h2>128</h2>
          <span>+12% new leads</span>
        </div>

        <div className="property-owner-card">
          <p>Total Views</p>
          <h2>14,240</h2>
          <span>+5.8% reach increase</span>
        </div>
      </div>

      {/* MAIN SECTION */}
      <div className="property-owner-main">

        {/* LEFT */}
        <div className="property-owner-left">

          <div className="property-owner-section-header">
            <h3>Featured Listings</h3>
            <span>View All</span>
          </div>

          <div className="property-owner-listings">

            {/* CARD 1 */}
            <div className="property-owner-listing-card">
              <span className="tag live">LIVE</span>
              <img src={property1} alt="" />
              <div className="property-owner-card-body">
                <h4>Azure Heights Penthouse</h4>
                <p>Mayfair, London • $12.5M</p>

                <div className="property-owner-card-footer">
                  <span>4,200 views</span>
                  <FiEdit />
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="property-owner-listing-card">
              <span className="tag offer">UNDER OFFER</span>
              <img src={property2} alt="" />
              <div className="property-owner-card-body">
                <h4>The Gilded Manor</h4>
                <p>Beverly Hills, CA • $28.2M</p>

                <div className="property-owner-card-footer">
                  <span>2,000 views</span>
                  <FaEye />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT */}
        <div className="property-owner-right">
          <h3>Recent Activity</h3>

          <div className="property-owner-activity">
            <div className="activity-item">
              <MdVerified />
              <div>
                <p>KYC Verified for "Azure Heights Penthouse".</p>
                <span>2 hours ago</span>
              </div>
            </div>

            <div className="activity-item">
              <AiOutlineUser />
              <div>
                <p>New viewing request from Sarah J.</p>
                <span>5 hours ago</span>
              </div>
            </div>

            <div className="activity-item">
              <BiMessageSquareDetail />
              <div>
                <p>Offer Received: $27.5M</p>
                <span>Yesterday</span>
              </div>
            </div>

            <div className="activity-item">
              <FaEye />
              <div>
                <p>Listing Updated: 12 new photos added</p>
                <span>2 days ago</span>
              </div>
            </div>

            <div className="view-history">View Full History</div>
          </div>
        </div>

      </div>

      {/* BOTTOM BANNER */}
      <div className="property-owner-banner">
        <div>
          <h3>Premium Market Insights</h3>
          <p>
            Your portfolio is performing in the top 5% of London's luxury real estate market this quarter.
          </p>
        </div>

        <button>
          <HiOutlineDownload /> Download Q3 Report
        </button>
      </div>

    </div>
  );
}

export default App;