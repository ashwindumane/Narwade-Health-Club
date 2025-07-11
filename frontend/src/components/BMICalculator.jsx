import React, { useState } from "react";
import { toast } from "react-toastify";

const BMICalculator = () => {
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    gender: ""
  });
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateBMI = (e) => {
    e.preventDefault();
    
    if (!formData.height || !formData.weight || !formData.gender) {
      toast.error("Please fill all fields");
      return;
    }

    const heightInMeters = formData.height / 100;
    const bmiValue = (formData.weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setCategory("Underweight");
      toast.warning("You are underweight. Consider consulting a nutritionist.");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setCategory("Normal weight");
      toast.success("You have a healthy weight. Keep it up!");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setCategory("Overweight");
      toast.warning("You are overweight. Consider adjusting your diet and exercise.");
    } else {
      setCategory("Obese");
      toast.error("You are in the obese range. Please consult a healthcare professional.");
    }
  };

  return (
    <section className="bmi-calculator" id="bmi">
      <div className="container">
       <h2 className="section-title" style={{ color: "#007800" }}>Body Mass Index (BMI) Calculator</h2>

        
        <div className="bmi-container">
          <form className="bmi-form" onSubmit={calculateBMI}>
            <div className="form-group">
              <label htmlFor="height" className="form-label">Height (cm)</label>
              <input
                type="number"
                id="height"
                name="height"
                className="form-input"
                value={formData.height}
                onChange={handleChange}
                min="100"
                max="250"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="weight" className="form-label">Weight (kg)</label>
              <input
                type="number"
                id="weight"
                name="weight"
                className="form-input"
                value={formData.weight}
                onChange={handleChange}
                min="30"
                max="300"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="gender" className="form-label">Gender</label>
              <select
                id="gender"
                name="gender"
                className="form-input"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            
            <button type="submit" className="btn btn-primary">
              Calculate BMI
            </button>
            
            {bmi && (
              <div className="bmi-result">
                <h3>Your BMI: {bmi}</h3>
                <p>Category: {category}</p>
              </div>
            )}
          </form>
          
          <div>
            <img src="/bmi.jpg" alt="BMI Chart" className="bmi-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
//D:\AB Projects\GYM\frontend\src\components\BMICalculator.jsx