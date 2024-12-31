import React from "react";
import logo from "../assets/logo.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="border-t-2 border-gray-500 h-[200px] flex flex-col font-poppins text-gray-400">
      <div className="flex flex-row justify-between px-[200px] py-8">
        {/* Left Section: Logo and About */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="w-8 h-8" />
            <h1 className="text-3xl text-gray-300 font-patrick">
              Arunav Gawri
            </h1>
          </div>
          <p className="text-lg leading-relaxed">Web Developer and Designer</p>
        </div>

        {/* Right Section: Social Media */}
        <div className="flex flex-col items-center gap-4 pr-[100px]">
          <h1 className="text-2xl font-bold font-mono text-violet-600">
            Media
          </h1>
          <div className="flex gap-6">
            <FaInstagram
              onClick={() =>
                window.open(
                  "https://www.instagram.com/arunavgawri/?__pwa=1",
                  "_blank"
                )
              }
              className="text-3xl text-gray-500 hover:text-gray-300 transition duration-200 cursor-pointer"
            />
            <FaLinkedin
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/arunav-gawri-314897250",
                  "_blank"
                )
              }
              className="text-3xl text-gray-500 hover:text-gray-300 transition duration-200 cursor-pointer"
            />
            <FaGithub
              onClick={() =>
                window.open("https://github.com/Drstone08", "_blank")
              }
              className="text-3xl text-gray-500 hover:text-gray-300 transition duration-200 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex justify-center items-center pt-4 mb-2 -z-1">
        <p className="text-sm text-gray-500">
          {" "}
          &copy; Copyright 2025 Made By Arunav.
        </p>
      </div>
    </div>
  );
};

export default Footer;
