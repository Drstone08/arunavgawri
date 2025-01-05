import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="custom-cursor-wrapper">
      {/* Glowing Cursor Effect */}
      <div
        className="fixed pointer-events-none rounded-full"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: "20px",
          height: "20px",
          backgroundColor: "rgba(255, 0, 0, 0.5)", // Red glow color
          boxShadow: "0 0 15px 5px rgba(255, 0, 0, 0.5)", // Outer glow
          transform: "translate(-50%, -50%)",
          transition: "transform 0.1s ease-out", // Smooth movement
        }}
      />
    </div>
  );
};

export default CustomCursor;
