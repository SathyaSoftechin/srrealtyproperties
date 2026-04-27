import React from "react";
import "./Newlisting.css";
import heroImg from "../assets/new-listing-hero.png";

import { FaGlobe, FaUsers, FaMagic } from "react-icons/fa";

const NewListing = () => {
  return (
    <div className="new-listing-container">

      {/* HERO SECTION */}
      <div
        className="new-listing-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="new-listing-overlay">

          <div className="new-listing-Exclusive" >Exclusive Real Estate</div>

          <h1>
            List Your Masterpiece <br />
            <span>Aureum Estates</span>
          </h1>

          <p>
            Experience unparalleled service and global reach for your exclusive
            property. Join the world's most prestigious real estate network.
          </p>

          <div className="new-listing-hero-buttons">
          <a href="/createnewlisting">  <button className="new-listing-btn-primary">
              Start New Listing
            </button></a>
           <a href="/speakadvisor"><button className="new-listing-btn-outline">
              Speak to an Advisor
            </button></a>
          </div>
        </div>
      </div>

      {/* WHY SECTION */}
      <div className="new-listing-why">
        <p className="new-listing-small-title">THE AUREUM ADVANTAGE</p>
        <h2>Why List With Us</h2>
        <p className="new-listing-desc">
          We provide a bespoke marketing ecosystem designed to connect the most
          distinguished properties with qualified high-net-worth individuals
          worldwide.
        </p>

        <div className="new-listing-cards">
          {/* CARD 1 */}
          <div className="new-listing-card">
            <div className="new-listing-icon">
              <FaGlobe />
            </div>
            <h3>Global Exposure</h3>
            <p>
              Your property features across our international syndication
              network, reaching premium buyers in over 70 countries and major
              financial hubs.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="new-listing-card">
            <div className="new-listing-icon">
              <FaUsers />
            </div>
            <h3>Elite Advisor Network</h3>
            <p>
              Gain exclusive access to our hand-picked specialists who understand
              the nuances of the luxury market and provide concierge-level
              service.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="new-listing-card">
            <div className="new-listing-icon">
              <FaMagic />
            </div>
            <h3>Bespoke Marketing</h3>
            <p>
              Every masterpiece deserves its own narrative. We craft tailored
              digital and print campaigns with cinema-quality visuals for your
              estate.
            </p>
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="new-listing-cta">
        <div>
          <h2>Ready to showcase your property?</h2>
          <p>
            Our advisors are standing by to assist with your valuation and
            strategic listing plan. Let's make your estate the next Aureum
            masterpiece.
          </p>
        </div>

       <a href="/contactadvisor"> <button className="new-listing-btn-primary">
          Contact an Advisor
        </button></a>
      </div>
    </div>
  );
};

export default NewListing;