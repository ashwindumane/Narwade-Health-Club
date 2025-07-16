import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Unleash Your Potential <br />
            Build a Stronger You
          </h1>
          <p className="hero-subtitle">
            Join a community driven by results. Our expert-led fitness plans empower you to 
            push limits, stay consistent, and achieve your personal best.
          </p>
          <div className="hero-cta">
            <a href="pricing" className="btn btn-primary">
              Join Now <FiArrowRight />
            </a>
            <a href="workouts" className="btn btn-outline">
              View Training Plans
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

//D:\AB Projects\GYM\frontend\src\components\Hero.jsx