import React from "react";
import "./Get-started.css";

import heroImg from "../assets/Getstarted-hero.png";
import card1 from "../assets/Getstarted-card1.png";
import card2 from "../assets/Getstarted-card2.png";
import card3 from "../assets/Getstarted-card3.png";

import { FaCheckCircle, FaUserTie, FaGlobe } from "react-icons/fa";


const GetStarted = () => {
  return (
    <div className="getstarted-page">

      {/* HERO SECTION */}
      <section className="gs-hero">
        <img src={heroImg} alt="hero" className="gs-hero-img" />

        <div className="gs-overlay">
          <p className="gs-subtitle">PRESTIGE REAL ESTATE</p>
          <h1>Begin Your Journey</h1>
          <p className="gs-desc">
            Experience the pinnacle of luxury living with bespoke services
            tailored to your elite lifestyle and investment goals.
          </p>
        </div>
      </section>

    






{/* CARDS SECTION */}
<section className="gets-gs-cards gets-container">

  {/* CARD 1 */}
  <div className="gets-gs-card">
    <img src={card1} alt="invest" />
    <div className="gets-gs-card-content">
      <h3>Invest & Buy</h3>
      <p>
        Curated portfolio of exclusive high-yield residential and commercial properties globally.
      </p>
     <a href="/browse"><button>Browse Assets →</button></a>
    </div>
  </div>

  {/* CARD 2 */}
  <div className="gets-gs-card">
    <img src={card2} alt="rentals" />
    <div className="gets-gs-card-content">
      <h3>Luxury Rentals</h3>
      <p>
        Short-term sanctuaries and long-term estates for the most discerning international travelers.
      </p>
     <a href="/rental"><button>View Rentals →</button></a> 
    </div>
  </div>

  {/* CARD 3 */}
  <div className="gets-gs-card">
    <img src={card3} alt="partner" />
    <div className="gets-gs-card-content">
      <h3>Partner with Us</h3>
      <p>
        Collaborate with our network of developers, agents, and wealth management firms.
      </p>
      <a href="/applynow"><button>Apply Now →</button></a>
    </div>
  </div>

</section>







{/* FEATURES SECTION */}
<section className="gets-gs-features gets-container">

  <div className="gets-gs-feature">
    <div className="gets-icon">
      <FaCheckCircle />
    </div>
    <h4>Verified Listings</h4>
    <p>Every property undergoes a rigorous 50-point inspection and legal vetting.</p>
  </div>

  <div className="gets-gs-feature">
    <div className="gets-icon">
      <FaUserTie />
    </div>
    <h4>Private Consultations</h4>
    <p>Dedicated concierge managers available for 1-on-1 private advisory sessions.</p>
  </div>

  <div className="gets-gs-feature">
    <div className="gets-icon">
      <FaGlobe />
    </div>
    <h4>Global Reach</h4>
    <p>Direct access to off-market opportunities in over 45 luxury destinations.</p>
  </div>

</section>

</div>
);
};

export default GetStarted;