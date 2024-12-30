import React from "react";
import test from "../assets/test.png";

const Card = () => {
  return (
    <div className="flex flex-row m-8 mr-0 p-2 gap-4 overflow-hidden">
      {/* Other project cards */}

      <div className="flex flex-col m-1 w-[350px] border-2 border-gray-300 h-full">
        <img src={test} alt="project" className="h-[250px] object-cover" />
        <p className="text-center border-y-2 p-1 text-gray-400 font-amatic font-black text-2xl">
          techstack
        </p>
        <div className="flex flex-col m-2 gap-1 p-1">
          <h1 className="text-3xl font-pacifico text-slate-100">Title</h1>
          <p className="text-base text-slate-300 font-ibmplex">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div>
            <button className="flex items-center justify-center w-[100px] h-[40px] text-lg text-gray-300 border border-violet-500 hover:text-white font-opensans relative overflow-hidden group">
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
      <div className="flex flex-col m-1 w-[350px] border-2 border-gray-300 h-full">
        <img src={test} alt="project" className="h-[250px] object-cover" />
        <p className="text-center border-y-2 p-1 text-gray-400 font-amatic font-black text-2xl">
          techstack
        </p>
        <div className="flex flex-col m-2 gap-1 p-1">
          <h1 className="text-3xl font-pacifico text-slate-100">Title</h1>
          <p className="text-base text-slate-300 font-ibmplex">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.gr
          </p>
          <div>
            <button className="flex items-center justify-center w-[100px] h-[40px] text-lg text-gray-300 border border-violet-500 hover:text-white font-opensans relative overflow-hidden group">
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
      <div className="flex flex-col m-1 w-[350px] border-2 border-gray-300 h-full">
        <img src={test} alt="project" className="h-[250px] object-cover" />
        <p className="text-center border-y-2 p-1 text-gray-400 font-amatic font-black text-2xl">
          techstack
        </p>
        <div className="flex flex-col m-2 gap-1 p-1">
          <h1 className="text-3xl font-pacifico text-slate-100">Title</h1>
          <p className="text-base text-slate-300 font-ibmplex">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.drhhedrf
          </p>
          <div>
            <button className="flex items-center justify-center w-[100px] h-[40px] text-lg text-gray-300 border border-violet-500 hover:text-white font-opensans relative overflow-hidden group">
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
    

      {/* Last div with overflow */}
      <div
        className="h-[200px] w-[200px] overflow-hidden border-2 border-gray-300 mt-20"
        style={{
          position: "relative",
          transform: "translateX(50%)", // Push half of the div outside
        }}
      ></div>
    </div>
  );
};

export default Card;
