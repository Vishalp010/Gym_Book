import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-10 flex flex-col justify-between items-center text-white bg-gray-100 ">
      <div className="container mx-auto flex justify-between text-xl items-center py-4 px-6">
        <Link href="/" className="text-2xl font-bold hover:text-gray-300 flex items-center">
          GYM
          <Image
            src="/Gym-Logo.png"
            alt="Gym Logo"
            width={45}
            height={45}
            className=" mr-2"
          />
        </Link>
        <div className="flex justify-between items-center w-[170px]">
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
        <Link href="/login" className="hover:text-gray-300">
          Login
        </Link>
      </div>
      <div className="w-full">
        <hr className="border-t-[0.5px] border-gray-400 w-full" />
      </div>
    </nav>
  );
};

export default Navbar;
