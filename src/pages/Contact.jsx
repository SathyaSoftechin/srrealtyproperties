import React from "react";
import "./Contact.css";


import mapImage from "../assets/Worldmap.png"; // 🔁 your world map image
import agent1 from "../assets/agent1.png";
import agent2 from "../assets/agent2.png";
import agent3 from "../assets/agent3.png";
import agent4 from "../assets/agent4.png";
import location from "../assets/location.png";
import { FaGlobe } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-page">

      {/* TOP SECTION */}
      <section className="contact-hero">
        <div className="container contact-container">

          {/* LEFT SIDE */}
          <div className="contact-left">
            <span className="contact-tag">
               <FaGlobe className="contact-tag-icon" />GLOBAL NETWORK</span>

            <h1>
              Experience the Gold Standard.
            </h1>

            <p>
              Whether you are seeking a penthouse in Manhattan or a
              villa in Dubai, our global specialists are ready to assist
              you in your next acquisition.
            </p>

            <div className="contact-stats">
              <div>
                <h3>24/7</h3>
                <p>CONCIERGE SUPPORT</p>
              </div>

              <div>
                <h3>15+</h3>
                <p>GLOBAL OFFICES</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="contact-form-box">
            <form>

              <div className="row">
                <div className="input-group">
                  <label>First Name</label>
                  <input type="text" placeholder="John" />
                </div>

                <div className="input-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Doe" />
                </div>
              </div>

              <div className="input-group">
                <label>Email Address</label>
                <input type="email" placeholder="j.doe@example.com" />
              </div>

              <div className="input-group">
                <label>Property Interest</label>
                <select>
                  <option>Residential Acquisition</option>
                  <option>Commercial</option>
                  <option>Investment</option>
                </select>
              </div>

              <div className="input-group">
                <label>Message</label>
                <textarea placeholder="How can we assist you today?" />
              </div>

              <button className="submit-btn">SUBMIT INQUIRY</button>

            </form>
          </div>

        </div>
      </section>

      {/* GLOBAL PRESENCE */}
      <section className="contact-global-section">
        <h2>Our Global Presence</h2>
        <p>
          Strategic hubs in the world’s most prestigious markets, providing
          local expertise with a global perspective.
        </p>

        <div className="global-cards">








       

  <div className="card-location">
    <div className="card-title">
     <img src={location} className="cont-location" alt="location" />
      <h3>New York</h3>
    </div>
    <p>
      725 Fifth Avenue,<br />
      New York, NY 10022,<br />
      United States
    </p>
    <span>+1 (212) 555-0198 →</span>
  </div>

  <div className="card-location">
    <div className="card-title">
      <img src={location} className="cont-location" alt="location" />
      <h3>London</h3>
    </div>
    <p>
      15 Berkeley Square,<br />
      Mayfair, London W1J 6AS<br />
      United Kingdom
    </p>
    <span>+44 20 7946 0123 →</span>
  </div>

  <div className="card-location">
    <div className="card-title">
      <img src={location} className="cont-location" alt="location" />
      <h3>Dubai</h3>
    </div>
    <p>
      Burj Damac, Level 14,<br />
      DIFC, Dubai<br />
      United Arab Emirates
    </p>
    <span>+971 4 321 0987 →</span>
  </div>

</div>






 {/* <section className="specialist-section"> */}

      <div className="top">
        <div>
          <h2>Talk to a Specialist</h2>
          <p>
            Our directors are available for private consultations regarding your real estate portfolio.
          </p>
        </div>

        <button className="view-btn">View All Agents</button>
      </div>

      <div className="agents">

        <div className="agent-card">
          <img src={agent1} alt="agent" />
          <h4>Alexander Sterling</h4>
          <p className="role">Senior Managing Director, NY</p>
          <div className="icons">✉️ 📞 🔗</div>
        </div>

        <div className="agent-card">
          <img src={agent2} alt="agent" />
          <h4>Elena Von Berg</h4>
          <p className="role">Head of European Markets</p>
          <div className="icons">✉️ 📞 🔗</div>
        </div>

        <div className="agent-card">
          <img src={agent3} alt="agent" />
          <h4>Marcus Thorne</h4>
          <p className="role">Director of Private Sales</p>
          <div className="icons">✉️ 📞 🔗</div>
        </div>

        <div className="agent-card">
          <img src={agent4} alt="agent" />
          <h4>Sophia Al-Fayed</h4>
          <p className="role">Middle East Partner</p>
          <div className="icons">✉️ 📞 🔗</div>
        </div>

      </div>

        
    </section>


      {/* MAP SECTION */}
      <section className="map-section">
        <img src={mapImage} alt="world map" className="map-img" />

        <div className="location ny"></div>
        <div className="location uk"></div>
        <div className="location dubai"></div>
      </section>



    </div>
  );
};

export default Contact;