import React from "react";
import { FiLinkedin, FiInstagram, FiGithub, FiMail, FiPhone, FiMapPin, FiClock, FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-section">
            <div className="footer-logo">Narwade's Health Club</div>
            <p className="footer-tagline">Transform your body, elevate your life</p>
            
            <div className="contact-info">
              <div className="contact-item">
                <FiMapPin className="contact-icon" />
                <span>Opposite New Bus Stop, Narwade Complex, Basmath-43512, Maharashtra, India</span>
              </div>
              <div className="contact-item">
                <FiPhone className="contact-icon" />
                <span>8421216162, 9921194437</span>
              </div>
              <div className="contact-item">
                <FiMail className="contact-icon" />
                <span>narwadehealthclub@gmail.com</span>
              </div>
              <div className="contact-item">
                <FiClock className="contact-icon" />
                <span>Mon-Sat: 5AM-10PM | Sunday: Holiday</span>
              </div>
              <div className="contact-item">
                <FiClock className="contact-icon" />
                <span>Ladies Special Batch: 10:30AM-12:00PM</span>
              </div>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links">
              <a href="#workouts">Workouts</a>
              <a href="#gallery">Gallery</a>
              <a href="#pricing">Pricing</a>
              <a href="https://www.instagram.com/satish.narwade6162?igsh=MWNrNXZ5M2p4ODFxNA==" target="_blank" rel="noopener noreferrer">Trainer</a>
              <a href="#contact">Contact</a>
              <a href="#bmi">BMI Calculator</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Our Branches</h4>
            <div className="branch-info">
              <div className="branch-item">
                <h5>Narwade's Health Club</h5>
                <p>Opposite New Bus Stop</p>
                <p>Narwade Complex, Basmath</p>
                <p>8421216162, 9921194437</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="social-links">
            <a href="https://www.linkedin.com/in/ashwindumane/" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FiLinkedin />
            </a>
            <a href="https://www.instagram.com/ashwin_kshatriya_/?hl=en" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FiInstagram />
            </a>
            <a href="https://github.com/ashwindumane" className="social-icon" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <FiGithub />
            </a>
          </div>
          
          <p className="copyright">© {new Date().getFullYear()} Narwade's Health Club. All rights reserved.</p>
          <p className="credits">Designed & Developed By Ashwin Dumane</p>
        </div>
      </div>
      
      <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
        <FiArrowUp />
      </button>
    </footer>
  );
};

export default Footer;