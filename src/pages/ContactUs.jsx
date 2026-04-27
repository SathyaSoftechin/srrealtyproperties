import React from "react";
import "./ContactUs.css";
import { FaWhatsapp, FaCalendarAlt, FaHeadset, FaArrowRight } from "react-icons/fa";

import worldMap from "../assets/ContactUs-map.png"; // <-- add your image here

const ContactUs = () => {
  return (
    <div className="contactus-container">
      {/* HEADER */}
      <div className="contactus-header">
        <h1>Get in Touch</h1>
        <p>
          Personalized consultations for the world's most discerning investors.
          Our advisors are ready to assist with your portfolio requirements.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="contactus-content">
        
        {/* LEFT - FORM */}
        <div className="contactus-form">
          <div className="contactus-row">
            <div className="contactus-input-group">
              <label>Full Name</label>
              <input type="text" placeholder="Alexander Thorne" />
            </div>

            <div className="contactus-input-group">
              <label>Email Address</label>
              <input type="email" placeholder="a.thorne@example.com" />
            </div>
          </div>

          <div className="contactus-input-group">
            <label>Subject</label>
            <select>
              <option>Investment Inquiry</option>
              <option>Partnership</option>
              <option>Support</option>
            </select>
          </div>

          <div className="contactus-input-group">
            <label>Message</label>
            <textarea placeholder="Tell us about your investment goals..."></textarea>
          </div>

          <button className="contactus-btn">
            Send Message <FaArrowRight />
          </button>

          <p className="contactus-secure">
            🔒 END-TO-END ENCRYPTED COMMUNICATION
          </p>
        </div>

        {/* RIGHT - QUICK CONNECT */}
        <div className="contactus-right">
  <h3>Quick Connect</h3>

  {/* CARD 1 */}
  <div className="contactus-card">
    <div className="contactus-card-left">
      <div className="contactus-icon-wrapper">
        <FaWhatsapp />
      </div>
      <div>
        <h4>WhatsApp Business</h4>
        <p>Instant response from our team</p>
      </div>
    </div>
    <FaArrowRight className="contactus-arrow" />
  </div>

  {/* CARD 2 */}
  <div className="contactus-card">
    <div className="contactus-card-left">
      <div className="contactus-icon-wrapper">
        <FaCalendarAlt />
      </div>
      <div>
        <h4>Private Briefing</h4>
        <p>Schedule a 1-on-1 consultation</p>
      </div>
    </div>
    <FaArrowRight className="contactus-arrow" />
  </div>

  {/* CARD 3 */}
  <div className="contactus-card">
    <div className="contactus-card-left">
      <div className="contactus-icon-wrapper">
        <FaHeadset />
      </div>
      <div>
        <h4>24/7 Global Concierge</h4>
        <p>Dedicated support for members</p>
      </div>
    </div>
    <FaArrowRight className="contactus-arrow" />
  </div>

  {/* MAP CARD */}
  <div className="contactus-map">
    <img src={worldMap} alt="world map" />

    <div className="contactus-map-overlay"></div>

    <div className="contactus-map-text">
      <span>WORLDWIDE PRESENCE</span>
      <h4>Connecting Elite Assets Locally</h4>
    </div>
  </div>










        </div>
      </div>
    </div>
  );
};

export default ContactUs;