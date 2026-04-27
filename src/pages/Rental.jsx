import React from "react";
import "./Rental.css";

// import your images
import heroImg from "../assets/rental-hero.png";     // first image
import lifestyleImg from "../assets/rental-life.png"; // second image
import cart1 from "../assets/Rental-cart1.png";
import cart2 from "../assets/Rental-cart2.png";
import cart3 from "../assets/Rental-cart3.png";
const Rental = () => {
  return (
    <div className="rental-page">

      {/* ================= HERO SECTION ================= */}
      <section className="rental-hero">
        <img src={heroImg} alt="hero" className="rental-hero-bg" />

        <div className="rental-hero-overlay">
          <p className="rental-tag">EXQUISITE SHORT-TERM STAYS</p>
          <h1>Your Sanctuary Awaits</h1>
          <p className="rental-sub">
            Curated ultra-luxury estates with bespoke services for the discerning traveler.
          </p>

          {/* SEARCH BAR */}
          <div className="rental-search-box">
            <div className="rental-search-item">
              <label>Location</label>
              <span>Where to?</span>
            </div>
             
               

            <div className="rental-search-item">
              <label>Check in - out</label>
              <span>Add dates</span>
            </div>

            <div className="rental-search-item">
              <label>Guests</label>
              <span>Add guests</span>
            </div>

            <button className="rental-search-btn">Search</button>
          </div>
        </div>
      </section>


      {/* ================= FEATURED SECTION ================= */}
      <section className="rental-featured">
        <div className="rental-featured-header">
          <div>
            <h2>Featured Collections</h2>
            <p>Discover our most prestigious properties for this season.</p>
          </div>

          <button className="rental-all-btn">All Properties</button>
        </div>

        <div className="rental-card-grid">

          {/* CARD 1 */}
          <div className="rental-card">
            <img src={cart1} alt="villa" />

            <div className="rental-card-content">
              <h3>The Obsidian Peak</h3>
              <p className="rental-price">$4,250 <span>/night</span></p>
              <button>Book Now</button>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="rental-card">
            <img src={cart2} alt="villa" />

            <div className="rental-card-content">
              <h3>Villa d'Oro</h3>
              <p className="rental-price">$6,800 <span>/night</span></p>
              <button>Book Now</button>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="rental-card">
            <img src={cart3} alt="villa" />

            <div className="rental-card-content">
              <h3>Azure Overwater Estate</h3>
              <p className="rental-price">$9,500 <span>/night</span></p>
              <button>Book Now</button>
            </div>
          </div>

        </div>
      </section>


     

    </div>
  );
};

export default Rental;