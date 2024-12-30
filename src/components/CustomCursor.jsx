import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Generate a new particle
      const newParticle = {
        id: Math.random(),
        x: e.clientX,
        y: e.clientY,
      };
      setParticles((prev) => [...prev, newParticle]);

      // Remove particles after a short delay
      setTimeout(() => {
        setParticles((prev) => prev.filter((particle) => particle.id !== newParticle.id));
      }, 500);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="custom-cursor-wrapper">
      {/* Sparkle Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed w-2 h-2 bg-white rounded-full pointer-events-none"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            animation: "sparkle 500ms ease-out",
          }}
        />
      ))}

      {/* Sparkle Animation */}
      <style>
        {`
          @keyframes sparkle {
            0% {
              opacity: 1;
              transform: scale(1) translate(-50%, -50%);
            }
            100% {
              opacity: 0;
              transform: scale(3) translate(-50%, -50%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default CustomCursor;
