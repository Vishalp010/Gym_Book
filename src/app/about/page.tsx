import React from "react";

const Page = () => {
  return (
    <div className="bg-gray-50 text-gray-800 flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center w-full text-center space-y-6">
        <h1 className="text-9xl font-light font-mono">About Us</h1>
        <p className="text-lg font-light mx-4 max-w-3xl">
          At GYM, we are committed to helping you achieve your fitness goals
          with personalized training and state-of-the-art equipment. Whether
          you're a beginner or an experienced athlete, our expert trainers are
          here to guide and motivate you every step of the way. Our gym offers a
          welcoming and supportive environment, where members can focus on
          building strength, improving endurance, and enhancing overall well-being.
          With flexible membership options and a wide range of fitness classes,
          GYM is more than just a place to work out—it's a community dedicated
          to your fitness journey. Join us today and start transforming your life!
        </p>
      </div>
    </div>
  );
};

export default Page;
