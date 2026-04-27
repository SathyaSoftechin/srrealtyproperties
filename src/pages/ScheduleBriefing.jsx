import React, { useState } from "react";
import "./ScheduleBriefing.css";
import { FaChevronLeft, FaChevronRight, FaClock, FaVideo } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import advisor1 from "../assets/ScheduleBriefing1.png";
import advisor2 from "../assets/ScheduleBriefing2.png";
import { MdDateRange } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { BsInfoCircle } from "react-icons/bs";
import { BsCheck } from "react-icons/bs";
const ScheduleBriefing = () => {
  const [selectedTime, setSelectedTime] = useState("01:00 PM");
  const [selectedFocus, setSelectedFocus] = useState("Portfolio Review");

  const times = [
    "09:00 AM",
    "10:30 AM",
    "01:00 PM",
    "02:30 PM",
    "04:00 PM",
    "05:30 PM",
  ];

  const focusOptions = [
    "Portfolio Review",
    "Investment Strategy",
    "Acquisition Financing",
    "Private Listing Access",
  ];

  return (
    <div className="ScheduleBriefing-container">
      <h1 className="ScheduleBriefing-title">Schedule Private Briefing</h1>
      <p className="ScheduleBriefing-subtitle">
       Tailored architectural insights and investment strategies for the discerning<br/>
collector. Select your preference below.
      </p>

      <div className="ScheduleBriefing-grid">
        {/* LEFT SECTION */}
        <div className="ScheduleBriefing-left">

          {/* STEP 1 */}
          <div className="ScheduleBriefing-card">
            <h3><span>1</span> Consultation Window</h3>

            <div className="ScheduleBriefing-calendar">
              <div className="ScheduleBriefing-month">
                <FaChevronLeft />
                <span>November 2024</span>
                <FaChevronRight />
              </div>

              <div className="ScheduleBriefing-dates">
                {[...Array(30)].map((_, i) => (
                  <div
                    key={i}
                    className={`ScheduleBriefing-date ${i === 7 ? "active" : ""}`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
               




            <div className="ScheduleBriefing-available">Available Slots (GMT-5)</div>





            <div className="ScheduleBriefing-slots">
              {times.map((time) => (
                <button
                  key={time}
                  className={`ScheduleBriefing-slot ${
                    selectedTime === time ? "active" : ""
                  }`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>

            <p className="ScheduleBriefing-note">
             <BsInfoCircle /> Briefings are typically 45 minutes.
            </p>
          </div>



{/* STEP 2 */}
<div className="ScheduleBriefing-card">
  <h3><span>2</span> Briefing Focus</h3>

  <div className="ScheduleBriefing-focus-grid">
    {focusOptions.map((item) => (
      <div
        key={item}
        className={`ScheduleBriefing-focus ${
          selectedFocus === item ? "active" : ""
        }`}
        onClick={() => setSelectedFocus(item)}
      >
        <div className="ScheduleBriefing-focus-content">
          <div>
            <h4>{item}</h4>
            <p>
              {item === "Portfolio Review" &&
                "Evaluation of current high-value assets."}
              {item === "Investment Strategy" &&
                "Market analysis and growth opportunities."}
              {item === "Acquisition Financing" &&
                "Bespoke lending and structure advice."}
              {item === "Private Listing Access" &&
                "Off-market property opportunities."}
            </p>
          </div>

          {/* RIGHT SIDE CHECK */}
          <div className="ScheduleBriefing-focus-check">
            {selectedFocus === item && <BsCheck />}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

</div>





        {/* RIGHT SECTION */}
        <div className="ScheduleBriefing-right">

          {/* ADVISOR */}
          <div className="ScheduleBriefing-card">
            <h3><FiUser /> Senior Advisor</h3>

            <div className="ScheduleBriefing-advisor active">
              <img src={advisor1} alt="advisor" />
              <div>
                <h4>Julian Thorne</h4>
                <p>Head of Private Equity</p>
              </div>
            </div>

            <div className="ScheduleBriefing-advisor">
              <img src={advisor2} alt="advisor" />
              <div>
                <h4>Elena Varakis</h4>
                <p>Architectural Strategist</p>
              </div>
            </div>
          </div>

         <div className="ScheduleBriefing-card">
  <h3>Briefing Summary</h3>

  <div className="ScheduleBriefing-summary-row">
    <div>
      <span>DATE</span>
      <p>Friday, Nov 08, 2024</p>
    </div>
    <MdDateRange className="ScheduleBriefing-icon" />
  </div>

  <div className="ScheduleBriefing-summary-row">
    <div>
      <span>TIME</span>
      <p>{selectedTime} - 01:45 PM</p>
    </div>
    <IoTimeOutline className="ScheduleBriefing-icon" />
  </div>

  <div className="ScheduleBriefing-summary-row">
    <div>
      <span>TYPE</span>
      <p>Secure Video Conference</p>
    </div>
    <HiOutlineVideoCamera className="ScheduleBriefing-icon" />
  </div>

  <button className="ScheduleBriefing-confirm">
    CONFIRM PRIVATE BRIEFING
  </button>
</div>

        </div>
      </div>
    </div>
  );
};

export default ScheduleBriefing;