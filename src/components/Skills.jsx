import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <div className="w-full my-24">
      <div className="flex flex-row items-center">
        <h1 className="text-3xl font-firacode text-gray-500">
          <span className="text-violet-500">#</span>
          Skills
        </h1>
        <div className="h-[2px] mt-2 w-[500px] bg-violet-500"></div>
      </div>
      <div className="flex flex-row">
        <div className="w-[400px] h-[300px] flex justify-center items-center">
          <div className="relative w-full h-full flex flex-wrap items-center justify-center">
            {/* Top-left grid */}
            <div className="absolute top-10 left-10 grid grid-cols-5 gap-2">
              {[...Array(25)].map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 bg-gray-500 rounded-full"
                ></div>
              ))}
            </div>

            {/* Top-right square */}
            <div className="absolute top-10 right-10 w-20 h-20 border-2 border-gray-300"></div>

            {/* Bottom-left overlapping squares */}
            <div className="absolute bottom-20 left-20 space-x-2">
              <div className="absolute top-0 left-0 w-20 h-20 border-2 border-purple-500"></div>
              <div className="absolute top-4 left-4 w-20 h-20 border-2 border-purple-500"></div>
            </div>

            {/* Bottom-right grid */}
            <div className="absolute bottom-10 right-10 grid grid-cols-5 gap-2">
              {[...Array(25)].map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 bg-gray-500 rounded-full"
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-5 m-6 ml-20">
          <div className="flex flex-col border-2 border-gray-500 h-max w-[200px] rounded">
            <h1 className="text-2xl font-sourcecode text-violet-600 p-1 text-center font-semibold">
              Language
            </h1>
            <p className="border-t-2 border-gray-500 text-slate-300 p-1 text-lg font-ibmplex text-center">
              C C++<br></br>Python Java
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col border-2 border-gray-500 h-max w-[200px] rounded">
              <h1 className="text-2xl font-sourcecode text-violet-600 p-1 text-center font-semibold">
                Language
              </h1>
              <p className="border-t-2 border-gray-500 text-slate-300 p-1 text-lg font-ibmplex text-center">
                C C++<br></br>Python Java
              </p>
            </div>
            <div className="flex flex-col border-2 border-gray-500 h-max w-[200px] rounded">
              <h1 className="text-2xl font-sourcecode text-violet-600 p-1 text-center font-semibold">
                Language
              </h1>
              <p className="border-t-2 border-gray-500 text-slate-300 p-1 text-lg font-ibmplex text-center">
                C C++<br></br>Python Java
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col border-2 border-gray-500 h-max w-[200px] rounded ">
              <h1 className="text-2xl font-sourcecode text-violet-600 p-1 text-center font-semibold">
                Language
              </h1>
              <p className="border-t-2 border-gray-500 text-slate-300 p-1 text-lg font-ibmplex text-center">
                C C++<br></br>Python Java
              </p>
            </div>
            <div className="flex flex-col border-2 border-gray-500 h-max w-[200px] rounded">
              <h1 className="text-2xl font-sourcecode text-violet-600 p-1 text-center font-semibold">
                Language
              </h1>
              <p className="border-t-2 border-gray-500 text-slate-300 p-1 text-lg font-ibmplex text-center">
                C C++<br></br>Python Java
              </p>
            </div>
            <div className="flex flex-col border-2 border-gray-500 h-max w-[200px] rounded">
              <h1 className="text-2xl font-sourcecode text-violet-600 p-1 text-center font-semibold">
                Language
              </h1>
              <p className="border-t-2 border-gray-500 text-slate-300 p-1 text-lg font-ibmplex text-center">
                C C++<br></br>Python Java
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
