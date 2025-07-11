import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <a href="#" className="logo">Narwade's Health Club</a>
      
      <nav className={`nav-links ${isOpen ? "active" : ""}`}>
        <a href="#workouts">Workouts</a>
        <a href="#gallery">Gallery</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
        <a href="#bmi">BMI Calculator</a>
      </nav>
      
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </div>
    </header>
  );
};

export default Navbar;

//D:\AB Projects\GYM\frontend\src\components\Navbar.jsx