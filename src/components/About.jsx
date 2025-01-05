import React from "react";
import photo from "../assets/myphoto.png";
import Head from "../components/Head";

const About = () => {
  return (
    <div className="w-full my-5">
      <Head name="About" />
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
        {/* Left Section */}
        <div className="flex flex-col w-full lg:w-[50%] p-4 lg:p-10">
          <h1 className="text-2xl font-firacode text-gray-400 mb-4">
            Hello, I’m Arunav!
          </h1>
          <p className="text-gray-500 mb-4 font-mono text-sm md:text-base">
            I’m a software engineer with a passion for technology and design. I
            have a strong foundation in Data Structures and Algorithms (DSA) and
            expertise in web development and UI/UX design. Currently, I’m a
            pre-final year student at the National Institute of Technology,
            Kurukshetra, pursuing a degree in Information Technology. I have
            worked on various projects, both individual and team-based,
            showcasing my skills in creating innovative solutions. Additionally,
            I am an active member of the Technobyte Society at my college, where
            I collaborate with peers to explore cutting-edge technology and
            develop impactful projects.
          </p>
          <p className="text-gray-500 mb-6 pr-6 font-mono text-sm md:text-base">
            I am currently open to opportunities for collaboration and growth.
            Let’s build something amazing together! Whether it’s a challenging
            technical problem or an exciting design concept, I’m eager to
            contribute my skills and learn along the way.
          </p>

          <button className="flex items-center w-[130px] px-3 py-2 border border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-white hover:shadow-lg transition-all duration-300 animate-pulse accent-indigo-300">
            Read More <span className="ml-2">→</span>
          </button>
        </div>

        {/* Right Section */}
        <div className="relative w-full lg:w-[50%] h-[400px] mt-8 lg:mt-0">
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
            style={{ maxWidth: '400px', maxHeight: '400px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
