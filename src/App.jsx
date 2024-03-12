import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-links">
          <div className="navbar-link">Home</div>
          <div className="navbar-link">About</div>
          <div className="navbar-link">Services</div>
          <div className="navbar-link">Contact</div>
        </div>
        <div className="navbar-breadcrumbs" onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faBars} />
          {showDropdown && (
            <div className="navbar-dropdown">
              <div className="navbar-link">Home</div>
              <div className="navbar-link">About</div>
              <div className="navbar-link">Services</div>
              <div className="navbar-link">Contact</div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
