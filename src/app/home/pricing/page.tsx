import React from "react";

const Page: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 mt-0">
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 w-[90%] max-w-lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-6">
          Our Pricing Plans
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b pb-3">
            <span className="text-lg font-medium text-gray-700">1 Month</span>
            <span className="text-xl font-bold text-gray-800">₹499</span>
          </div>
          <div className="flex justify-between items-center border-b pb-3">
            <span className="text-lg font-medium text-gray-700">Quarterly (3 Months)</span>
            <span className="text-xl font-bold text-gray-800">₹999</span>
          </div>
          <div className="flex justify-between items-center border-b pb-3">
            <span className="text-lg font-medium text-gray-700">6 Months</span>
            <span className="text-xl font-bold text-gray-800">₹1799</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium text-gray-700">Yearly (12 Months)</span>
            <span className="text-xl font-bold text-gray-800">₹3000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
