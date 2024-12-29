import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">MyApp</div>
      <ul className={`navbar-links ${menuActive ? "active" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="navbar-toggle" onClick={toggleMenu}>
        <span className="toggle-bar"></span>
        <span className="toggle-bar"></span>
        <span className="toggle-bar"></span>
      </button>
    </nav>
  );
};

export default Navbar;
