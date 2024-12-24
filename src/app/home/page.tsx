'use client';

import React from "react";
import { useRouter } from "next/navigation"; // Correct import for App Router

const Home: React.FC = () => {
  const router = useRouter();

  // Function to navigate to specific pages
  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-10 text-gray-800">Choose Your Level</h1>

      {/* Cards */}
      <div className="space-y-6 w-full max-w-md">
        {/* Beginner Card */}
        <div
          className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden cursor-pointer"
          onClick={() => navigateTo("/home/beginner")}
        >
          <video
            src="/4.mp4" // Replace with the actual path to the video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          ></video>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h2 className="text-3xl font-bold text-white uppercase">Beginner</h2>
          </div>
        </div>

        {/* Intermediate Card */}
        <div
          className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden cursor-pointer"
          onClick={() => navigateTo("/home/intermediate")}
        >
          <video
            src="/2.mp4" // Replace with the actual path to the video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          ></video>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h2 className="text-3xl font-bold text-white uppercase">Intermediate</h2>
          </div>
        </div>

        {/* Expert Card */}
        <div
          className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden cursor-pointer"
          onClick={() => navigateTo("/home/expert")}
        >
          <video
            src="/1.mp4" // Replace with the actual path to the video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          ></video>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h2 className="text-3xl font-bold text-white uppercase">Expert</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
