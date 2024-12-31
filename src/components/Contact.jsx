import React from "react";
import { FaGamepad, FaMailBulk, FaMailchimp, FaWhatsapp } from "react-icons/fa";
import Head from "./Head";

const Contact = () => {
  return (
    <div className="w-full my-5 pb-10">
      <Head name='Contact' />
      <div className="flex flex-row items-start space-x-5">
        {/* Left Section */}
        <div className="flex flex-col w-[50%] p-10 m-5">
          <p className="text-gray-500 mb-4 w-[500px] font-mono leading-relaxed">
            I’m a software engineer with a passion for technology and design. I
            have worked on various projects, including web development, mobile
            app development, and UI/UX design. Lorem ipsum dolor sit amet.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col w-[20%] p-6 m-5 border-2 mt-8 font-sourcecode border-gray-400  shadow-md text-gray-500 font-[Roboto_Mono] space-y-4">
          <h1 className="text-lg text-slate-200">Message Me here</h1>
          <h1 className="flex items-center space-x-2">
            <FaWhatsapp className="text-green-500" />
            <span>+91 898236</span>
          </h1>
          <h1 className="flex items-center space-x-2">
            <FaGamepad className="text-purple-500" />
            <span>arunavgawri@gmail.com</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
