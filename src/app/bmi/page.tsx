'use client'
import React, { useState } from "react";

const Page: React.FC = () => {
  const [weight, setWeight] = useState<number | string>(""); // Changed initial state to empty string
  const [height, setHeight] = useState<number | string>(""); // Changed initial state to empty string
  const [bmi, setBmi] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");
  const [clicked, setClicked] = useState<boolean>(false); // Track if the button was clicked

  const calculateBMI = () => {
    if (Number(weight) > 0 && Number(height) > 0) {
      const bmiValue = Number(weight) / Math.pow(Number(height) / 100, 2);
      setBmi(bmiValue);
      provideSuggestion(bmiValue);
      setClicked(true); // Set clicked to true after calculation
    }
  };

  const provideSuggestion = (bmiValue: number) => {
    if (bmiValue < 18.5) {
      setMessage("Your BMI is low. We suggest weight-gaining exercises like: Squats, Deadlifts, and Bench Press.");
    } else if (bmiValue >= 25) {
      setMessage("Your BMI is high. We recommend weight-loss exercises like: Running, Cycling, and Jump Rope.");
    } else {
      setMessage("Nice buddy, you look great with a perfect BMI! We recommend strength-building exercises like: Push-ups, Pull-ups, and Squats.");
    }
  };

  // Reset the BMI result and message if user modifies the weight or height
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<number | string>>) => {
    setter(e.target.value);
    setClicked(false); // Reset clicked when the user modifies input
    setBmi(null); // Hide BMI result
    setMessage(""); // Clear message
  };

  return (
    <div className="bg-gray-50 text-gray-800 flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-3xl font-bold text-center mb-6">BMI Calculator</h1>

        {/* Input Fields */}
        <div className="space-y-4">
          <div>
            <label htmlFor="weight" className="block text-lg font-medium">Weight (kg)</label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => handleInputChange(e, setWeight)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              placeholder="Enter your body weight"
              required
            />
          </div>

          <div>
            <label htmlFor="height" className="block text-lg font-medium">Height (cm)</label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => handleInputChange(e, setHeight)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              placeholder="Enter your height"
              required
            />
          </div>

          <button
            onClick={calculateBMI}
            className="w-full mt-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
          >
            Calculate BMI
          </button>
        </div>

        {/* Result & Suggestions */}
        {clicked && bmi !== null && (
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-semibold">Your BMI: {bmi.toFixed(2)}</h2>
            <p className="mt-4 text-gray-600">{message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
