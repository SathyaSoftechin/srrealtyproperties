import React from "react";
import "./Home.css";
import SearchBar from "../components/SearchBar";
import homeImage from "../assets/home-img.png";
import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";

import cart1 from "../assets/cart1.png";
import cart2 from "../assets/cart2.png";
import cart3 from "../assets/cart3.png";
import cart4 from "../assets/cart4.png";
import interior from "../assets/interior.png";

import id1 from "../assets/Id1.png";
import id2 from "../assets/Id2.png";
import id3 from "../assets/Id3.png";
import Id from "../assets/Id.png";
import { FaCheckCircle, FaGlobe, FaHeadset } from "react-icons/fa";
 import { useNavigate, useLocation } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>

      <section className="hero">
        <img src={homeImage} alt="homeImage" className="hero-bg" />

        <div className="hero-overlay">

            <h1 className="dream">
             Find Your Dream  </h1>
             <h1 className="luxury">
             Luxury Property 
            </h1>

          <p>
            Discover an exclusive collection of high-end residences, from
            coastal villas to<br/> urban penthouses, curated for the most discerning buyers.
          </p>
              <SearchBar />

          </div>
      </section>

         

      {/* STATS */}
      <section className="stats">
        <div className="container stats-container">
          <div>


           


            <h2>1,200+</h2>
            <p>Properties Sold</p>
          </div>
          <div>
            <h2>950+</h2>
            <p>Happy Clients</p>
          </div>
          <div>
            <h2>45+</h2>
            <p>Trusted Agents</p>
          </div>
          <div>
            <h2>12+</h2>
            <p>Design Awards</p>
          </div>
        </div>
      </section>






<section className="home-featured">
  <div className="home-container">

    {/* TOP HEADER */}
    <div className="home-featured-header">
      <div>
        <p className="home-sub-title">CURATED SELECTION</p>
        <h2>Featured Listings</h2>
      </div>

      <button  onClick={()=>navigate("/browseexclusive")} className="home-view-btn">
        VIEW ALL PROPERTIES →
      </button>
    </div>

    {/* CARDS */}
    <div className="home-card-grid">

      {/* CARD 1 */}
      <a href="/glassvilla" className="home-card-text" ><div className="home-card">
        <div className="home-card-img">
          <img src={img1} alt="property" />

          <div className="home-badge-group">
            <span className="home-badge home-yellow">FEATURED</span>
            <span className="home-badge home-dark">FOR SALE</span>
          </div>

          <div className="home-heart">♡</div>
        </div>

        <div className="home-card-content">
          <h3>The Glass Pavilion</h3>
          <p className="home-location">📍 Malibu, California</p>

          <div className="home-details">
            <span>🛏 6 Beds</span>
            <span>🛁 8 Baths</span>
            <span>📐 8,200 sqft</span>
          </div>

          <h4 className="home-price">$12,500,000</h4>
        </div>
      </div></a>

      {/* CARD 2 */}
     <a href="/glassvilla" className="home-card-text" > <div className="home-card">
        <div className="home-card-img">
          <img src={img2} alt="property" />

          <div className="home-badge-group">
            <span className="home-badge home-blue">NEW LISTING</span>
          </div>
        </div>

        <div className="home-card-content">
          <h3>Azure Bay Estate</h3>
          <p className="home-location">📍 Miami Beach, Florida</p>

          <div className="home-details">
            <span>🛏 5 Beds</span>
            <span>🛁 7 Baths</span>
            <span>📐 6,500 sqft</span>
          </div>

          <h4 className="home-price">$8,900,000</h4>
        </div>
      </div></a>

      {/* CARD 3 */}
     <a href="/glassvilla" className="home-card-text" > <div className="home-card">
        <div className="home-card-img">
          <img src={img3} alt="property" />

          <div className="home-badge-group">
            <span className="home-badge home-yellow">RESORT</span>
          </div>
        </div>

        <div className="home-card-content">
          <h3>Beachfront Villa</h3>
          <p className="home-location">📍 Malibu, CA</p>

          <div className="home-details">
            <span>🛏 5 Beds</span>
            <span>🛁 5 Baths</span>
            <span>📐 5,000 sqft</span>
          </div>

          <h4 className="home-price">$22,500,000</h4>
        </div>
      </div></a>

    </div>
  </div>
</section>







         <section className="home-categories-section">
      <div className="home-container">

        {/* TOP */}
        <div className="home-categories-header">
          <p>EXPLORE COLLECTIONS</p>
          <h2>Property Categories</h2>
        </div>

        {/* CATEGORY CARDS */}
        <div className="home-categories-grid">

         <div className="home-category-card">
            <img src={cart1} alt="" />
            <div className="home-overlay">
              <h3>Modern Villas</h3>
              <span>124 Properties</span>
            </div>
          </div>
<div className="home-category-card">
            <img src={cart2} alt="" />
            <div className="home-overlay">
              <h3>Penthouses</h3>
              <span>86 Properties</span>
            </div>
          </div>

          <div className="home-category-card">
            <img src={cart3} alt="" />
            <div className="home-overlay">
              <h3>Beach Houses</h3>
              <span>52 Properties</span>
            </div>
          </div>

       <div className="home-category-card">
            <img src={cart4} alt="" />
            <div className="home-overlay">
              <h3>Nature Retreats</h3>
              <span>38 Properties</span>
            </div>
          </div>

        </div>

        {/* SECOND SECTION */}
        <div className="home-advantage-section">

          {/* LEFT */}
          <div className="home-adv-left">
            <p className="home-tag">OUR ADVANTAGE</p>
            <h2>Exceptional Service for Exclusive Properties</h2>
            <p className="home-desc">
              We redefine the luxury real estate experience through our unwavering
              commitment to personalized service, global reach, and unparalleled
              market expertise.
            </p>

            {/* FEATURES */}
<div className="home-feature-box">
  <h4><FaCheckCircle /> Verified Premium Listings</h4>
  <p>Every property undergoes strict verification.</p>
</div>

<div className="home-feature-box">
  <h4><FaGlobe /> Global Network Reach</h4>
  <p>Connect with elite buyers worldwide.</p>
</div>

<div className="home-feature-box">
  <h4><FaHeadset /> 24/7 Concierge Support</h4>
  <p>Round-the-clock assistance anytime.</p>
</div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="adv-right">
            <img src={interior} alt="" />

            <div className="profile-card">
              <div className="profile-info">
              <img src={Id} alt="idlogo" />
                <div>
                  <h5>Julian Sterling</h5>
                  <span>Senior Advisor</span>
                </div>
              </div>
              <p>
                "Our mission is to find not just a house, but a legacy for your family."
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
              



      {/* ===== TESTIMONIALS ===== */}
<section className="testimonials">
  <p className="section-subtitle">TESTIMONIALS</p>
  <h2 className="section-title">What Our Clients Say</h2>

  <div className="testimonial-cards">
    {/* CARD 1 */}
    <div className="testimonial-card">
      <div className="stars">★★★★★</div>
      <p>
        "Aureum Estates provided a seamless experience from start to finish.
        Their attention to detail and market knowledge truly unparalleled in the luxury sector."
      </p>
      <div className="client">
        <img src={id1} alt="idlogo" />
        <div>
          <h4>David Chen</h4>
          <span>CEO, Tech Innovations</span>
        </div>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="testimonial-card">
      <div className="stars">★★★★★</div>
      <p>
        "They don't just sell properties; they understand lifestyle. We found our absolute dream coastal home within weeks."
      </p>
      <div className="client">
        <img src={id2} alt="" />
        <div>
          <h4>Isabella Rossi</h4>
          <span>Art Curator</span>
        </div>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="testimonial-card">
      <div className="stars">★★★★★</div>
      <p>
        "Discretion and professionalism were my top priorities. The team delivered on both fronts."
      </p>
      <div className="client">
        <img src={id3} alt="" />
        <div>
          <h4>Robert Sterling</h4>
          <span>Investor</span>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ===== CTA SECTION ===== */}
<section className="home-cta">
  <div className="cta-content">
    <h2>Ready to Find Your Dream Home?</h2>
    <p>
      Join our exclusive circle of homeowners and gain access to off-market<br/>
      listings and premium real estate insights.
    </p>

    <div className="home-cta-buttons">
      <a href="/browseexclusive"><button className="home-primary-btn">Browse Properties</button></a>
      <a href="/contactelite"><button className="home-secondary-btn">Contact an Agent</button></a>
    </div>
  </div>

</section>

    </>
      

  );
};

export default Home;