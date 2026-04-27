import React from "react";
import "./Villaazure.css";

import hero from "../assets/villa-hero.png";
import loc from "../assets/villa-location.png";
import card1 from "../assets/villa-card1.png";
import card2 from "../assets/villa-card2.png";
import card3 from "../assets/villa-card3.png";
import { FaImages } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaBed, FaBath } from "react-icons/fa";
import { MdPool, MdLocalFireDepartment } from "react-icons/md";
import {
  FaHelicopter,
  FaWineGlassAlt,
  FaUmbrellaBeach,
  FaConciergeBell
} from "react-icons/fa";

const VillaAzure = () => {
  return (
    <div className="villa">

      {/* HERO */}
      <div className="villa-hero">
        <img src={hero} alt="villa" />
        <div className="villa-hero-content">
          <span className="villa-hero-tag">ELITE COLLECTION</span>
          <h1>Villa Azure</h1>
          <p>📍 Amalfi Coast, Italy</p>
          




<button className="gallery-btn">
  <FaImages className="gallery-icon" /> View Gallery
</button>





        </div>
      </div>

      {/* DETAILS + BOOKING */}
      <div className="villa-main">

        {/* LEFT */}
        <div className="villa-left">

  <div className="villa-stats">
  <div><FaBed className="villa-icon" />Bedrooms<br/> <span>6 Suites</span></div>
  <div><FaBath className="villa-icon" />Bathrooms<br/><span>8 Baths</span> </div>
  <div><MdPool className="villa-icon" />Pool <span>Infinity</span></div>
  <div><MdLocalFireDepartment className="villa-icon" />Service <span>Private Chef</span></div>
</div>

          <h2>The Narrative</h2>
          <p>
            Perched upon the dramatic cliffs of the Amalfi Coast, <span>Villa Azure</span>
            blends neoclassical elegance with modern luxury.
          </p>

          <p>
            With vaulted ceilings, handcrafted tiles, and stunning sea views,
            the villa offers unmatched comfort and timeless beauty.
          </p>

          <p>
            Whether dining under sunsets or exploring coastal paths, Villa Azure
            delivers a true Italian luxury experience.
          </p>

         
     {/* AMENITIES */}
<h3>Exclusive Amenities</h3>
<div className="villa-amenities">
  <div><FaHelicopter className="amenity-icon" /> Private Helipad</div>
  <div><FaWineGlassAlt className="amenity-icon" /> Wine Cellar</div>
  <div><FaUmbrellaBeach className="amenity-icon" /> Beach Access</div>
  <div><FaConciergeBell className="amenity-icon" /> 24/7 Butler</div>
</div>
        </div>

        {/* RIGHT BOOKING */}
        <div className="villa-booking">
          <span>Nightly Rate</span>
          <h3>$2,500<span>/ night</span></h3>

          <div className="booking-box">
           <div className="booking-input-date">
           <div className="input">Check-In:<span> May 12, 2024</span></div>
            <div className="input">Check-Out:<span> May 19, 2024</span></div></div>
          
          
          
          <div className="input Join-guest">
  Guests:<br />
  <span>
    4 Adults, 2 children
    <FaChevronDown className="Join-select-icon" />
  </span>
</div>
          
          
          </div>

       






<div className="villa-booking-price">
  <p>
    <span>$2,500 x 7 nights</span>
    <span>$17,500</span>
  </p>

  <p>
    <span>Concierge Service Fee</span>
    <span>+$850</span>
  </p>

  <h4>
    <span>Total</span>
    <span>$18,350</span>
  </h4>
</div>











         <a href="/bookingconfirmation"> <button className="villaazure-book-btn">REQUEST BOOKING</button></a>
          <span className="villaazure-secure">Secure checkout via Aureum Private Client</span>
        </div>

      </div>

      {/* LOCATION */}
      <div className="villa-location">
        <h3>Location Showcase</h3>
        <img src={loc} alt="location" />
      </div>

      {/* SIMILAR */}
      <div className="villa-similar">
        <h3>Similar Amalfi Retreats</h3>

        <div className="cards">

          <div className="card">
            <img src={card1} alt="" />
            <h4>The Cliff House,Positano</h4>
            <span>$3,200 / night</span>
            <p>4 Bedrooms • Infinity Pool • Wine Cave</p>
          </div>

          <div className="card">
            <img src={card2} alt="" />
            <h4>Palazzo Ravello</h4>
            <span>$4,500 / night</span>
            <p>8 Bedrooms • Historical Estate • Botanical Gardens</p>
          </div>

          <div className="card">
            <img src={card3} alt="" />
            <h4>Villa Solace,Capri</h4>
            <span>$2,800 / night</span>
            <p>5 Bedrooms • Yacht Access • Private Cove</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default VillaAzure;