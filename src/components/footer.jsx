import React from "react";
import "./footer.css";
import logo1 from "../assets/header-icon.png";
import logo2 from "../assets/submit.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* COLUMN 1 */}
        <div className="footer-col">
          <h3>
            <img src={logo1} alt="logo" className="footer-logo" />
            {/* SR REALITY */}
          </h3>

          <p>
            Defining luxury real estate through <br />
            exceptional service, innovative marketing <br />
            and a global network of elite properties.
          </p>
        </div>

        {/* COLUMN 2 */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <p>Search Properties</p>
          <p>Our Services</p>
          <p>Privacy Policy</p>
        </div>

        {/* COLUMN 3 */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>90210 Beverly Hills, California, USA</p>
          <p>+1 (800) 999-0000</p>
          <p>concierge@aureumestates.com</p>
        </div>

        {/* COLUMN 4 */}
        <div className="footer-col">
          <h4>Newsletter</h4>

          {/* ✅ Added missing text */}
          <p className="newsletter-text">
            Subscribe to receive exclusive off-<br />
             market listing alerts.
          </p>

          {/* INPUT + BUTTON */}
          <div className="newsletter-box">
            <input type="text" placeholder="Your email address" />
            <button>
              <img src={logo2} className="footer-submit" alt="submit" />
            </button>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <span>
          © 2026 SR Reality Estates Luxury Group. All Rights Reserved
        </span>

        {/* ✅ Added right side links */}
        <div className="footer-links">
          <span>Terms of Use</span>
          <span>Sitemap</span>
          <span>Cookies</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;