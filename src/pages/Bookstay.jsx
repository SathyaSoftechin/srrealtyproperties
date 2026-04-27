import React from "react";
import "./Bookstay.css";

import villabook from "../assets/Bookstay.png"; // replace with your image

const BookStay = () => {
  return (
    <div className="bookstay_container">

      {/* LEFT SIDE */}
      <div className="bookstay_left">

        <p className="bookstay_tag">🔒 SECURE CHECKOUT</p>
        <h1>Confirm Your Luxury Stay</h1>
        <p className="bookstay_subtext">
          One step away from your unforgettable escape to Malibu.
        </p>

        {/* Guest Details */}
        <div className="bookstay_section">
          <h3>Guest Details</h3>

          <div className="bookstay_row">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>

          <input type="email" placeholder="Email Address" />
        </div>








        

        {/* Payment Method */}
        <div className="bookstay_section">
          <h3>Payment Method</h3>









          <div className="payment_option active">
            <span>💳 Credit / Debit Card</span>
            <small>Secure encrypted payment</small>
          </div>

          <div className="card_box">
            <input type="text" placeholder="Card Number" />

            <div className="bookstay_row">
              <input type="text" placeholder="MM/YY" />
              <input type="text" placeholder="CVV" />
            </div>
          </div>

          <div className="payment_option">
            <span>🏦 Bank Transfer</span>
            <small>Direct wire via SWIFT/IBAN</small>
          </div>
        </div>

        {/* Info Box */}
        <div className="bookstay_note">
          Your booking is protected by our Luxe Insurance. You can cancel up to
          48 hours before check-in for a full refund.
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="bookstay_right">

        <div className="booking_card">

          <img src={villabook} alt="villa" />






          

          <div className="booking_card_content">
            <p className="booking_rating">⭐ HIGHLY RATED</p>
            <h3>Villa Azure Serenity</h3>
            <p className="booking_location">📍 Malibu, California</p>

            <div className="booking_info_row">
              <div>
                <small>DATES</small>
                <p>Oct 12 – Oct 17</p>
              </div>
              <div>
                <small>GUESTS</small>
                <p>4 Adults</p>
              </div>
            </div>

            <div className="booking_price_box">
              <div>
                <span>$1,250 x 5 nights</span>
                <span>$6,250</span>
              </div>
              <div>
                <span>Concierge Service Fee</span>
                <span>$150</span>
              </div>
              <div>
                <span>Cleaning & Maintenance</span>
                <span>$200</span>
              </div>
              <div>
                <span>Taxes (12%)</span>
                <span>$792</span>
              </div>
            </div>

            <div className="booking_total">
              <span>Total Amount</span>
              <h2>$7,392.00</h2>
            </div>

           <a href="/bookingconfirmation"> <button className="booking_confirm_btn">🔒 CONFIRM BOOKING</button></a>

          </div>
        </div>

        <div className="booking_security">
          <span>🔐 SSL SECURE</span>
          <span>✔ VERIFIED HOST</span>
          <span>🕒 24/7 SUPPORT</span>
        </div>

      </div>

    </div>
  );
};

export default BookStay;