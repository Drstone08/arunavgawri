import React from "react";
import test from "../assets/test.png";

const Card = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 m-8 p-2 mr-[60px] sm:mr-[200px]">
      {/* Project Card 1 */}
      <div className="flex flex-col sm:w-[300px] md:w-[350px] w-[300px] border-2 border-gray-300 h-full">
        <img src={test} alt="project" className="h-[250px] object-cover" />
        <p className="text-center border-y-2 p-1 text-gray-400 font-mono font-black text-2xl">
          Next Tailwind
        </p>
        <div className="flex flex-col m-2 gap-2">
          <h1 className="text-2xl md:text-3xl font-ibmplex text-slate-100">
            Anime Watch
          </h1>
          <p className="text-sm md:text-base text-slate-300 font-ibmplex">
            Integrated Next.js with Tailwind CSS to build a responsive and
            efficient web application.
          </p>
          <button className="flex items-center justify-center w-[100px] h-[40px] text-sm md:text-lg text-gray-300 border border-violet-500 hover:text-white font-opensans relative overflow-hidden group">
            Live
            <span className="ml-2">
              {"<"}
              <svg
                width="24"
                height="12"
                viewBox="0 0 200 100"
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block"
              >
                <path
                  d="M10,50 Q30,10 50,50 T90,50 T130,50 T170,50"
                  stroke="white"
                  fill="rgba(255, 255, 255, 0.6)"
                  strokeWidth="2"
                />
              </svg>
              {">"}
            </span>
            <span className="absolute inset-0 bg-pink-200 opacity-0 group-hover:opacity-30 transition-all duration-300"></span>
          </button>
        </div>
      </div>

      {/* Project Card 2 */}
      <div className="flex flex-col sm:w-[300px] md:w-[350px] w-[300px] border-2 border-gray-300 h-full">
        <img src={test} alt="project" className="h-[250px] object-cover" />
        <p className="text-center border-y-2 p-1 text-gray-400 font-mono font-black text-2xl">
          Python ML
        </p>
        <div className="flex flex-col m-2 gap-2">
          <h1 className="text-2xl md:text-3xl font-ibmplex text-slate-100">
            IPL Team Win Prediction
          </h1>
          <p className="text-sm md:text-base text-slate-300 font-ibmplex">
            Achieved 74% accuracy in predicting IPL match outcomes using
            logistic regression.
          </p>
          <button className="flex items-center justify-center w-[100px] h-[40px] text-sm md:text-lg text-gray-300 border border-violet-500 hover:text-white font-opensans relative overflow-hidden group">
            Live
            <span className="ml-2">
              {"<"}
              <svg
                width="24"
                height="12"
                viewBox="0 0 200 100"
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block"
              >
                <path
                  d="M10,50 Q30,10 50,50 T90,50 T130,50 T170,50"
                  stroke="white"
                  fill="rgba(255, 255, 255, 0.6)"
                  strokeWidth="2"
                />
              </svg>
              {">"}
            </span>
            <span className="absolute inset-0 bg-pink-200 opacity-0 group-hover:opacity-30 transition-all duration-300"></span>
          </button>
        </div>
      </div>

      {/* Project Card 3 */}
      <div className="flex flex-col sm:w-[300px] md:w-[350px] w-[300px] border-2 border-gray-300 h-full">
        <img src={test} alt="project" className="h-[250px] object-cover" />
        <p className="text-center border-y-2 p-1 text-gray-400 font-amatic font-black text-2xl">
          Tech Stack
        </p>
        <div className="flex flex-col m-2 gap-2">
          <h1 className="text-2xl md:text-3xl font-pacifico text-slate-100">
            Title
          </h1>
          <p className="text-sm md:text-base text-slate-300 font-ibmplex">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Drhhedrf.
          </p>
          <button className="flex items-center justify-center w-[100px] h-[40px] text-sm md:text-lg text-gray-300 border border-violet-500 hover:text-white font-opensans relative overflow-hidden group">
            Live
            <span className="ml-2">
              {"<"}
              <svg
                width="24"
                height="12"
                viewBox="0 0 200 100"
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block"
              >
                <path
                  d="M10,50 Q30,10 50,50 T90,50 T130,50 T170,50"
                  stroke="white"
                  fill="rgba(255, 255, 255, 0.6)"
                  strokeWidth="2"
                />
              </svg>
              {">"}
            </span>
            <span className="absolute inset-0 bg-pink-200 opacity-0 group-hover:opacity-30 transition-all duration-300"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
