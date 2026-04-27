import React from "react";
import "./Eliterental.css";
import hero from "../assets/Eliterantal-hero.png";
import villa1 from "../assets/Eliterantal-villa1.png";
import villa2 from "../assets/Eliterantal-villa2.png";
import villa3 from "../assets/Eliterantal-villa3.png";

import summer from "../assets/Eliterantal-summer.png";
import winter from "../assets/Eliterantal-winter.png";
import city from "../assets/Eliterantal-city.png";
import { FiMapPin, FiCalendar, FiUsers, FiSearch } from "react-icons/fi";
import { Plane, Sailboat, User } from "lucide-react";
const RentalPage = () => {
  return (
    <div className="Eliterental">

      {/* HERO */}
      <div className="Eliterental-hero">
        <img src={hero} alt="hero" />

        <div className="Eliterental-overlay">
          <h1>
            Experience the <span>Unrivaled</span>
          </h1>
          <p>
            Curated luxury rentals for the world's most discerning travelers
          </p>

  <div className="Eliterental-search">

  <div className="Eliterental-search-item">
    <FiMapPin className="Eliterental-icon" />
    <span>Destination</span>
  </div>

  <div className="Eliterental-search-item">
    <FiCalendar className="Eliterental-icon" />
    <span>Dates</span>
  </div>

  <div className="Eliterental-search-item">
    <FiUsers className="Eliterental-icon" />
    <span>Guests</span>
  </div>

  <button className="Eliterental-search-btn">
    <FiSearch className="Eliterental-search-icon" />
    Search
  </button>

</div>
        </div>
      </div>

      {/* FEATURED */}
      <div className="Eliterental-featured">
        <div className="Eliterental-header">
          <div>
            <span>EXCLUSIVE LISTINGS</span>
            <h2>Featured Estates</h2>
          </div>
          <p>View All Properties →</p>
        </div>

        <div className="Eliterental-cards">
          <div className="Eliterental-card">
            <img src={villa1} alt="" />
            <div className="Eliterental-card-content">
              <h3>Villa Celeste, Amalfi</h3>
              <p>$4,500 / night</p>
              <a href="/bookstay"><button>Book Now →</button></a>
            </div>
          </div>

          <div className="Eliterental-card">
            <img src={villa2} alt="" />
            <div className="Eliterental-card-content">
              <h3>Azure Sands, Maldives</h3>
              <p>$6,200 / night</p>
            <a href="/bookstay"> <button>Book Now →</button></a> 
            </div>
          </div>

          <div className="Eliterental-card">
            <img src={villa3} alt="villas" />
            <div className="Eliterental-card-content">
              <h3>Palazzo Oro, Tuscany</h3>
              <p>$3,800 / night</p>
            <a href="/bookstay">  <button>Book Now →</button></a>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div className="Eliterental-services">
        <span>BEYOND BOUNDARIES</span>
        <h2>Bespoke Concierge Services</h2>
        <p>
          We handle every detail of your journey, ensuring your experience transcends the ordinary.
        </p>

      




          <div className="Eliterental-service">
  <Plane size={40} color="#d4af37" />
  <h3>Private Jet</h3>
  <p>
    Charter luxury aircraft to any destination worldwide with VIP treatment and absolute privacy.
  </p>
</div>

<div className="Eliterental-service">
  <Sailboat size={40} color="#d4af37" />
  <h3>Yacht Charters</h3>
  <p>
    Explore the pristine waters of the Mediterranean or Caribbean on our curated fleet of luxury yachts.
  </p>
</div>

<div className="Eliterental-service">
  <User size={40} color="#d4af37" />
  <h3>Private Butler</h3>
  <p>
    Dedicated professional staff available around the clock to cater to your every need and whim.
  </p>
</div>







      {/* COLLECTIONS */}
      <div className="Eliterental-collections">
        <h2>Seasonal Collections</h2>

        <div className="Eliterental-collection-cards">
         <a href="/summer"> <div className="Eliterental-collection">
            <img src={summer} alt="" />
            <div>
              <h3>Summer Retreats</h3>
              <p>Sun-drenched paradises</p>
            </div>
          </div></a>

          <div className="Eliterental-collection">
            <img src={winter} alt="" />
            <div>
              <h3>Winter Escapes</h3>
              <p>Alpine luxury & snow</p>
            </div>
          </div>

          <div className="Eliterental-collection">
            <img src={city} alt="" />
            <div>
              <h3>Urban Penthouse</h3>
              <p>Metropolitan skyline living</p>
            </div>
          </div>
        </div>
      </div>

    </div>
    </div>


  );
};

export default RentalPage;