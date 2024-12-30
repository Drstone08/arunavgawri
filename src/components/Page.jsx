import React, { useState, useEffect } from "react";
import dots from "../assets/dots.png";
import myphoto2 from "../assets/myphoto2.png";

const Page = () => {
  const [displayText, setDisplayText] = useState(""); // The current text being displayed
  const [index, setIndex] = useState(0); // Index for current item in the list
  const items = ["Developer", "Designer", "Freelancer"]; // List of words
  const typingSpeed = 100; // Typing speed (ms per letter)
  const erasingSpeed = 50; // Erasing speed (ms per letter)
  const pauseBetweenItems = 1000; // Pause between items

  useEffect(() => {
    let typingTimeout;
    let erasingTimeout;
    const typeWriter = (word, i) => {
      if (i < word.length) {
        typingTimeout = setTimeout(() => {
          setDisplayText(word.slice(0, i + 1));
          typeWriter(word, i + 1);
        }, typingSpeed);
      } else {
        setTimeout(() => eraseWriter(word, word.length), pauseBetweenItems);
      }
    };

    const eraseWriter = (word, i) => {
      if (i > 0) {
        erasingTimeout = setTimeout(() => {
          setDisplayText(word.slice(0, i - 1));
          eraseWriter(word, i - 1);
        }, erasingSpeed);
      } else {
        setIndex((prevIndex) => (prevIndex + 1) % items.length);
      }
    };

    const currentWord = items[index];
    typeWriter(currentWord, 0);

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(erasingTimeout);
    };
  }, [index]);

  return (
    <div className="h-[400px] flex items-center justify-center relative px-4 mt-16">
      {/* Container for text and image */}
      <div className="flex w-full max-w-screen-xl mx-auto space-x-10  justify-center items-center mr-[150px]">
        {/* Text Content */}
        <div className="text-white flex-1 max-w-lg  p-8">
          <h1 className="text-4xl font-semibold font-poppins">
            Hey there! I'm
          </h1>
          <h1 className="text-5xl text-violet-500 font-bold mt-2 font-sourcecode">
            Arunav Gawri
          </h1>
          <h1 className="mt-4 text-3xl font-['JetBrains_Mono']">
            <ul className="space-y-2">
              <li>
                <span>{"<"}</span>
                {displayText}
                <span>{">"}</span>
              </li>
            </ul>
          </h1>
          <button className="font-poppins mt-6 px-6 py-2 border-violet-700 border-2 text-white text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-violet-500 relative overflow-hidden hover:text-slate-300">
            <span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-400 to-violet-800 opacity-0 transition-all duration-300 hover:opacity-100 hover:from-violet-400 "
              style={{
                backgroundSize: "200%",
                backgroundPosition: "center",
              }}
            ></span>
            <span className="relative z-10  transition-all">Contact me !!</span>
          </button>
        </div>

        <div className="flex flex-col items-center w-[500px] relative p-3 bg-transparent rounded-lg overflow-hidden">
          <div className="relative w-[350px] h-[350px] overflow-hidden">
            {/* Background net-like design */}
            <div className="absolute inset-0 opacity-50 animate-pulse-slow">
              <div className="grid grid-cols-10 grid-rows-10 h-full w-full">
                {Array.from({ length: 100 }).map((_, index) => (
                  <div
                    key={index}
                    className="border border-violet-700 animate-move-lines"
                  ></div>
                ))}
              </div>
            </div>

            {/* Image */}
            <img
              src={myphoto2}
              alt="myphoto"
              className="w-full h-full object-contain z-10 relative"
            />
          </div>

          <div className="flex flex-row items-center border-2 py-2 border-violet-500 w-[350px] px-1">
            <div className="h-4 w-4 mr-1 bg-pink-500 "></div>
            <h1 className="text-lg text-gray-200 font-mono">
              Currently working on{" "}
              <span className="font-semibold">Portfolio</span>..
            </h1>
          </div>
        </div>
      </div>

      {/* Image on the right side */}
      <div className="absolute right-0 top-[100px] w-[150px] h-[100px] overflow-hidden">
        <img src={dots} alt="dots" className="w-full h-full object-cover" />
      </div>
    </div>
    
    
  );
};

export default Page;
