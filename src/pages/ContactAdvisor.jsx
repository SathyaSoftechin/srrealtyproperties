import React from "react";
import "./ContactAdvisor.css";
import { FaGlobe, FaShieldAlt } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { RiArrowRightLine } from "react-icons/ri";
import { FaCompass } from "react-icons/fa";
const ContactAdvisor = () => {
  return (
    <div className="ContactAdvisor-container">
      
      {/* LEFT SECTION */}
      <div className="ContactAdvisor-left">
        <p className="ContactAdvisor-tag">DIRECT OUTREACH</p>

        <h1 className="ContactAdvisor-title">
          Contact an <span>Advisor</span>
        </h1>

        <p className="ContactAdvisor-desc">
          Bespoke guidance for the world's most discerning investors.
          Secure, confidential, and direct access to our global partnership network.
        </p>

        {/* LOCATIONS */}
        <div className="ContactAdvisor-locations">
          <div>
            <h4>NEW YORK</h4>
            <p>725 Fifth Avenue</p>
            <span>+1 (212) 555-0198</span>
          </div>
          <div>
            <h4>LONDON</h4>
            <p>1 Berkeley Square</p>
            <span>+44 20 7946 0101</span>
          </div>
          <div>
            <h4>DUBAI</h4>
            <p>Burj Daman, DIFC</p>
            <span>+971 4 321 0000</span>
          </div>
        </div>

        {/* PRIORITY BOX */}
        <div className="ContactAdvisor-priority">
          <FaShieldAlt className="ContactAdvisor-icon" />
          <div>
            <h3>High-Value Investor Priority</h3>
            <p>
              Guaranteed response within 2 hours from our<br/> senior partners.
              Direct encrypted channel.
            </p>
          
         




           <div className="ContactAdvisor-toggle">
             <input type="checkbox" id="prioritySwitch" />
            <label htmlFor="prioritySwitch"></label>
                   </div>


</div>



        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="ContactAdvisor-form">
        <h2>Inquiry Details</h2>

        <div className="ContactAdvisor-row">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
        </div>

        <select className="ContactAdvisor-select">
          <option>Private Island Acquisitions</option>
        </select>

        {/* INVESTMENT BUTTONS */}
        <div className="ContactAdvisor-invest">
          <button>$10M+</button>
          <button className="active">$50M+</button>
          <button>$100M+</button>
        </div>

        <textarea placeholder="Briefly describe your requirements..."></textarea>

        <button className="ContactAdvisor-submit">
          Secure Submission <RiArrowRightLine />
        </button>

        <p className="ContactAdvisor-secure">
          <IoMdLock /> END-TO-END ENCRYPTED COMMUNICATION
        </p>
      </div>

      {/* BOTTOM CARDS */}
      <div className="ContactAdvisor-cards">
        <div className="ContactAdvisor-card">
          <FaGlobe />
          <h3>Global Reach</h3>
          <p>Exclusive listings in 40+ countries and private jurisdictions.</p>
        </div>

        <div className="ContactAdvisor-card">
          <FaShieldAlt />
          <h3>Discretion First</h3>
          <p>Our advisors operate under strict non-disclosure frameworks.</p>
        </div>

       <div className="ContactAdvisor-card">
  <FaCompass />
  <h3>Tailored Strategy</h3>
  <p>We don't just find property; we build long-term asset strategies.</p>
</div>
      </div>
    </div>
  );
};

export default ContactAdvisor;