import React, { useState } from "react";
import "./SpeakAdvisor.css";

import {
  FaRegCalendarAlt,
  FaRegClock,
  FaStar
} from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";   // money note
import { FaBuilding } from "react-icons/fa";        // building
import { HiOutlineKey } from "react-icons/hi";      // key (reuse)

import { BsGraphUp } from "react-icons/bs";        // ✅ FIXED
import { MdOutlineWorkOutline } from "react-icons/md"; // ✅ FIXED
import { HiOutlineEyeOff } from "react-icons/hi";
import { FaSearchDollar, FaGavel } from "react-icons/fa";

import advisorImg from "../assets/SpeakAdvisor-advisor.png";
import profileImg from "../assets/SpeakAdvisor-profile.png";

const SpeakAdvisor = () => {

  const [currentDate, setCurrentDate] = useState(new Date());

  // ✅ FIX (this was missing)
  const [selectedTime, setSelectedTime] = useState("11:30 AM");

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonthDays = new Date(year, month, 0).getDate();

  const dates = [];

  for (let i = firstDay - 1; i >= 0; i--) {
    dates.push(prevMonthDays - i);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    dates.push(i);
  }

  while (dates.length % 7 !== 0) {
    dates.push(dates.length);
  }

  const changeMonth = (dir) => {
    setCurrentDate(new Date(year, month + dir, 1));
  };

  const monthName = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="speak-advisor-container">

      {/* LEFT SECTION */}
      <div className="speak-advisor-left">

        <span className="speak-advisor-tag">ELITE ADVISORY</span>

        <h1>
          Speak to an <br />
          <span>Advisor</span>
        </h1>

        <p>
          Gain exclusive access to the world's most prestigious off-market
          listings and bespoke portfolio management.
        </p>

        {/* STEP 1 */}
        <div className="speak-advisor-section">
          <h3>1. Select Specialization</h3>




<div className="speak-advisor-cards">
  <div className="speak-advisor-card active">
    <FaMoneyBillWave />
    <h4>Investment Strategy</h4>
    <p>Capital growth focus</p>
  </div>

  <div className="speak-advisor-card">
    <FaBuilding />
    <h4>Acquisition</h4>
    <p>Prime asset sourcing</p>
  </div>

  <div className="speak-advisor-card">
    <HiOutlineKey />
    <h4>Rental Portfolio</h4>
    <p>Yield & Management</p>
  </div>
</div>

</div>



   

        {/* STEP 2 */}
        <div className="speak-advisor-section">
          <h3>2. Private Briefing Date</h3>

          <div className="speak-advisor-calendar-box">

            {/* CALENDAR */}
            <div className="speak-advisor-calendar">

              <div className="calendar-header">
                <button onClick={() => changeMonth(-1)}>‹</button>
                <h4>{monthName}</h4>
                <button onClick={() => changeMonth(1)}>›</button>
              </div>

              <div className="speak-advisor-days">
                {["S","M","T","W","T","F","S"].map((d, i) => (
                  <span key={i}>{d}</span>
                ))}
              </div>

              <div className="speak-advisor-dates">
                {dates.map((d, i) => (
                  <span key={i}>{d}</span>
                ))}
              </div>

            </div>

            {/* TIMES */}
            <div className="speak-advisor-times">
              <h4>Available Times (GMT)</h4>

              {["09:00 AM","11:30 AM","02:00 PM","04:30 PM"].map((time, i) => (
                <button
                  key={i}
                  className={selectedTime === time ? "active" : ""}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>

          </div>
        </div>

      </div>

      {/* RIGHT SECTION */}
      <div className="speak-advisor-right">

        <div className="speak-advisor-image">
          <img src={advisorImg} alt="advisor" />
          <div className="speak-advisor-overlay">
            <h3>Personalized Briefing</h3>
            <span>Global Strategy Session</span>
          </div>
        </div>

        <div className="speak-advisor-benefits">
          <h4>Advisory Benefits</h4>

          <div className="speak-advisor-item">
            <HiOutlineEyeOff />
            <div>
              <p>Off-Market Access</p>
              <span>Exclusive 24-hour priority window</span>
            </div>
          </div>

          <div className="speak-advisor-item">
            <FaSearchDollar />
            <div>
              <p>Portfolio Strategy</p>
              <span>Cross-border optimization</span>
            </div>
          </div>

          <div className="speak-advisor-item">
            <FaGavel />
            <div>
              <p>Legal Concierge</p>
              <span>In-house legal team</span>
            </div>
          </div>
        </div>

        <div className="speak-advisor-profile">
          <img src={profileImg} alt="profile" />

          <div>
            <h4>Julian Thorne</h4>
            <span>Head of Global Acquisitions</span>

            <p>
              "Our goal is to transcend simple transactions. We build legacy
              portfolios."
            </p>

            <div className="stars">
              {[...Array(5)].map((_,i)=><FaStar key={i} />)}
              <span>15+ years experience</span>
            </div>
          </div>
        </div>

        <button className="speak-advisor-btn">
          Confirm Briefing
        </button>

      </div>
    </div>
  );
};

export default SpeakAdvisor;