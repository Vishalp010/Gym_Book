// src/app/page.tsx
'use client';
import React, { useState, FormEvent } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage: React.FC = () => {
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [otpSent, setOtpSent] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!otpSent) {
      // Send OTP to the mobile number
      const response = await fetch("/api/auth/sendOtp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobileNumber }),
      });

      const data = await response.json();
      if (data.success) {
        setOtpSent(true);
        setError(null);
        console.log("OTP sent to mobile number");
      } else {
        setError("Error sending OTP. Please try again.");
      }
    } else {
      // Validate OTP and sign in the user
      const result = await signIn("credentials", {
        redirect: false,
        mobileNumber,
        otp,
      });

      if (result?.error) {
        setError(result.error);
      } else {
        // Redirect to home page on successful OTP validation
        router.push("/home");
      }
    }
  };

  return (
    <div className="bg-gray-50 text-gray-800 flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Mobile Number Input */}
          {!otpSent && (
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
                pattern="[0-9]{10}"
              />
            </div>
          )}

          {/* OTP Input */}
          {otpSent && (
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
                pattern="[0-9]{6}"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
          >
            {otpSent ? "Validate OTP" : "Send OTP"}
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

export default LoginPage;
