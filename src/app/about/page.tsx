import React from "react";

const Page = () => {
  return (
    <div className="bg-gray-50 text-gray-800 flex flex-col items-center justify-center h-screen px-4 sm:px-6 md:px-8">
      <div className="flex flex-col items-center justify-center w-full text-center space-y-6">
        {/* Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-light font-mono text-gray-600">
          About Us
        </h1>

        {/* Paragraph with responsive text */}
        <p className="text-base sm:text-lg md:text-xl mx-4 sm:mx-6 max-w-4xl">
          At <span className="font-bold text-gray-800">GYM</span>, we are committed to helping you achieve your fitness goals
          with personalized training and state-of-the-art equipment. Whether
          you're a beginner or an experienced athlete, our expert trainers are
          here to guide and motivate you every step of the way. Our gym offers a
          welcoming and supportive environment, where members can focus on
          building strength, improving endurance, and enhancing overall well-being.
          With flexible membership options and a wide range of fitness classes,
          <span className="font-bold text-gray-800">GYM</span> is more than just a place to work out—it's a community dedicated
          to your fitness journey. Join us today and start transforming your life!
        </p>
      </div>
    </div>
  );
};

export default Page;
