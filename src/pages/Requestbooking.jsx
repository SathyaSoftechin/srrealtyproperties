import React from "react";
import { useState } from "react";
import "./Requestbooking.css";

import villaImg from "../assets/requestbooking-villa.png";

/* ================= CALENDAR COMPONENT ================= */
const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const totalDays = new Date(year, month + 1, 0).getDate();

  let startDay = new Date(year, month, 1).getDay();
  startDay = startDay === 0 ? 6 : startDay - 1;

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  return (
    <div className="request-calendar">
      
      <div className="request-month">
        <span onClick={prevMonth}>‹</span>
        <h4>{months[month]} {year}</h4>
        <span onClick={nextMonth}>›</span>
      </div>

      <div className="request-weekdays">
        {days.map((day, index) => (
          <span key={index}>{day}</span>
        ))}
      </div>

      <div className="request-days">
        {[...Array(startDay)].map((_, i) => (
          <span key={"empty" + i}></span>
        ))}

        {[...Array(totalDays)].map((_, i) => (
          <span key={i}>{i + 1}</span>
        ))}
      </div>
    </div>
  );
};
/* ====================================================== */

const RequestBooking = () => {
  return (
    <div className="request-container">
      
      {/* LEFT SIDE */}
      <div className="request-left">

        <div className="request-card">
          <span className="request-badge">PREMIUM LISTING</span>

          <img src={villaImg} alt="villa" className="request-image" />

          <div className="request-info">
            <h2>The Azure Estate</h2>
            <p className="request-location">📍 Malibu, California</p>

            <div className="request-details">
              <div>
                <span>GUESTS</span>
                <p>Up to 12</p>
              </div>
              <div>
                <span>ROOMS</span>
                <p>6 Suite</p>
              </div>
              <div>
                <span>RATING</span>
                <p>4.9 ⭐</p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Summary */}
        <div className="request-summary">
          <h3>Booking Summary</h3>

          <div className="request-summary-row">
            <span>Nightly Rate</span>
            <span>$2,450.00</span>
          </div>

          <div className="request-summary-row">
            <span>Service Fee</span>
            <span>$180.00</span>
          </div>

          <div className="request-summary-row">
            <span>Security Deposit</span>
            <span>$1,500.00</span>
          </div>

          <hr />

          <div className="request-total">
            <span>Est. Total</span>
            <h2>$4,130.00</h2>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="request-right">

        <h1 className="request-title">Request Reservation</h1>

        <div className="request-content">

          {/* LEFT PART */}
          <div className="request-left-section">

            {/* CALENDAR */}
            <div className="request-calendar-box">
              <p>Select Travel Dates</p>

              {/* ✅ FIX: USE COMPONENT HERE */}
              <Calendar />
            </div>

            {/* GUESTS */}

                <h4>Guests</h4>
            <div className="request-guest-card">
          
              <div>
                <p>Total Occupants</p>
                <span>RECOMMENDED MAX: 12</span>
              </div>

              <div className="request-guest-control">
                <button>-</button>
                <span>4</span>
                <button>+</button>
              </div>
            </div>

          </div>

          {/* RIGHT PART */}
          <div className="request-right-section">

            <div className="request-services-header">
              <h4>Concierge Services</h4>
              <span>OPTIONAL</span>
            </div>

            <div className="request-service-card">
              <div>
                <h5>Private Chef</h5>
                <p>Custom menu & service</p>
              </div>
              <input type="checkbox" />
            </div>

            <div className="request-service-card active">
              <div>
                <h5>Airport Transfer</h5>
                <p>Luxury SUV pickup</p>
              </div>
              <input type="checkbox" checked readOnly />
            </div>

            <div className="request-service-card">
              <div>
                <h5>In-Villa Spa</h5>
                <p>Full body massage & facial</p>
              </div>
              <input type="checkbox" />
            </div>

            {/* TEXTAREA */}
            <div className="request-textarea">
              <p>Special Requests</p>
              <textarea placeholder="Dietary restrictions, preferred check-in time, etc..."></textarea>
            </div>





             <p className="request-clicking-bottom">By clicking the button above, you agree to our booking
terms and house rules. No payment is required until
approval.</p>





          </div>

        </div>

        <button className="request-btn">SEND RESERVATION REQUEST</button>

      </div>

    </div>
  );
};

export default RequestBooking;