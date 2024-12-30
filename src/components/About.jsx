import React from "react";
import photo from "../assets/myphoto.png";

const About = () => {
  return (
    <div className="w-full my-5 ">
      <div className="flex flex-row items-center">
        <h1 className="text-3xl font-firacode text-gray-500">
          <span className="text-violet-500">#</span>
          About-me
        </h1>
        <div className="h-[2px] mt-2 w-[500px] bg-violet-500"></div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col w-[50%] p-10 m-5">
          <h1 className="text-2xl font-firacode text-gray-400 mb-4">
            Hello, I’m Arunav!
          </h1>
          <p className="text-gray-500 mb-4 w-[500px] font-mono">
            I’m a software engineer with a passion for technology and design. I
            have worked on various projects, including web development, mobile
            app development, and UI/UX design. Lorem ipsum dolor sit amet
            consectetur adipisicingNecessitatibus explicabo fugiat voluptates
            quibusdam, perferendis voluptate quasi magni sint.
          </p>
          <p className="text-gray-500 mb-6 pr-6 w-[500px] font-mono">
            I am currently open to opportunities for collaboration and growth.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            tempora accusantium laboriosam sapiente ratione praesentium,
            eligendi vitae ores quo! Let’s build something amazing together!
          </p>
          <button className="flex items-center w-[130px] px-3 py-2 border border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-white hover:shadow-lg transition-all duration-300 animate-pulse accent-indigo-300">
            Read More <span className="ml-2">→</span>
          </button>
        </div>

        <div className="relative w-[50%] h-[400px] mt-[50px]">
          {/* Dots Overlay (Behind the Image) */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            {/* Left Dots */}
            <div className="absolute top-20 left-20 grid grid-cols-4 gap-3">
              {[...Array(20)].map((_, index) => (
                <span
                  key={index}
                  className="w-1.5 h-1.5 bg-violet-500 rounded-full"
                ></span>
              ))}
            </div>

            {/* Right Dots */}
            <div className="absolute bottom-20 right-10 grid grid-cols-3 gap-3 overflow-hidden">
              {[...Array(30)].map((_, index) => (
                <span
                  key={index}
                  className="w-2 h-2 bg-violet-500 rounded-full"
                ></span>
              ))}
            </div>
          </div>

          {/* Background Image */}
          <img
            src={photo}
            alt="Stylish Hooded Person"
            className="w-full h-full object-contain relative z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
