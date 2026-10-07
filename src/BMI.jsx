import React, { useState } from "react";
import "./BMI.css";

function BMI() {

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const calculateBMI = () => {

    if (weight === "" || height === "") {
      setError("Please enter both weight and height");
      setBmi("");
      setMessage("");
      return;
    }

    if (weight <= 0 || height <= 0) {
      setError("Please enter valid values");
      setBmi("");
      setMessage("");
      return;
    }

    const bmiValue = weight / (height * height);

    setBmi(bmiValue.toFixed(2));
    setError("");

    if (bmiValue < 18.5) {
      setMessage("Underweight");
    } 
    else if (bmiValue < 24.9) {
      setMessage("Normal weight");
    } 
    else if (bmiValue < 29.9) {
      setMessage("Overweight");
    } 
    else {
      setMessage("Obese");
    }
  };

  return (
    <div className="bmi-page">

      <div className="bmi-card">

        <h1>BMI Calculator</h1>

        <p className="subtitle">
          Check your Body Mass Index
        </p>

        {/* Weight */}

        <div className="input-group">

          <label>Weight</label>

          <div className="input-box">

            <input
              type="number"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />

            <span>kg</span>

          </div>

        </div>

        {/* Height */}

        <div className="input-group">

          <label>Height</label>

          <div className="input-box">

            <input
              type="number"
              placeholder="Enter your height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />

            <span>m</span>

          </div>

        </div>

        {/* Button */}

        <button onClick={calculateBMI}>
          Calculate BMI
        </button>

        {/* Error */}

        {error && (
          <p className="error">
            {error}
          </p>
        )}

        {/* Result */}

        {bmi && (
          <div className="result">

            <p className="result-title">
              Your BMI
            </p>

            <h2>{bmi}</h2>

            <p className="bmi-message">
              {message}
            </p>

          </div>
        )}

      </div>

    </div>
  );
}

export default BMI;