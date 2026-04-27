// PrivateSchedule.jsx
import React, { useState } from "react";

import "./SchedulePrivate.css";
import heroImg from "../assets/PrivateSchedule-hero.png";
import roomImg from "../assets/PrivateSchedule-room.png";
import user1 from "../assets/PrivateSchedule-user1.png";
import user2 from "../assets/PrivateSchedule-user2.png";






export default function SchedulePrivate() {

const [selectedDate, setSelectedDate] = useState("16");
const [selectedTime, setSelectedTime] = useState("02:00 PM");


  return (
    <div className="private-container">
      {/* HERO */}
      <section className="private-hero">
        <img src={heroImg} alt="villa" className="private-hero-img" />
        <div className="private-hero-overlay">
          <p className="private-subtitle">RESERVATION REQUEST</p>
          <h1 className="private-title">The Obsidian Vista</h1>
          <p className="private-desc">
            Experience the pinnacle of architectural mastery. Schedule your
            private walkthrough of the world’s most exclusive obsidian-glass
            estate.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="private-content">
        <div className="private-left">
          {/* Experience */}
          <div className="private-block">
            <h3>Select Experience Type</h3>
            <div className="private-options">
              <button className="private-option active">
                In-Person<br/>
                <span>Private walkthrough</span>
              </button>
              <button className="private-option">
                Virtual VR<br/>
                <span>Be remote immersion</span>
              </button>
            </div>
          </div>





<div className="private-date-header">
  <h3>Select Date & Time</h3>
  <span className="private-month">October 2024</span>
</div>


<section className="private-DateTime">

<div className="private-days">
  {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((day, i) => (
    <span key={i}>{day}</span>
  ))}
</div>

            <div className="private-dates">
  {['12','13','14','15','16','17','18'].map((d, i) => (
    <div
      key={i}
      onClick={() => setSelectedDate(d)}
      className={`private-date ${selectedDate === d ? 'active' : ''}`}
    >
      {d}
    </div>
  ))}
</div>
<div className="private-avaialble">Available Times (PST)</div>
<div className="private-times">
  {['10:00 AM','02:00 PM','04:30 PM','07:00 PM'].map((t,i)=>(
    <button
      key={i}
      onClick={() => setSelectedTime(t)}
      className={`private-time ${selectedTime === t ? 'active' : ''}`}
    >
      {t}
    </button>
  ))}
</div>

</section>




          {/* Requirements */}
          <div className="private-block">
            <h3>Special Requirements</h3>
            <textarea placeholder="e.g. Private security detail, helicopter arrival arrangements, NDA requirements..." />
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="private-right">
          <h4>CURATOR SELECTION</h4>

          <div className="private-user active">
            <img src={user1} alt="user" />
            <div>
              <p>Julian Vane</p>
              <span>Senior Curator</span>
            </div>
          </div>

          <div className="private-user">
            <img src={user2} alt="user" />
            <div>
              <p>Elena Rossi</p>
 <span>Global Portfolio Director</span>
            </div>
          </div>

          <div className="private-price">$42,500,000</div>

          <button className="private-confirm">CONFIRM PRIVATE TOUR</button>
        </div>
      </section>

      {/* BOTTOM */}
      <section className="private-bottom">
        <img src={roomImg} alt="room" />
        <div className="private-bottom-text">
          <h2>The Curator’s Commitment</h2>
          <p>
            At THE DIGITAL CURATOR, we understand that acquiring an estate like
            The Obsidian Vista is a personal journey of legacy and vision.
            Every private tour is tailored to your arrival preferences.
          </p>
          <button>Learn About Our Concierge Service</button>
        </div>
      </section>
    </div>
  );
}
