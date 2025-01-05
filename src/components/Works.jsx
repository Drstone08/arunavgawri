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

export default Works;
