import React from "react";
import "./Buy.css";

import hero from "../assets/Buy-hero.png";
import estate from "../assets/Buy-img1.png";
import dev from "../assets/Buy-img2.png";
import island from "../assets/Buy-img3.png";

import villa1 from "../assets/Buy-cart1.png";
import villa2 from "../assets/Buy-cart2.png";
import villa3 from "../assets/Buy-cart3.png";
import bg from "../assets/Buy-img4.png";
const Buy = () => {
  return (
    <div className="buy-container">

      {/* HERO */}
      <div className="buy-hero" style={{ backgroundImage: `url(${hero})` }}>
        <div className="buy-overlay">
          <h1>
            Acquire Your Next <br />
            <span>Masterpiece</span>
          </h1>

         
        </div>
      </div>

      {/* CATEGORIES */}
      <section className="buy-section">
        <p className="buy-subtitle">CURATED PORTFOLIOS</p>
        <h2>Investment Categories</h2>

  <div className="buy-cards">
         <div className="buy-card">
            <a href="/bluechip"><img src={estate} alt="" />
            <span>Blue Chip Estates</span></a>
          </div>  

          <div className="buy-card">
            <img src={dev} alt="" />
            <span>New Developments</span>
          </div>

          <div className="buy-card">
            <img src={island} alt="" />
            <span>Private Islands</span>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="buy-section">
        <div className="buy-header-row">
          <h2>Featured Acquisitions</h2>
          <span className="buy-view">View All Portfolio →</span>
        </div>

        <div className="buy-property-grid">

          {/* CARD 1 */}
          <div className="buy-property">
            <img src={villa1} alt="" />
            <div className="buy-property-info">
              <h3>The Gilded Pavilion</h3>
              <p>$42,500,000</p>
              <div className="buy-meta">
                <span>8.2% ROI</span>
                <span>18,500 sqft</span>
                <span>Luxury</span>
              </div>
              <div className="buy-buttons">
               <a href="/secureaccess"> <button>Request Prospectus</button></a>
              <a href="/property">  <button className="outline">View Details</button></a>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="buy-property">
            <img src={villa2} alt="" />
            <div className="buy-property-info">
              <h3>Skyline Sanctuary</h3>
              <p>$18,750,000</p>
              <div className="buy-meta">
                <span>12.4% ROI</span>
                <span>6,200 sqft</span>
                <span>Growth</span>
              </div>
              <div className="buy-buttons">
                <a href="/secureaccess">  <button>Request Prospectus</button></a>
                <button className="outline">View Details</button>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="buy-property">
            <img src={villa3} alt="" />
            <div className="buy-property-info">
              <h3>Villa d'Oro</h3>
              <p>$65,000,000</p>
              <div className="buy-meta">
                <span>6.1% ROI</span>
                <span>22,000 sqft</span>
                <span>Legacy</span>
              </div>
              <div className="buy-buttons">
                 <a href="/secureaccess"> <button>Request Prospectus</button></a>
                <button className="outline">View Details</button>
              </div>
            </div>
          </div>

        </div>
      </section>
          





      {/* JOURNEY SECTION */}
      <section className="buy-journey">
        <p className="buy-journey-sub">THE 7 WHITE GLOVE EXPERIENCE</p>
        <h2>A Seamless Acquisition Journey</h2>
        <p className="buy-journey-desc">
          Our proprietary 3-step protocol ensures discretion, precision, and
          efficiency for the world’s most discerning investors.
        </p>

        <div className="buy-steps">
          <div className="buy-step">
            <div className="buy-circle">01</div>
            <h4>Discovery</h4>
            <p>
              Personalized consultation to define investment parameters and
              provide exclusive access.
            </p>
          </div>

          <div className="buy-step">
            <div className="buy-circle">02</div>
            <h4>Due Diligence</h4>
            <p>
              Rigorous legal, structural, and financial vetting by global
              experts.
            </p>
          </div>

          <div className="buy-step">
            <div className="buy-circle">03</div>
            <h4>Closing</h4>
            <p>
              Seamless transfer of ownership with full concierge support.
            </p>
          </div>
        </div>
      </section>

      {/* MARKET INSIGHTS */}
      <section className="buy-insights">
        <div className="buy-insights-left">
          <h3>
            Market Insights <span>Q4 2023</span>
          </h3>

          <div className="buy-bar">
            <p>Global Luxury Index</p>
            <div className="buy-progress">
              <div className="buy-fill" style={{ width: "75%" }}></div>
            </div>
            <span className="buy-green">+4.2%</span>
          </div>

          <div className="buy-bar">
            <p>Held Average (Ultra-Luxury)</p>
            <div className="buy-progress">
              <div className="buy-fill" style={{ width: "60%" }}></div>
            </div>
            <span>6.8%</span>
          </div>
        </div>

        <div className="buy-insights-right">
          <div className="buy-stat">128<br /><span>Private Islands Sold</span></div>
          <div className="buy-stat">$4.2B<br /><span>Transaction Volume</span></div>
          <div className="buy-stat">14%<br /><span>Appreciation Rate</span></div>
          <div className="buy-stat">Top<br /><span>Investment Tier</span></div>
        </div>
      </section>








    </div>
  );
};

export default Buy;