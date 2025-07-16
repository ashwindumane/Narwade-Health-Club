import React, { useState, useEffect } from "react"; 
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll"; 
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when clicking on a link
  const handleNavClick = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  // Close menu when resizing to larger screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header>
      <a href="#" className="logo" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, letterSpacing: '1px' }}>Narwade's Health Club</a>
      
      <nav className={`nav-links ${isOpen ? "active" : ""}`}>
        <Link 
          to="workouts" 
          smooth={true} 
          duration={500} 
          offset={-60} 
          onClick={handleNavClick}
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
        >Workouts</Link>
        <Link 
          to="gallery" 
          smooth={true} 
          duration={500} 
          offset={-60} 
          onClick={handleNavClick}
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
        >Gallery</Link>
        <Link 
          to="pricing" 
          smooth={true} 
          duration={500} 
          offset={-60} 
          onClick={handleNavClick}
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
        >Pricing</Link>
        <Link 
          to="contact" 
          smooth={true} 
          duration={500} 
          offset={-60} 
          onClick={handleNavClick}
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
        >Contact</Link>
        <Link 
          to="bmi" 
          smooth={true} 
          duration={500} 
          offset={-60} 
          onClick={handleNavClick}
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
        >BMI Calculator</Link>
      </nav>
      
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </div>
    </header>
  );
};

export default Navbar;