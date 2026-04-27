import React from "react";
import "./EliteAgent.css";

// Images (place inside src/assets/)
import agent1 from "../assets/EliteAgent-agent1.png";
import agent2 from "../assets/EliteAgent-agent2.png";
import agent3 from "../assets/EliteAgent-agent3.png";
import { FiChevronDown } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";


const EliteAgent = () => {
  return (
    <div className="eliteagent-container">

      {/* HERO SECTION */}
      <div className="eliteagent-hero">
        <h1>
          Connect with the World's <br />
          Leading <span>Real Estate Specialists</span>
        </h1>

        <p>
          Our global network of elite professionals is curated for their
          unparalleled expertise in high-value asset management and luxury
          acquisitions.
        </p>
       </div>




    <div className="eliteagent-filter-wrapper">
  <div className="eliteagent-filters">

    {/* SEARCH */}
    <div className="eliteagent-filter-box eliteagent-search">
      <FiSearch className="eliteagent-icon" />
      <input type="text" placeholder="Search by name..." />
    </div>

    {/* DROPDOWN 1 */}
    <div className="eliteagent-filter-box">
      <select>
        <option>All Regions</option>
      </select>
      <FiChevronDown className="eliteagent-icon" />
    </div>

    {/* DROPDOWN 2 */}
    <div className="eliteagent-filter-box">
      <select>
        <option>All Specializations</option>
      </select>
      <FiChevronDown className="eliteagent-icon" />
    </div>

    {/* DROPDOWN 3 */}
    <div className="eliteagent-filter-box">
      <select>
        <option>Experience Level</option>
      </select>
      <FiChevronDown className="eliteagent-icon" />
    </div>

  </div>
</div>





      {/* AGENTS */}
      <div className="eliteagent-cards">

        {/* CARD 1 */}
        <div className="eliteagent-card">
          <img src={agent1} alt="agent" />
          <span className="eliteagent-location">NEW YORK</span>

          <h3>Alexander Vance</h3>
          <p className="eliteagent-role">Senior Portfolio Manager</p>

          <div className="eliteagent-stats">
            <div>
              <span>Experience</span>
              <h4>18 Years</h4>
            </div>
            <div>
              <span>Deals Closed</span>
              <h4>$1.4B+</h4>
            </div>
          </div>

          <div className="eliteagent-tags">
            <span>Residential</span>
            <span>Investment</span>
          </div>

         <a href="/agentprofile"> <button className="eliteagent-btn">View Profile</button></a>
          <button className="eliteagent-outline">Secure Message</button>
        </div>

        {/* CARD 2 */}
        <div className="eliteagent-card">
          <img src={agent2} alt="agent" />
          <span className="eliteagent-location">LONDON</span>

          <h3>Elena Moretti</h3>
          <p className="eliteagent-role">Head of Private Acquisitions</p>

          <div className="eliteagent-stats">
            <div>
              <span>Experience</span>
              <h4>14 Years</h4>
            </div>
            <div>
              <span>Volume Closed</span>
              <h4>€920M</h4>
            </div>
          </div>

          <div className="eliteagent-tags">
            <span>Commercial</span>
            <span>Private Equity</span>
          </div>

          <button className="eliteagent-btn">View Profile</button>
          <button className="eliteagent-outline">Schedule Briefing</button>
        </div>

        {/* CARD 3 */}
        <div className="eliteagent-card">
          <img src={agent3} alt="agent" />
          <span className="eliteagent-location">DUBAI</span>

          <h3>Omar Al-Sayed</h3>
          <p className="eliteagent-role">Senior Investment Advisor</p>

          <div className="eliteagent-stats">
            <div>
              <span>Experience</span>
              <h4>12 Years</h4>
            </div>
            <div>
              <span>Volume Closed</span>
              <h4>$2.1B</h4>
            </div>
          </div>

          <div className="eliteagent-tags">
            <span>High Net Worth</span>
            <span>International</span>
          </div>

          <button className="eliteagent-btn">View Profile</button>
          <button className="eliteagent-outline">Secure Message</button>
        </div>

      </div>

      {/* STATS */}
      <div className="eliteagent-stats-section">
        <p className="eliteagent-small">BY THE NUMBERS</p>
        <h2>Unrivaled Collective Performance</h2>

        <div className="eliteagent-stats-grid">
          <div>
            <h3>$14.8B</h3>
            <p>Total Transactions</p>
          </div>
          <div>
            <h3>420+</h3>
            <p>Elite Active Agents</p>
          </div>
          <div>
            <h3>12</h3>
            <p>Global Office Hubs</p>
          </div>
          <div>
            <h3>28</h3>
            <p>Industry Awards</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="eliteagent-cta">
        <h2>Join our global network of elite professionals</h2>
        <p>
         Are you a high-performing real estate specialist looking to elevate your portfolio?
We are currently expanding our teams in Zurich and Singapore.
        </p>

        <button>Apply to Join the Network</button>
      </div>

    </div>
  );
};

export default EliteAgent;