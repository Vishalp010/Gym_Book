'use client';
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-10 bg-gray-100">
        <div className="container mx-auto flex justify-between items-center py-2 px-6">
          {/* Logo and Name */}
          <Link
            href="/home"
            className="text-2xl font-bold flex items-center text-gray-800"
          >
            <Image
              src="/Gym-Logo.png"
              alt="Gym Logo"
              width={55} // Updated logo size
              height={55}
              priority // Added priority property
              className="mr-2"
            />
            GYM BOOK
          </Link>

          {/* Hamburger for mobile */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              {/* Hamburger Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Links for larger screens */}
          <div className="hidden sm:flex items-center space-x-6">
            <Link href="/home/bmi" className="hover:text-gray-600 text-gray-800">
              BMI Calculator
            </Link>
            <Link href="/home/about" className="hover:text-gray-600 text-gray-800">
              About
            </Link>
            <Link href="/home/contact" className="hover:text-gray-600 text-gray-800">
              Contact
            </Link>
          </div>
        </div>

        {/* Dropdown Menu for mobile */}
        {isMenuOpen && (
          <div className="sm:hidden bg-gray-200">
            <div className="flex flex-col items-start py-2 px-6 space-y-2">
              <Link
                href="/home/bmi"
                className="w-full text-gray-800 hover:text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                BMI Calculator
              </Link>
              <Link
                href="/home/about"
                className="w-full text-gray-800 hover:text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/home/contact"
                className="w-full text-gray-800 hover:text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Added space below the navbar */}
      <div className="pt-20"></div>
    </>
  );
};

export default Navbar;
