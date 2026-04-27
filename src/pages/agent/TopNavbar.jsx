import React from 'react';
import './TopNavbar.css';
import { FaBell, FaUserCircle, FaSearch } from 'react-icons/fa';

const TopNavbar = () => {
  return (
    <header className="topbar">
      <div className="search-box">
        <FaSearch />
        <input placeholder="Search tasks or agents..." />
      </div>

      <div className="top-icons">
        <span className="online-dot"></span>
        <span>Online</span>
        <FaBell />
        <FaUserCircle />
      </div>
    </header>
  );
};

export default TopNavbar;