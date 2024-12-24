'use client';
import React, { useState, FormEvent } from "react";

const Page: React.FC = () => {
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [otp, setOtp] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle OTP login logic here
    console.log("Logging in with", mobileNumber, otp);
  };

  return (
    <div className="bg-gray-50 text-gray-800 flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Mobile Number Input */}
          <div>
            <label htmlFor="mobileNumber" className="block text-lg font-medium">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              placeholder="Enter your mobile number"
              required
              pattern="[0-9]{10}" // Ensure only valid 10-digit numbers
            />
          </div>

          {/* OTP Input */}
          <div>
            <label htmlFor="otp" className="block text-lg font-medium">
              OTP
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              placeholder="Enter OTP"
              required
              pattern="[0-9]{6}" // Assuming OTP is 6 digits
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full mt-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Didn't receive an OTP?{" "}
            <button
              type="button"
              className="text-blue-600 hover:text-blue-800 focus:outline-none"
              onClick={() => console.log("Resend OTP")}
            >
              Resend
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
