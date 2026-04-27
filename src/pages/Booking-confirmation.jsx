import React from "react";
import "./Booking-confirmation.css";

import villa from "../assets/Booking-villa.png"; // your villa image
import map from "../assets/Booking-map.png";     // your map image
import user from "../assets/Booking-user.png";   // concierge image
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
const BookingConfirmation = () => {
  return (
    <div className="booking-container">

      {/* TOP TITLE */}
      <div className="booking-header">
        <div className="booking-icon">✔</div>
        <h1>Booking Confirmed</h1>
        <p>RESERVATION #FR-59284-L</p>
      </div>

      <div className="booking-main">

        {/* LEFT SECTION */}
        <div className="booking-left">

          {/* PROPERTY CARD */}
          <div className="booking-card">
            <img src={villa} alt="villa" />

            <div className="booking-card-content">
              <span className="booking-tag">LUXURY RETREAT</span>
              <h2>The Golden Pavilion Estate</h2>
            




<p className="booking-location">
  <FaMapMarkerAlt className="location-icon" />
  French Riviera, Côte d'Azur
</p>




              <div className="booking-info">
                <div>
                  <span>STAY DATES</span>
                  <p>Oct 12 - Oct 19, 2024</p>
                </div>

                <div>
                  <span>GUESTS</span>
                  <p>6 Adults, 2 Children</p>
                </div>
              </div>

              <a href="/requestbooking"><button className="booking-btn">
                View Travel Itinerary
              </button></a>
            </div>
          </div>

          {/* SERVICE BREAKDOWN */}
          <div className="booking-services">
            <h3>Service Breakdown</h3>

            <div className="booking-service-item">
              <div>
                <h4>Private Culinary Team</h4>
                <p>Daily breakfast & 5-course dinners</p>
              </div>
              <span>Included</span>
            </div>

            <div className="booking-service-item">
              <div>
                <h4>Luxury Airport Transfer</h4>
                <p>Rolls Royce Ghost chauffeur service</p>
              </div>
              <span>Included</span>
            </div>

            <div className="booking-service-item">
              <div>
                <h4>In-Estate Spa Treatments</h4>
                <p>3 sessions per guest included</p>
              </div>
              <span className="premium">Premium</span>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="booking-right">

          {/* PAYMENT */}
          <div className="booking-payment">
            <h3>Payment Summary</h3>

            <div className="booking-row">
              <span>Accommodation (7 nights)</span>
              <span>$24,500.00</span>
            </div>

            <div className="booking-row">
              <span>Service Fees</span>
              <span>$1,200.00</span>
            </div>

            <div className="booking-row">
              <span>Taxes & Levies</span>
              <span>$2,100.00</span>
            </div>

            <div className="booking-total">
              <span>Total Amount</span>
              <span>$27,800.00</span>
            </div>

            <button className="booking-secure-btn">
              SECURE PAYMENT PROCESSED
            </button>
          </div>

          {/* CONCIERGE */}
          <div className="booking-concierge">
            <div className="booking-user">
              <img src={user} alt="user" />
              <div>
                <span>YOUR PERSONAL CONCIERGE</span>
                <h4>Julian Sterling</h4>
              </div>
            </div>

            <p>
              "I am here to ensure your stay is impeccable. Feel free to contact
              me directly for any bespoke requests."
            </p>

            <div className="booking-actions">
              <button>Live Chat</button>
              <button>Direct Call</button>
            </div>
          </div>

          {/* MAP */}
        {/* MAP */}
<div className="booking-map">
  <img src={map} alt="map" />
</div>

<div className="booking-map-icon">
  <HiLocationMarker />
</div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;