import React from "react";
import "./Dashboard.css";

// Images
import villa from "../assets/Dashboard-Villa.png";
import manor from "../assets/Dashboard-manor.png";
import plant from "../assets/Dashboard-plant.png";
import cabin from "../assets/Dashboard-cabin.png";

// Icons
import { FaEye, FaPen, FaUsers } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { FaBed, FaBath } from "react-icons/fa";
import { MdOutlineSquareFoot } from "react-icons/md";
const Dashboard = () => {
  return (
    <div className="dashboard-container">

      {/* HEADER */}
      <div className="dashboard-header">
        <div>
          <h1>My Listings</h1>
          <p>Manage and monitor your exclusive property portfolio performance.</p>
        </div>

        <button className="dashboard-add-btn">+ Add New Listing</button>
      </div>

      {/* STATS */}
      <div className="dashboard-stats">
        <div className="dashboard-card">
          <p>PORTFOLIO VALUE</p>
          <h2>$42.8M <span className="green">+3.2%</span></h2>
        </div>

        <div className="dashboard-card">
          <p>TOTAL IMPRESSIONS</p>
          <h2>84.2K <span className="green">+12%</span></h2>
        </div>

        <div className="dashboard-card">
          <p>ACTIVE INQUIRIES</p>
          <h2>126 <span className="hot">Hot</span></h2>
        </div>

        <div className="dashboard-card">
          <p>AVG. CLOSING TIME</p>
          <h2>18 <span>Days</span></h2>
        </div>
      </div>

      {/* FILTER TABS */}
      <div className="dashboard-tabs">
        <span className="active">All Listings (12)</span>
        <span>Live (6)</span>
        <span>Pending (3)</span>
        <span>Awaiting Verification (1)</span>
        <span>Sold (2)</span>
      </div>

      {/* LISTINGS GRID */}
      <div className="dashboard-grid">

        {/* CARD 1 */}
        <div className="dashboard-listing">
          <img src={villa} alt="" />
          <span className="dashboard-badge dashboard-live">LIVE</span>
          <span className="dashboard-badge dashboard-featured">FEATURED</span>

          <div className="dashboard-price">$12,500,000</div>

          <div className="dashboard-info">
            <h3>The Obsidian Villa</h3>
            <p>Beverly Hills, CA</p>

            <div className="dashboard-stats">
              <div><FaEye /> 1.2k</div>
              <div>84 Saves</div>
              <div>3 Offers</div>
            </div>

            <div className="dashboard-actions">
              <FaPen />
              <IoEyeOutline />
            </div>
           <div className="dashboard-card-listed">
            <div>Listed 14 days ago</div>
            <span>
                <FaBed /> 6  <FaBath /> 8  <MdOutlineSquareFoot /> 8200
              
              
              
              </span></div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="dashboard-listing">
          <img src={manor} alt="" />
          <span className="dashboard-badge dashboard-offer">UNDER OFFER</span>

          <div className="dashboard-price">$24,000,000</div>

          <div className="dashboard-info">
            <h3>Elysian Heights Manor</h3>
            <p>Aspen, CO</p>

            <div className="dashboard-stats">
              <div><FaEye /> 2.8k</div>
              <div>312 Saves</div>
              <div>7 Offers</div>
            </div>

            <div className="dashboard-actions">
              <FaPen />
              <FaUsers />
            </div>




 <div className="dashboard-card-listed">
            <div>Listed 42 days ago</div>
            <span>
                <FaBed /> 9  <FaBath /> 12  <MdOutlineSquareFoot /> 15400
              
              
              
              </span></div>





          </div>
        </div>

        {/* CARD 3 */}
        <div className="dashboard-listing">
          <img src={plant} alt="" />
          <span className="dashboard-badge dashboard-verify">AWAITING VERIFICATION</span>

          <div className="dashboard-price">$8,900,000</div>

          <div className="dashboard-info">
            <h3>Skyline Penthouse</h3>
            <p>Manhattan, NY</p>

            <div className="dashboard-processing">
              ⏳ Processing Documentation
            </div>





 <div className="dashboard-card-listed">
            <div>Submitted 2 hours ago</div>
            <span>
                <FaBed /> 4  <FaBath /> 5  <MdOutlineSquareFoot /> 4500
              
              
              
              </span></div>






          </div>
        </div>

        {/* CARD 4 */}
        <div className="dashboard-listing">
          <img src={cabin} alt="" />
          <span className="dashboard-badge dashboard-sold">SOLD</span>

          <div className="dashboard-price">$5,200,000</div>

          <div className="dashboard-info">
            <h3>Crystal Lake Retreat</h3>
            <p>Tahoe, CA</p>

            <div className="dashboard-stats">
              <div><FaEye /> 14.5k</div>
              <div>12d</div>
              <div className="dashboard-green">+14%</div>
            </div>






 <div className="dashboard-card-listed">
            <div>Sold on Dec 12, 2023</div>
            <span>
                <FaBed /> 3  <FaBath /> 3  <MdOutlineSquareFoot /> 3200
              
              
              
              </span></div>







          </div>
        </div>

      </div>

      {/* LOAD MORE */}
      <div className="dashboard-load">
        <button>Load More Properties</button>
      </div>

    </div>
  );
};

export default Dashboard;