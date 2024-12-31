import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Head = (props) => {
  const ref = useRef(null); 
  const isInView = useInView(ref, { once: true }); 

  return (
    <div ref={ref} className="flex flex-row items-center">
      <h1 className="text-3xl font-firacode text-gray-500">
        <span className="text-violet-500">#</span>
        {props.name}
      </h1>
      <motion.div
        className="h-[2px] mt-2 w-[500px] bg-violet-500"
        animate={isInView ? { width: "500px" } : { width: "0px" }}
        initial={{ width: "0px" }} 
        transition={{ duration: 2, ease: "easeInOut" }} 
      />
    </div>
  );
};

export default Head;
