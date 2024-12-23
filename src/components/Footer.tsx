import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex w-[100%] flex-col pt-1 items-center bg-gray-100">
      <div className="w-full">
        <hr className="border-t-[0.5px] border-gray-400 w-full" />
      </div>

      {/* upar wale faqs and all wala main div */}
      <div className="w-[80%] flex h-[200px]">
        <div className="flex flex-col h-full w-[30%] m-3">
          <div className="text-3xl font-bold m-3 p-2 flex items-center">
            GYM
            <Image
              src="/Gym-Logo.png"
              alt="Gym Logo"
              width={40}
              height={40}
              className="mr-2"
            />
          </div>
          <p className="font-thin font-serif text-gray-600">
            The gym fosters strength, resilience, and discipline, empowering
            individuals to achieve physical and mental goals.
          </p>
          <Link
            className="m-1 p-1 text-gray-400 font-thin font-serif"
            href="https://www.instagram.com/ivishaldangi/"
            target="_blank"
          >
            Instagram
          </Link>
        </div>

        {/* Vertical Line */}
        <div className="w-[0.5px] h-[80] bg-gray-400"></div>

        <div className="flex m-3 p-4 w-[70%] h-full justify-evenly font-serif font-thin">
          <div className="flex flex-col p-3">
            <h1 className="text-xl">COMPANY</h1>
            <Link href="/" className="font-[5px]">
              Home
            </Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="flex flex-col p-3">
            <h1 className="text-xl">SUPPORT</h1>
            <Link href="/faqs">FAQs</Link>
          </div>
        </div>
      </div>

      {/* beech line */}
      <div className="w-[70%]">
        <hr className="border-t-[0.5px] border-gray-400 relative" />
      </div>

      {/* neeche ki privacy wala div */}
      <div className="w-[80%] flex items-center justify-center m-0.5 text-gray-400 font-extralight text-xs cursor-pointer">
        <div className="pr-5">
          <span className="mr-5">Terms and conditions</span>
          <span>Privacy Policy</span>
        </div>
        <div>
          <span>
            site by{" "}
            <a href="https://www.instagram.com/ivishaldangi/" target="_blank">
              Vishal
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
