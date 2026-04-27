import React from "react";
import "./BlueChip.css";

import hero from "../assets/bluechip-hero.png";
import villa from "../assets/bluechip-villa.png";
import penthouse from "../assets/bluechip-penthouse.png";
import coast from "../assets/bluechip-coast.png";
import building from "../assets/bluechip-building.png";

const BlueChip = () => {
  return (
    <div className="bluechip_container">

      {/* HERO */}
      <div className="bluechip_hero">
        <img src={hero} alt="hero" />
        <div className="bluechip_overlay">
          <span className="bluechip_tag">THE PINNACLE TIER</span>
          <h1>Blue Chip Estates</h1>
          <p>
            A curated selection of high-stability, luxury properties designed for
            multi-generational wealth preservation and architectural legacy.
          </p>

          <div className="bluechip_buttons">
           
            <a href="/investment"><button className="bluechip_outline">Investment Metrics</button></a>
          </div>
        </div>
      </div>

      {/* FILTER */}
      <div className="bluechip_filter">
            <p>Filter By:</p>

        <button>Region ▾</button>
        <button>Property Type ▾</button>
        <button>Price Range ▾</button>
        <span>Showing 28 Blue Chip Assets</span>
      </div>

      {/* PORTFOLIO */}
      <div className="bluechip_section">
        <h2>Portfolio Highlights</h2>
        <div className="bluechip_section-our"><p>
          Our most stable assets with proven appreciation history and<br/>
          unparalleled architectural significance.
        </p>




        <span>View Entire Collection →</span></div>








        <div className="bluechip_cards">

          {/* CARD 1 */}
          <div className="bluechip_card">
            <img src={villa} alt="" />
            <h3>The Obsidian Villa</h3>
            <span>$12.5M</span>
            <p>Geneva, Switzerland</p>
            <div className="bluechip_stats">
              <div>
                <small>APPRECIATION</small>
                <b>+4.2%</b>
              </div>
              <div>
                <small>YIELD</small>
                <b>3.1%</b>
              </div>
            </div>
           <a href="/exploreglobal"> <button>VIEW DETAILS</button></a>
          </div>

          {/* CARD 2 */}
          <div className="bluechip_card">
            <img src={penthouse} alt="" />
            <h3>Metropolis Penthouse</h3>
            <span>$28.0M</span>
            <p>New York, USA</p>
            <div className="bluechip_stats">
              <div>
                <small>APPRECIATION</small>
                <b>+5.1%</b>
              </div>
              <div>
                <small>YIELD</small>
                <b>2.8%</b>
              </div>
            </div>
            <button>VIEW DETAILS</button>
          </div>

          {/* CARD 3 */}
          <div className="bluechip_card">
            <img src={coast} alt="" />
            <h3>Azure Coast Estate</h3>
            <span>$15.2M</span>
            <p>Cannes, France</p>
            <div className="bluechip_stats">
              <div>
                <small>APPRECIATION</small>
                <b>+3.8%</b>
              </div>
              <div>
                <small>YIELD</small>
                <b>3.4%</b>
              </div>
            </div>
            <button>VIEW DETAILS</button>
          </div>

        </div>
      </div>

      {/* WHY SECTION */}
      <div className="bluechip_why">
        <img src={building} alt="" />
        <div className="bluechip_why_text">
          <span>THE GOLD STANDARD</span>
          <h2>Why Blue Chip Estates Define the Global Market</h2>
          <p>
            In the volatile world of global finance, Blue Chip real estate stands
            as a bastion of stability. These are not merely houses; they are
            architectural legacies situated in locations with historically high
            demand and strictly limited supply.
          </p>

          <ul>
            <li>Limited Supply in Global Gateway Cities</li>
            <li>Architectural Rarity and Historical Significance</li>
            <li>Low Correlation to Public Equity Markets</li>
          </ul>
        </div>
      </div>

      {/* REQUEST */}
      <div className="bluechip_request">
        <h2>Request Private Access</h2>
        <p>
         Over 40% of our 'Blue Chip' properties are never listed publicly. To preserve owner privacy<br/>
and asset exclusivity, we provide private tours and investment dossiers to verified<br/>
individuals.
        </p>

        <div className="bluechip_input">
          <input type="email" placeholder="Professional Email" />
          <button>VERIFY & ENTER</button>
        
        </div>
          <span>Subject to vetting. Response time typically within 24 hours.</span>
      </div>

    </div>
  );
};

export default BlueChip;