import React from "react";
import "./BluePrint.css";

/* Image Import (FIXED) */
import blueprintImg from "../assets/blueprint.png";

/* Optional Icons */
import { Plus, Minus, Maximize2 } from "lucide-react";

const BluePrint = () => {
  return (
    <div className="BluePrint">
      {/* Background Image */}
      <div className="BluePrint__bg">
        <img
          src={blueprintImg}
          alt="Blueprint"
          className="BluePrint__image"
        />
      </div>

      {/* Left Info Card */}
      <div className="BluePrint__infoCard">
        <h1 className="BluePrint__title">Skyline Penthouse IV</h1>
        <p className="BluePrint__subtitle">TECHNICAL DOCUMENTATION</p>

        <div className="BluePrint__meta">
          <div>
            <span>STATUS</span>
            <p>V04–Drafting</p>
          </div>
          <div>
            <span>LAST REVISION</span>
            <p>Oct 2024</p>
          </div>
          <div>
            <span>LEAD ARCHITECT</span>
            <p className="highlight">Elena Rossi</p>
          </div>
        </div>

        <div className="BluePrint__stats">
          <div>
            <span>TOTAL AREA</span>
            <p>4,250 SF</p>
          </div>
          <div>
            <span>SCALE</span>
            <p>1:50</p>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="BluePrint__sidePanel">
        <h4>ACTIVE LAYERS</h4>

        <div className="BluePrint__checkbox">
          <input type="checkbox" checked readOnly />
          <label>STRUCTURAL</label>
        </div>
        <div className="BluePrint__checkbox">
          <input type="checkbox" />
          <label>ELECTRICAL</label>
        </div>
        <div className="BluePrint__checkbox">
          <input type="checkbox" />
          <label>HVAC</label>
        </div>
        <div className="BluePrint__checkbox">
          <input type="checkbox" checked readOnly />
          <label>FURNITURE</label>
        </div>

        <button className="BluePrint__compareBtn">
          Compare Revisions →
        </button>
      </div>

      {/* Floating Controls */}
      <div className="BluePrint__controls">
        <button>
          <Plus size={18} />
        </button>
        <button>
          <Minus size={18} />
        </button>
        <button>
          <Maximize2 size={18} />
        </button>
      </div>

      {/* Tag Label */}
      <div className="BluePrint__tag">
        <span>ZONE A-04</span>
        <p>Master Suite Glazing</p>
      </div>
    </div>
  );
};

export default BluePrint;