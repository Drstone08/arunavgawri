import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Head = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="flex flex-col sm:flex-row sm:items-center"
    >
      <h1 className="text-3xl font-firacode text-gray-500 relative text-center sm:text-left sm:mr-0 mr-[90px]">
        <span className="text-violet-500">#</span>
        {props.name}
      </h1>
      <motion.div
        className="h-[2px] bg-violet-500 mt-2 sm:ml-4"
        style={{ width: isInView ? "70%" : "0%" }}
        animate={{ width: isInView ? "70%" : "0%" }}
        initial={{ width: "0%" }}
        transition={{ duration: 3, ease: "easeInOut" }}
      />
    </div>
  );
};

export default Head;
