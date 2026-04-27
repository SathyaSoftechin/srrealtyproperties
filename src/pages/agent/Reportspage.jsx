import React, { useState } from "react";
import "./Reportpage.css";

const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar-logo">SR REALITY</div>
    <nav className="sidebar-nav">
      <NavItem icon={<GridIcon />} label="DASHBOARD" />
      <NavItem icon={<TaskIcon />} label="MY TASKS" />
      <NavItem icon={<ShieldIcon />} label="VERIFICATIONS" />
      <NavItem icon={<ReportIcon />} label="REPORTS" active />
      <NavItem icon={<MessageIcon />} label="MESSAGES" />
      <NavItem icon={<ChartIcon />} label="PERFORMANCE" />
      <NavItem icon={<SettingsIcon />} label="SETTINGS" />
    </nav>
  </aside>
);

const NavItem = ({ icon, label, active }) => (
  <div className={`nav-item ${active ? "active" : ""}`}>
    <span className="nav-icon">{icon}</span>
    <span className="nav-label">{label}</span>
  </div>
);

const Header = () => (
  <header className="topbar">
    <div className="search-bar">
      <SearchIcon />
      <input type="text" placeholder="Search tasks or agents..." />
    </div>
    <div className="topbar-right">
      <span className="status-online">
        <span className="dot" /> Online
      </span>
      <button className="icon-btn"><BellIcon /></button>
      <button className="icon-btn"><UserIcon /></button>
    </div>
  </header>
);

const SystemFlags = () => (
  <div className="card system-flags">
    <div className="card-header-label">
      <WarningIcon /> SYSTEM FLAGS
    </div>
    <div className="flag-list">
      <FlagItem
        color="yellow"
        title="Duplicate Listing"
        desc="Found 88% visual match in the Mediterranean Archive."
      />
      <FlagItem
        color="yellow"
        title="Price Anomaly"
        desc="Listing price is 40% below regional average for this asset tier."
      />
      <FlagItem
        color="green"
        title="Verified Uploader"
        desc="The source account has no prior violations."
      />
    </div>
  </div>
);

const FlagItem = ({ color, title, desc }) => (
  <div className="flag-item">
    <span className={`flag-dot ${color}`} />
    <div>
      <div className="flag-title">{title}</div>
      <div className="flag-desc">{desc}</div>
    </div>
  </div>
);

const CaseTimeline = () => (
  <div className="card case-timeline">
    <div className="card-header-label">CASE TIMELINE</div>
    <div className="timeline-list">
      <TimelineItem
        dot="yellow"
        title="Investigation Started"
        time="Today, 09:45 AM"
      />
      <TimelineItem
        dot="green"
        title="Report Received"
        time="Yesterday, 11:20 PM"
      />
    </div>
  </div>
);

const TimelineItem = ({ dot, title, time }) => (
  <div className="timeline-item">
    <span className={`tl-dot ${dot}`} />
    <div>
      <div className="tl-title">{title}</div>
      <div className="tl-time">{time}</div>
    </div>
  </div>
);

const PropertyCard = () => (
  <div className="card property-image-card">
    <img
      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80"
      alt="Penthouse Interior"
      className="property-img"
    />
    <div className="property-label">
      <span className="view-tag">PRIMARY VIEW</span>
      <span className="view-name">Exterior Elevation</span>
    </div>
  </div>
);

const LocationCard = () => (
  <div className="card location-card">
    <div className="location-header">
      <LocationPinIcon />
      <span className="location-section-label">LOCATION ADDRESS</span>
    </div>
    <div className="location-address">
      1024 Emerald Ridge Way,<br />Suite 900, Monaco District
    </div>
    <div className="owner-section">
      <div className="owner-label">REGISTERED OWNER</div>
      <div className="owner-info">
        <div className="owner-avatar">VA</div>
        <div>
          <div className="owner-name">Viktor Alistair</div>
          <div className="owner-tag">VERIFIED TIER 1 HOLDER</div>
        </div>
      </div>
    </div>
  </div>
);

const MapCard = () => (
  <div className="card map-card">
    <div className="map-placeholder">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/800px-World_map_-_low_resolution.svg.png"
        alt="World Map"
        className="map-img"
      />
      <div className="map-pin pin-blue" style={{ top: "40%", left: "52%" }} />
      <div className="map-pin pin-red" style={{ top: "56%", left: "51%" }} />
    </div>
  </div>
);

const EvidenceSection = () => (
  <div className="card evidence-card">
    <div className="evidence-header">
      <span className="evidence-title">Investigation Evidence</span>
      <span className="evidence-badge">3 NEW FILES</span>
    </div>
    <div className="evidence-quote">
      <span className="quote-mark">"</span>
      <p>
        "The property listings appear to use identical photography to a
        previously delisted unit in the South Tower. The owner details
        provided do not match the regional deed registry for the
        specified suite number."
      </p>
      <div className="quote-meta">
        <span className="reporter">REPORTER: AGENT K. STERLING</span>
        <span className="report-date">OCT 24, 14:02 GMT</span>
      </div>
    </div>
    <div className="evidence-files">
      <div className="evidence-file dark">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&q=60"
          alt="Safe work"
          className="efile-img"
        />
        <div className="efile-label">Safe work</div>
        <div className="efile-sub">Safe work 2</div>
      </div>
      <div className="evidence-file mid">
        <div className="efile-num">2</div>
        <div className="efile-bar" />
      </div>
      <div className="evidence-file mid">
        <CameraIcon />
        <div className="efile-label-sm">AAA EVIDENCE</div>
      </div>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="page-content">
          <div className="case-meta">
            <span className="case-label">INVESTIGATION CASE</span>
            <span className="case-id">#INV-8829-01</span>
          </div>
          <h1 className="case-title">
            The Obsidian Heights <span className="highlight">Penthouse</span>
          </h1>

          <div className="content-grid">
            {/* Left column */}
            <div className="col-left">
              <div className="top-cards">
                <PropertyCard />
                <LocationCard />
              </div>
              <MapCard />
              <EvidenceSection />
            </div>

            {/* Right column */}
            <div className="col-right">
              <SystemFlags />
              <CaseTimeline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── SVG Icons ─────────────────────────────── */
const GridIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="1" y="1" width="6" height="6" rx="1" fill="currentColor" opacity=".7"/>
    <rect x="9" y="1" width="6" height="6" rx="1" fill="currentColor" opacity=".7"/>
    <rect x="1" y="9" width="6" height="6" rx="1" fill="currentColor" opacity=".7"/>
    <rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor" opacity=".7"/>
  </svg>
);
const TaskIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const ShieldIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 2L3 4v4c0 3 2.5 5 5 6 2.5-1 5-3 5-6V4L8 2z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);
const ReportIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M4 2h8a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M5.5 6h5M5.5 9h5M5.5 12h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);
const MessageIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M2 3h12v8H9l-3 2v-2H2V3z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);
const ChartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M2 12l3-4 3 2 3-5 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const SettingsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.22 3.22l1.41 1.41M11.37 11.37l1.41 1.41M3.22 12.78l1.41-1.41M11.37 4.63l1.41-1.41" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);
const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const BellIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M9 2a5 5 0 00-5 5v3l-1.5 2H15.5L14 10V7a5 5 0 00-5-5z" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M7.5 14a1.5 1.5 0 003 0" stroke="currentColor" strokeWidth="1.4"/>
  </svg>
);
const UserIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="6" r="3" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M3 16c0-3 2.7-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);
const WarningIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M7 1L13 12H1L7 1z" stroke="#f59e0b" strokeWidth="1.3"/>
    <path d="M7 5v3M7 10v.5" stroke="#f59e0b" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);
const LocationPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.5 4.5 8.5 4.5 8.5S12.5 9.5 12.5 6C12.5 3.5 10.5 1.5 8 1.5z" stroke="#e5c84a" strokeWidth="1.4"/>
    <circle cx="8" cy="6" r="1.5" stroke="#e5c84a" strokeWidth="1.2"/>
  </svg>
);
const CameraIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="2" y="7" width="24" height="17" rx="2.5" stroke="#888" strokeWidth="1.5"/>
    <circle cx="14" cy="15" r="4" stroke="#888" strokeWidth="1.5"/>
    <path d="M10 7l1.5-3h5L18 7" stroke="#888" strokeWidth="1.5"/>
    <circle cx="21" cy="11" r="1" fill="#888"/>
    <path d="M20 7h2" stroke="#888" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);