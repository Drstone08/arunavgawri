import React from "react";
import { FaGamepad, FaWhatsapp } from "react-icons/fa";
import Head from "./Head";

const Contact = () => {
  return (
    <div className="w-full my-5 pb-10 px-4">
      <Head name="Contact" />
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 pt-[50px]">
        {/* Left Section */}
        <div className="flex flex-col w-full lg:w-[50%] p-4 lg:p-10">
          <p className="text-gray-500 mb-4 font-mono text-sm md:text-base leading-relaxed">
            I’m a software engineer with a passion for technology and design. I
            have worked on various projects, including web development, mobile
            app development, and UI/UX design.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col w-full lg:w-[30%] p-6 border-2 border-gray-400 shadow-md text-gray-500 font-[Roboto_Mono] space-y-4">
          <h1 className="text-lg font-semibold text-gray-700">Message Me Here</h1>
          <div className="flex items-center space-x-2">
            <FaWhatsapp className="text-green-500" />
            <span className="text-sm md:text-base">+91 9896194034</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaGamepad className="text-purple-500" />
            <span className="text-sm md:text-base">arunavgawri@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
