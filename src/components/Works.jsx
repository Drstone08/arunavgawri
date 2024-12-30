import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons"; // Import the hand-point-right icon
import Card from "./Card";

const Works = () => {
  return (
    <div className="w-full my-24">
      <div className="flex flex-row items-center">
        <h1 className="text-3xl font-firacode text-gray-500">
          <span className="text-violet-500">#</span>
          Projects</h1>
        <div className="h-[2px] mt-2 w-[500px] bg-violet-500"></div>
        <button className="text-2xl ml-[350px] text-gray-500 font-patrick flex items-center hover:text-gray-300 transition duration-200">
          View all
          <FontAwesomeIcon
            icon={faHandPointRight}
            className="ml-2 text-2xl"
            style={{ color: "pink" }}
          />{" "}
          {/* Hand-point-right icon */}
        </button>
      </div>
      <Card />
    </div>
  );
};

export default Works;
