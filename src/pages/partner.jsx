import React from "react";
import "./partner.css";

import heroImg from "../assets/partner-hero.png";
import joinImg from "../assets/join.png";
import user1 from "../assets/part-id1.png";
import user2 from "../assets/part-id2.png";
import icon1 from "../assets/part-logo1.png";
import icon2 from "../assets/part-logo2.png";
import icon3 from "../assets/part-logo3.png";
import check from "../assets/check.png";

const Partner = () => {
  return (
    <div className="partner-page">

      {/* HERO */}
      <section className="partner-hero">
        <img src={heroImg} alt="hero" />
        <div className="partner-overlay"></div>

        <div className="partner-hero-content">
          <span className="partner-tag">PARTNERSHIP OPPORTUNITY</span>

          <h1>
            Elevate Your Reach <br />
            to a <span>Global Scale</span>
          </h1>

          <p className="partner-par">
            Join an exclusive network of elite developers and luxury agents.
            Leverage our prestige to transform your high-end real estate portfolio.
          </p>

          <div className="partner-hero-buttons">
          <a href="/applynow"><button className="partner-btn partner-gold">Apply Now</button></a>
            
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="partner-why">
        <div className="partner-container">

          <div className="partner-why-header">
            <div>
              <span className="partner-small">WHY PARTNER WITH US</span>
              <h2>Unparalleled Advantages for Elite Professionals</h2>
            </div>

            <p>
              Unlock exclusive access to high-net-worth investors and bespoke
              marketing strategies tailored for the ultra-luxury segment.
            </p>
          </div>

          <div className="partner-cards">

            <div className="partner-card">
              <div className="partner-icon1">
                <img src={icon1} alt="icon" />
              </div>
              <h3>Global Exposure</h3>
              <p>Connect with high-net-worth individuals across 50+ countries.</p>
            </div>

            <div className="partner-card">
              <div className="partner-icon2">
                <img src={icon2} alt="icon" />
              </div>
              <h3>Exclusive Marketing</h3>
              <p>Featured in premium publications with priority placements.</p>
            </div>

            <div className="partner-card">
              <div className="partner-icon3">
                <img src={icon3} alt="icon" />
              </div>
              <h3>Prestige Branding</h3>
              <p>Leverage brand credibility for luxury developments.</p>
            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="partner-testimonials">
        <h2>Heard from our Partners</h2>

        <div className="partner-testimonial-cards">

          <div className="partner-testimonial">
            <p>
            "Partnering with Aureum Estates transformed our
boutique agency's trajectory. Their global
network gave us access to buyers we simply
couldn't reach before."
            </p>

            <div className="partner-user">
              <img src={user1} alt="user" className="partner-logo1"/>
              <div>
                <h4>Julian Vane</h4>
                <span>Director, Luxury Group</span>
              </div>
            </div>
          </div>

          <div className="partner-testimonial">
            <p>
              "The marketing reach is unmatched. Our latest
coastal development sold 60% of units off-plan
within weeks of the Aureum launch event."
            </p>

            <div className="partner-user">
              <img src={user2} alt="user" className="partner-logo2"/>
              <div>
                <h4>Elena Rodriguez</h4>
                <span>CEO, Developments</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FORM */}
      <section className="partner-form">
        <div className="partner-container partner-form-container">

          


         
          {/* LEFT */}
          <div className="partner-left">
            <h2>Begin Your Journey</h2>

            <p>
              We are selective in partnerships.<br />
              the form and<br />
              well contact in 48 hours.
            </p>

            <ul className="partner-journey-list">
              <li>
                <img src={check} className="partner-check" alt="check" />
                <div>
                  <h4>Initial Review</h4>
                  <p>We analyze your portfolio for brand alignment.</p>
                </div>
              </li>

              <li>
                <img src={check} className="partner-check" alt="check" />
                <div>
                  <h4>Strategy Consultation</h4>
                  <p>A one-on-one session to map out growth targets.</p>
                </div>
              </li>

              <li>
                <img src={check} className="partner-check" alt="check" />
                <div>
                  <h4>Network Activation</h4>
                  <p>Seamless integration into our global systems.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* RIGHT (FORM) */}
          <div className="partner-right">
            <form>

              <div className="partner-row">
                <div>
                  <label>First Name</label>
                  <input type="text" />
                </div>

                <div>
                  <label>Last Name</label>
                  <input type="text" />
                </div>
              </div>

              <div>
                <label>Company Email</label>
                <input type="email" />
              </div>

              <div>
                <label>Profession</label>
                <select>
                  <option>Developer</option>
                </select>
              </div>

              <div>
                <label>Message/Portfolio Link</label>
                <textarea placeholder="Message / Portfolio Link"></textarea>
              </div>

              <button className="partner-btn partner-gold partner-full">
                Submit Inquiry
              </button>

            </form>
          </div>
</div>

</section>

      {/* JOIN */}
      <section className="partner-join-network">
        <img src={joinImg} alt="join" />
        <div className="partner-overlay"></div>

        <div className="partner-join-content">
          <h2>Join our Network</h2>

          <p>
            Don’t just compete in the market. Define it. Become an aureum states
            <br /> partner today.
          </p>

         <a href="/getstarted"> <button className="partner-btn partner-gold">Get Started</button></a>
        </div>
      </section>

    </div>
  );
};

export default Partner;