import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const WorkoutSessions = () => {
  const sessions = [
    {
      title: "Protein Power Meals",
      description: "Fuel your workouts with high-protein meals designed to support muscle growth and recovery.",
      img: "/protein-meal.jpg"
    },
    {
      title: "Green Gains",
      description: "Nutrient-packed plant-based meals loaded with vitamins, minerals, and clean protein.",
      img: "/green-gains.jpg"
    }
  ];

  const bootcamps = [
    {
      title: "Lean Muscle Nutrition",
      description: "A structured nutrition plan to support lean muscle development using whole foods and protein balance."
    },
    {
      title: "Fat Loss Fuel",
      description: "Low-carb, high-fiber meals and snacks that boost metabolism and promote healthy fat loss."
    },
    {
      title: "Superfood Essentials",
      description: "Daily nutrition plans rich in superfoods, antioxidants, and essential nutrients to enhance recovery."
    },
    {
      title: "Beginner's Nutrition Guide",
      description: "Simple and effective guidance on portion control, meal timing, and foundational fitness nutrition."
    }
  ];

  return (
    <section className="workout-sessions" id="workouts">
      <div className="container">
        <h2 className="section-title">Healthy Fuel Plans</h2>
        
        <div className="session-grid">
          {sessions.map((session, index) => (
            <div className="session-card" key={index}>
              <img src={session.img} alt={session.title} className="session-img" />
              <div className="session-content">
                <h3 className="session-title">{session.title}</h3>
                <p className="session-desc">{session.description}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="section-title" style={{ marginTop: "5rem" }}>Nutrition Bootcamps</h2>
        
        <div className="session-grid">
          {bootcamps.map((bootcamp, index) => (
            <div className="session-card" key={index}>
              <div className="session-content">
                <h3 className="session-title">{bootcamp.title}</h3>
                <p className="session-desc">{bootcamp.description}</p>
                <ul style={{ marginTop: "1rem" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                    <FiCheckCircle color="var(--primary)" /> 4-6 Week Program
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <FiCheckCircle color="var(--primary)" /> Expert Guidance
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
