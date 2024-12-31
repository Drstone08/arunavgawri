import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons"; // Import the hand-point-right icon
import Card from "./Card";
import Head from "./Head";

const Works = () => {
  return (
    <div className="w-full my-24">
      <Head name='Projects' />
      <Card />
    </div>
  );
};
{/* <button className="text-2xl ml-[350px] text-gray-500 font-patrick flex items-center hover:text-gray-300 transition duration-200">
  View all
  <FontAwesomeIcon
    icon={faHandPointRight}
    className="ml-2 text-2xl"
    style={{ color: "pink" }}
  />{" "}
  {/* Hand-point-right icon */}
// </button> */}

export default Works;
