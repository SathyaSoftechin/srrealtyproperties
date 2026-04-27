import React, { useState } from "react";
import "./Body.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import propertyImg from "../assets/Body-property.png";
import consultant1 from "../assets/Body-consultant1.png";
import consultant2 from "../assets/Body-consultant2.png";

const Body = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("11:30 AM");

  const timeSlots = ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];

  // Generate calendar days
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();

    let firstDay = new Date(year, month, 1).getDay();
    firstDay = firstDay === 0 ? 6 : firstDay - 1; // fix Monday start

    const totalDays = new Date(year, month + 1, 0).getDate();

    let days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let i = 1; i <= totalDays; i++) {
      days.push(i);
    }

    return days;
  };

  const days = getDaysInMonth(currentDate);

  const changeMonth = (dir) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + dir);
    setCurrentDate(newDate);
  };

  const monthYear = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="Body">
      {/* Header */}
      <div className="Body-header">
        <p className="Body-subtitle">RESERVATION PORTAL</p>
        <h1 className="Body-title">Request Private Inspection</h1>
        <p className="Body-desc">
          Experience unparalleled luxury. Schedule a confidential viewing of
          our most prestigious assets with a dedicated curator.
        </p>
      </div>

      <div className="Body-container">
        {/* LEFT SIDE */}
        <div className="Body-left">
          {/* Property */}
          <div className="Body-property">
            <img src={propertyImg} alt="property" />
            <div className="Body-property-info">
              <h3>Skyline Penthouse IV</h3>
              <p className="Body-location">NEW YORK CITY, NY</p>
              <h2>$24,500,000</h2>
              <span>Market Valuation • All-Inclusive Asset</span>
            </div>
          </div>

          {/* Timing */}
          <div className="Body-timing">
            <h3>Preferred Timing</h3>

            <div className="Body-calendar">
              <div className="Body-calendar-header">
                <FaChevronLeft onClick={() => changeMonth(-1)} />
                <span>{monthYear.toUpperCase()}</span>
                <FaChevronRight onClick={() => changeMonth(1)} />
              </div>

              <div className="Body-days">
                <span>MON</span>
                <span>TUE</span>
                <span>WED</span>
                <span>THU</span>
                <span>FRI</span>
                <span>SAT</span>
                <span>SUN</span>
              </div>

              <div className="Body-dates">
                {days.map((day, i) => (
                  <span
                    key={i}
                    className={
                      day === null
                        ? "muted"
                        : selectedDate === day
                        ? "active"
                        : ""
                    }
                    onClick={() => day && setSelectedDate(day)}
                  >
                    {day || ""}
                  </span>
                ))}
              </div>

              <div className="Body-time-slots">
                {timeSlots.map((time) => (
                  <button
                    key={time}
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

        {/* RIGHT SIDE */}
        <div className="Body-right">
          {/* Consultants */}
          <div className="Body-consultants">
            <h3>Private Consultants</h3>

            <div className="Body-consultant active">
              <img src={consultant1} alt="" />
              <div>
                <h4>Julian Vane</h4>
                <p>GLOBAL PORTFOLIO DIRECTOR</p>
              </div>
              <span className="radio active"></span>
            </div>

            <div className="Body-consultant">
              <img src={consultant2} alt="" />
              <div>
                <h4>Elena Rossi</h4>
                <p>CURATOR OF EUROPEAN ESTATES</p>
              </div>
              <span className="radio"></span>
            </div>
          </div>

          {/* Form */}
          <div className="Body-form">
            <h3>Specialized Requirements</h3>

            <input type="text" placeholder="Full Legal Name" />
            <textarea placeholder="Additional Notes"></textarea>

            <button className="Body-submit">
              SUBMIT INSPECTION REQUEST
            </button>

            <p className="Body-note">
              RESPONSE TIME TYPICALLY WITHIN 120 MINUTES FOR QUALIFIED CLIENTS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;