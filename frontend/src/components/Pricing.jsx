import React from "react";
import { FiCheck } from "react-icons/fi";

const Pricing = () => {
  const plans = [
    {
      title: "Monthly Basic",
      price: "700",
      duration: "1 Month",
      features: [
        "Weight Training Access",
        "Locker Facility",
        "Open Gym Hours",
        "Basic Workout Guidance",
        "Monthly Body Measurements"
      ]
    },
    {
      title: "Monthly Premium",
      price: "900",
      duration: "1 Month",
      features: [
        "Everything in Basic",
        "Cardio Equipment Access",
        "2 Group Classes/Month",
        "Basic Diet Consultation",
        "Progress Tracking"
      ],
      popular: true
    },
    {
      title: "Yearly",
      price: "5999",
      duration: "12 Months",
      features: [
        "Everything in Premium",
        "Unlimited Group Classes",
        "12 Personal Trainer Sessions",
        "Premium Diet Plan",
        "10-Day Freeze Option",
        "Priority Booking",
        "24/7 Gym Access"
      ]
    }
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <h2 className="section-title">Membership Plans</h2>
        
        <div className="pricing-cards">
          {plans.map((plan, index) => (
            <div 
              className={`pricing-card ${plan.popular ? "popular" : ""}`} 
              key={index}
              style={plan.popular ? { border: "2px solid var(--primary)" } : {}}
            >
              <div className="pricing-header">
                <h3 className="pricing-title">{plan.title}</h3>
                <p className="pricing-price">₹{plan.price}</p>
                <p className="pricing-duration">{plan.duration}</p>
              </div>
              
              <div className="pricing-body">
                {plan.features.map((feature, i) => (
                  <div className="pricing-feature" key={i}>
                    <FiCheck color="var(--primary)" />
                    <span>{feature}</span>
                  </div>
                ))}
                
                <a href="contact" className="btn btn-primary pricing-btn">
                  Join Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
