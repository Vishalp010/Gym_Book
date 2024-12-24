import React from "react";
import Head from "next/head";

const Page = () => {
  return (
    <div>
      <Head>
        {/* Importing Google Fonts directly */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Poppins:wght@300;400;600&family=Lora:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-gray-800">
        {/* Main Title */}
        <h1 className="text-6xl sm:text-7xl md:text-9xl font-light font-poppins text-center text-gray-600">
          Contact
        </h1>

        {/* Subtitle */}
        <h1 className="font-lora text-lg sm:text-xl text-center mt-4">
          Get in touch with the right people at
        </h1>
        <h1 className="font-lora text-lg sm:text-xl text-center">
          GYM to answer any questions
        </h1>
        <h1 className="font-lora text-lg sm:text-xl text-center mb-8">
          or general inquiries
        </h1>

        {/* Contact Box */}
        <div className="border-2 border-gray-300 p-8 rounded-xl shadow-lg w-3/4 sm:w-2/3 md:w-1/2 bg-white">
          <h1 className="text-2xl font-semibold text-center text-gray-500 mb-4">
            Have questions or need additional help?
          </h1>
          <h1 className="text-xl text-center text-gray-600 mb-2">
            Give us a call.
          </h1>
          <h1 className="text-xl font-bold text-center text-gray-800 mb-4">
            +91 9650466390
          </h1>
          <h1 className="text-sm sm:text-base text-center text-gray-500">
            Mon-Fri 9:00am - 6:00pm EST
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Page;
