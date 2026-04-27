import "./About.css";
import heroImg from "../assets/About.png";
import img1 from "../assets/About1.png";
import img2 from "../assets/About2.png";

import nyImg from "../assets/ny.png";
import parisImg from "../assets/paris.png";
import dubaiImg from "../assets/dubai.png";
import londonImg from "../assets/london.png";

import aboutImg from "../assets/book.png"; // ✅ added (CTA image)

function About() {
  return (
    <>
      <div className="about">

        {/* HERO SECTION */}
        <section className="about-hero">
          <img src={heroImg} alt="hero" />
          <div className="aboutus-overlay"></div>

          <div className="hero-content">
            <h1>
              A Legacy of <span>Golden Standards</span>
            </h1>
            <p>
              Curating the world's most extraordinary living experiences for over three
              decades with an unwavering commitment to excellence.
            </p>
          </div>
        </section>

        {/* PHILOSOPHY SECTION */}
        <section className="philosophy">
          <div className="container philosophy-container">

            <div className="philosophy-left">
              <h2>The Aureum Philosophy</h2>
              <p>
                Founded on the principles of timeless elegance and unparalleled service,
                Aureum Estates emerged from a vision to redefine luxury. We don't just
                sell properties; we steward the transition into a new lifestyle.
              </p>
              <p>
                Our name, "Aureum," is Latin for golden. It reflects our dedication to
                the golden ratio of real estate: the perfect balance of location,
                architectural integrity, and investment potential.
              </p>

              <a href="#" className="read-more">
                Read our full history →
              </a>
            </div>

            <div className="philosophy-right">
              <div className="cardsmall">
                <img src={img1} alt="interior" className="interior"/>
                <div className="aboutus-tag">30+<br/> YEARS OF HERITAGE</div>
              </div>

              <div className="cardbig">
                <img src={img2} alt="column" />
                <div className="aboutus-badge">
                  <h3>$4.2B</h3>
                  <p>TOTAL TRANSACTIONS</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* CORE VALUES */}
        <section className="values">
          <div className="container">
            <h2>Our Core Values</h2>
            <div className="underline"></div>

            <div className="values-grid">
              <div className="value-card">
                <div className="icon">★</div>
                <h4>Excellence</h4>
                <p>
                  We set the benchmark for quality in every detail, from property
                  selection to the final handshake.
                </p>
              </div>

              <div className="value-card">
                <div className="icon">🛡</div>
                <h4>Integrity</h4>
                <p>
                  Discretion and transparency are our hallmarks. Our clients trust us
                  with their most valuable assets.
                </p>
              </div>

              <div className="value-card">
                <div className="icon">💡</div>
                <h4>Innovation</h4>
                <p>
                  Blending traditional luxury with modern technology to deliver
                  seamless digital experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GLOBAL FOOTPRINT */}
        <section className="global">
          <div className="global-header">
            <div>
              <h2>Global Footprint</h2>
              <p>
                From the boulevards of Paris to the coastlines of Dubai, our reach is
                truly international, connecting exclusive sellers with global visionaries.
              </p>
            </div>

            <div className="about-stats">
              <div>
                <h3>12</h3>
                <span>GLOBAL OFFICES</span>
              </div>
              <div>
                <h3>24</h3>
                <span>COUNTRIES COVERED</span>
              </div>
            </div>
          </div>

          <div className="global-cards">
            <div className="city-card">
              <img src={nyImg} alt="New York" />
              <div className="aboutus-overlay">
                <span>HEADQUARTERS</span>
                <h4>New York</h4>
              </div>
            </div>

            <div className="city-card">
              <img src={parisImg} alt="Paris" />
              <div className="aboutus-overlay">
                <span>EUROPEAN HUB</span>
                <h4>Paris</h4>
              </div>
            </div>

            <div className="city-card">
              <img src={dubaiImg} alt="Dubai" />
              <div className="aboutus-overlay">
                <span>MIDDLE EAST</span>
                <h4>Dubai</h4>
              </div>
            </div>

            <div className="city-card">
              <img src={londonImg} alt="London" />
              <div className="aboutus-overlay">
                <span>REGIONAL OFFICE</span>
                <h4>London</h4>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* CTA SECTION (OUTSIDE .about FIXED) */}
      <section className="about-cta">
        <div className="about-container">
          
          <div className="about-left">
            <h2>Let’s build your legacy together</h2>
            <p>
              Whether you're looking for an investment or a place to call home,
              our experts are ready to assist you.
            </p>

            <div className="about-buttons">
              <a href="/Contact"><button className="btn-primary">Contact Our Team</button></a>
             <a href="/partner"><button className="btn-outline">Partner With Us</button></a>
            </div>
          </div>

          <div className="about-right">
            <img src={aboutImg} alt="about visual" />
          </div>

        </div>
      </section>
    </>
  );
}

export default About;