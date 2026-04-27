import React, { useState } from "react";
import "./summer.css";

import hero from "../assets/summer-hero.png";
import card1 from "../assets/summer-villa1.png";
import card2 from "../assets/summer-villa2.png";
import card3 from "../assets/summer-villa3.png";
import card4 from "../assets/summer-villa4.png";

import winter from "../assets/summer-winter.png";
import urban from "../assets/summer-urban.png";

import { FaBed } from "react-icons/fa";
import { MdPool } from "react-icons/md";
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiChefToque } from "react-icons/gi";
import { WiSunset } from "react-icons/wi";
import { GiWineBottle } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { MdSpa } from "react-icons/md";

const SummerRetreats = () => {

  const [active, setActive] = useState("All Retreats"); // ✅ added

  return (
    <div className="summer">

      {/* HERO */}
      <div className="summer-hero">
        <img src={hero} alt="hero" />
        <div className="summer-hero-content">
          <span>SUMMER 2024</span>
          <h1>The Summer<br/> Collection</h1>
          <p>
            Curated retreats from the Amalfi Coast to the private<br/> atolls of the Maldives.
          </p>
          <button>Explore the Map</button>
        </div>
      </div>

      {/* FILTERS */}
      <div className="summer-filters">
        <button
          className={active === "All Retreats" ? "active" : ""}
          onClick={() => setActive("All Retreats")}
        >
          All Retreats
        </button>

        <button
          className={active === "Coastal Villas" ? "active" : ""}
          onClick={() => setActive("Coastal Villas")}
        >
          Coastal Villas
        </button>

        <button
          className={active === "Private Islands" ? "active" : ""}
          onClick={() => setActive("Private Islands")}
        >
          Private Islands
        </button>

        <button
          className={active === "Beach Houses" ? "active" : ""}
          onClick={() => setActive("Beach Houses")}
        >
          Beach Houses
        </button>

        <button
          className={active === "Yacht Charters" ? "active" : ""}
          onClick={() => setActive("Yacht Charters")}
        >
          Yacht Charters
        </button>
      </div>

    
  



      {/* CARDS */}
      <div className="summer-cards">

        <a href="/villaazure"><div className="summer-card">
          <img src={card1} alt="" />
          <div className="summer-card-content">
            <h3>Villa Azure, Amalfi Coast</h3>
            <p className="summer-card-price">$2,500 / night</p>



<span>
  <FaBed className="summer-card-icon" /> 5 Beds
</span><br/>

<span>
  <MdPool className="summer-card-icon" /> Infinity Pool
</span>



          </div>
        </div></a>

        <div className="summer-card">
          <img src={card2} alt="" />
          <div className="summer-card-content">
            <h3>Serenity Isle, Maldives</h3>
            <p className="summer-card-price">$8,000 / night</p>



<span>
  <FaUmbrellaBeach  className="summer-card-icon" /> Private Beach
</span><br/>

<span>
  <GiChefToque  className="summer-card-icon" /> Chef Included
</span>




          </div>
        </div>

        <div className="summer-card">
          <img src={card3} alt="" />
          <div className="summer-card-content">
            <h3>The Glass House, Mykonos</h3>
            <p className="summer-card-price">$3,200 / night</p>




<span>
  <WiSunset  className="summer-card-icon" /> Sunset Deck
</span><br/>

<span>
  <GiWineBottle  className="summer-card-icon" /> Cellar
</span>



          </div>
        </div>

        <div className="summer-card">
          <img src={card4} alt="" />
          <div className="summer-card-content">
            <h3>Golden Sands, St. Tropez</h3>
            <p className="summer-card-price">$5,500 / night</p>



<span>
  <FaUsers className="summer-card-icon" /> Sleeps 12
</span><br/>

<span>
  <MdSpa  className="summer-card-icon" /> Private Spa
</span>




            
          </div>
        </div>

      </div>

      {/* DISCOVER */}
      <div className="summer-discover">
        <h2>Discover More Collections</h2>

        <div className="summer-discover-grid">

          <div className="summer-discover-card">
            <img src={winter} alt="" />
            <div className="summer-overlay">
              <h3>Winter Escapes</h3>
              <p>Cozy mountain chalets and alpine luxury</p>
              <span>Browse Collection →</span>
            </div>
          </div>

          <div className="summer-discover-card">
            <img src={urban} alt="" />
            <div className="summer-overlay">
              <h3>Urban Luxury</h3>
              <p>Penthouses and boutique city living</p>
              <span>Browse Collection →</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default SummerRetreats;