import React from "react";
import "./Manor.css";

/* IMAGES */
import marble from "../assets/Manor-marbles.png";
import detail from "../assets/Manor-detail.png";
import hero from "../assets/manor-hero.png";
import mapImg from "../assets/Manor-border.png";
import profile from "../assets/Monar-logo.png";
import graphImg from "../assets/Manor-graph.png";

const Manor = () => {
  return (

<div className="manor">

  {/* HEADER */}
  <div
    className="manor-header"
    style={{
      backgroundImage: `url(${hero})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}
  >
    <div className="manor-overlay">
     <div> <span className="manor-tag">STRICTLY CONFIDENTIAL</span>

      <h1>The Gilded Manor</h1>

      <p>
        A peerless architectural masterpiece situated in the heart of Mayfair.
        This ultra-prime asset combines historic prestige with future-forward
        sustainable luxury.
      </p>

     </div> 
  </div>
  </div>
      <div className="manor-stats">
        <div className="manor-card">
          <span>PROJECTED ROI</span>
          <h3>8.5%</h3>
        </div>

        <div className="manor-card">
          <span>ASSET CLASS</span>
          <h3 className="manor-gold">Blue Chip</h3>
        </div>

        <div className="manor-card">
          <span>FUNDING STATUS</span>
          <h3>75%</h3>
          <div className="manor-bar">
            <div className="manor-fill"></div>
          </div>
        </div>

        <div className="manor-card">
          <span>VALUATION</span>
          <h3>$42.5M</h3>
        </div>
      </div>
  

  {/* MATERIAL */}
  <section className="manor-material container">
    <div className="manor-left">
      <h2>
        Architectural Mastery <br />
        <span>Materiality Breakdown</span>
      </h2>

      <ul>
        <li>
          <h4>Sustainable Structure</h4>
          <p>LEED Platinum certified structure with carbon-neutral reinforcement.</p>
        </li>

        <li>
          <h4>Italian Statuario Marble</h4>
          <p>Hand-selected slabs for interiors and gallery spaces.</p>
        </li>

        <li>
          <h4>Dynamic Smart Glass</h4>
          <p>Automatically adjusts transparency to optimize thermal gain.</p>
        </li>
      </ul>
    </div>

    <div className="manor-right">
      <img src={marble} alt="marble" />
      <img src={detail} alt="detail" />
    </div>
  </section>

  {/* PERFORMANCE */}
  <section className="manor-performance container">

    <span>Performance</span>
  <div><h2>5-Year Growth Forecast</h2>

<ul>   
  <li> Rental Yield</li>

   <li>Appreciation</li>
</ul>
</div>  

    <div className="manor-bars">
      <img src={graphImg} alt="graph" className="manor-graph-img" />

      <div className="manor-bar-box"></div>
      <div className="manor-bar-box"></div>
      <div className="manor-bar-box"></div>
      <div className="manor-bar-box"></div>
      <div className="manor-bar-box manor-tall"></div>
    </div>
  </section>

  {/* LOCATION */}
  <section className="manor-locationcontainer">
    <div className="manor-left">
      <h2>
        Elite Strategic <br />
        <span>Positioning</span>
      </h2>


<p>Positioned in the exclusive W1 postcode, 'The Gilded Manor'
offers unparalleled access to the world's most prestigious
fashion houses, private clubs, and culinary destinations.</p>


      <div className="manor-places">
        <div>Mount Street Gardens <span>2 MIN WALK</span></div>
        <div>Annabel’s Private Club <span>5 MIN WALK</span></div>
        <div>Berkeley Square <span>4 MIN WALK</span></div>
      </div>
    </div>

    <div
      className="manor-map"
      style={{
        backgroundImage: `url(${mapImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    ></div>
  </section>

  {/* CTA */}
  <section className="manor-cta container">
    <div className="manor-box">

      <img src={profile} alt="specialist" className="manor-cta-img" />

      <h3>Speak with a Specialist</h3>
      <p>Schedule a private briefing with our portfolio manager.</p>

      <div className="manor-buttons">
        <button className="manor-primary">Schedule Briefing</button>
        <button className="manor-secondary">Send Message</button>
      </div>
    </div>
  </section>

</div>
  );
};

export default Manor;