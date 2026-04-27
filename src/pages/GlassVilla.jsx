import React from "react";
import "./GlassVilla.css";

import heroImg from "../assets/ContactElite-hero.png";
import visionImg from "../assets/GlassVilla-vision.png";

import spaImg from "../assets/GlassVilla-spa.png";
import kitchenImg from "../assets/GlassVilla-kitchen.png";
import libraryImg from "../assets/GlassVilla-library.png";
import cinemaImg from "../assets/GlassVilla-cinema.png";

import mat1 from "../assets/GlassVilla-material1.png";
import mat2 from "../assets/GlassVilla-material2.png";
import mat3 from "../assets/GlassVilla-material3.png";

import mapImg from "../assets/GlassVilla-map.png";
import profileImg from "../assets/GlassVilla-profile.png";

import { DraftingCompass } from "lucide-react";

const GlassVilla = () => {
  return (
    <div className="GlassVilla">

      {/* HERO */}
      <div className="GlassVilla-hero">
        <img src={heroImg} alt="" className="GlassVilla-hero-img" />

        <div className="GlassVilla-hero-overlay">
          < a href="/" className="GlassVilla-back-go"><span className="GlassVilla-back">Back</span></a>

          <p className="GlassVilla-subtitle">A LEGACY RESIDENCE</p>

          <h1 className="GlassVilla-title">The Glass Villa.</h1>

          <p className="GlassVilla-desc">
            An architectural masterpiece perched on the precipice of nature and<br/>
            modernism. Designed by Aris Vois, this structure redefines the<br/>
            boundary between sanctuary and landscape.
          </p>

          <div className="GlassVilla-hero-info">
            <span className="GlassVilla-price">$14,500,000</span>
            <span className="GlassVilla-location">Zurich, CH</span>
          </div>
        </div>
      </div>

      {/* VISION */}
      <div className="GlassVilla-vision">
        <div className="GlassVilla-vision-left">
          <img src={visionImg} alt="" />
        </div>

        <div className="GlassVilla-vision-right">
          <h2>
            The Vision: <span>Invisibility.</span>
          </h2>

          <p>
            Constructed primarily of low-iron optical glass and reinforced basalt,
            The Glass Villa was designed to vanish into its surroundings.
            The structure utilizes a cantilevered exoskeleton that eliminates
            the need for internal load-bearing walls.
            <br /><br />
            Every floor plate is polished obsidian, reflecting the sky and forest
            in a perpetual dialogue between the artificial and the organic.
          </p>

          {/* AUTHOR */}
          <div className="GlassVilla-author">
            <div className="GlassVilla-author-icon">
              <DraftingCompass size={26} />
            </div>

            <div>
              <h4>Aris Vois</h4>
              <span>LEAD ARCHITECT, 2023</span>
            </div>
          </div>

        </div>
      </div> {/* ✅ FIXED closing */}

      {/* AMENITIES */}
      <div className="GlassVilla-amenities">

        <span className="GlassVilla-Refined">Refined living</span>
        <h3>Curated Amenities</h3>

        <div className="GlassVilla-amenities-grid">

          <div className="GlassVilla-card large">
            <img src={spaImg} alt="" />
            <span>Infinity Thermal Spa</span>
          </div>

          <div className="GlassVilla-card">
            <img src={kitchenImg} alt="" />
            <span>Culinary Atelier</span>
          </div>

          <div className="GlassVilla-card">
            <img src={libraryImg} alt="" />
            <span>Obsidian Library</span>
          </div>

          <div className="GlassVilla-card">
            <img src={cinemaImg} alt="" />
            <span>Private Cinema</span>
          </div>

        </div>
      </div>

      {/* MATERIAL */}
      <div className="GlassVilla-material">
        <h2>
          A Symphony of<br/> Pure <span>Materiality.</span>
        </h2>


     <span className="GlassVilla-Curated">    Curated from global sources, every surface
in the villa is chosen for tactile resonance
and architectural permanence.</span> 



        <div className="GlassVilla-material-grid">
          <img src={mat1} alt="" />
          <img src={mat2} alt="" />
          <img src={mat3} alt="" />
        </div>
      </div>

      {/* INQUIRY */}
      <div className="GlassVilla-inquiry">

        {/* LEFT FORM */}
        <div className="GlassVilla-form">
          <h3>Begin Your Journey.</h3>





<div className="GlassVilla-profile-box">

  {/* LEFT IMAGE */}
  <div className="GlassVilla-profile">
    <img src={profileImg} alt="" />
  </div>

  {/* RIGHT TEXT */}
  <div className="GlassVilla-profile-text">
    <span className="GlassVilla-profile-name">Julian Vane</span>
    <span className="GlassVilla-profile-role">Global Portfolio Director</span>
  </div>

</div>





          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />

          <button>REQUEST DOSSIER</button>
        </div>

        {/* RIGHT MAP */}
        <div className="GlassVilla-map">
          <img src={mapImg} alt="" />
          <span>Confidential Location</span>
        </div>

      </div>

    </div>
  );
};

export default GlassVilla;