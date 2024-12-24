'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-10 bg-gray-100 shadow-md">
        <div className="container mx-auto flex justify-center items-center py-4 px-6">
          {/* Logo and Name */}
          <Link
            href="/"
            className="text-2xl font-bold flex items-center text-gray-800"
          >
            <Image
              src="/Gym-Logo.png"
              alt="Gym Logo"
              width={55} // Logo size
              height={55}
              className="mr-2"
            />
            GYM BOOK
          </Link>
        </div>
      </nav>

      {/* Added space below the navbar */}
      <div className="pt-2"></div>
    </>
  );
};

export default Navbar;
