import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Page from "../components/Page";
import Works from "./Works";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaArrowUp,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";

function Home() {
  const [showIcons, setShowIcons] = useState(true); // State for showing icons
  const [showTopButton, setShowTopButton] = useState(false); // State for "Go to Top" button
  const ref = useRef(null);
  const inview = useInView(ref, { once: true });

  const handlescroll = () => {
    let heighttohide = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heighttohide) {
      setShowTopButton(true);
    } else {
      setShowTopButton(false);
    }
  };

  const handlesideicon = () => {
    let heighttohide = 2200;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heighttohide) {
      setShowIcons(false);
    } else {
      setShowIcons(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handlescroll);
    window.addEventListener("scroll", handlesideicon);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleresume = () => {
    window.open(
      "https://drive.google.com/file/d/1qaMePSoqspLgA88R6-fhXL1NRmNuc76v/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <div className="bg-[#272B34] min-h-screen w-full">
      {/* Fixed vertical icons */}
      <div
        className="fixed top-1/2 left-6 transform -translate-y-1/2 flex flex-col items-center space-y-5"
        ref={ref}
      >
        <motion.div
          className="border-r-2 h-[170px] border-gray-500 origin-top"
          initial={{ scaleY: 0 }} // Start with no height
          animate={showIcons ? { scaleY: 1 } : { scaleY: 0 }} // Shrink when `showIcons` is false
          transition={{ duration: 1.5, ease: "easeInOut" }} // Smooth transition
          exit={showIcons ? { scaleY: 0 } : { scaleY: 1 }}
        ></motion.div>
        <ul className="space-y-5">
          <li
            onClick={() =>
              window.open(
                "https://www.instagram.com/arunavgawri/?__pwa=1",
                "_blank"
              )
            }
          >
            <FaInstagram className="text-3xl text-gray-500 cursor-pointer hover:text-white transition-all duration-300 ease-in-out" />
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/arunav-gawri-314897250"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-3xl text-gray-500 cursor-pointer hover:text-white transition-all duration-300 ease-in-out" />
            </a>
          </li>
          <li
            onClick={() =>
              window.open("https://github.com/Drstone08", "_blank")
            }
          >
            <FaGithub className="text-3xl text-gray-500 cursor-pointer hover:text-white transition-all duration-300 ease-in-out" />
          </li>
          <li onClick={handleresume}>
            <FaDownload className="text-3xl text-gray-500 cursor-pointer hover:text-white transition-all duration-300 ease-in-out" />
          </li>
        </ul>

        <motion.div
          className="border-r-2 h-[170px] border-gray-500 origin-bottom"
          initial={{ scaleY: 0 }} // Start with no height
          animate={showIcons ? { scaleY: 1 } : { scaleY: 0 }} // Shrink when `showIcons` is false
          transition={{ duration: 1.5, ease: "easeInOut" }} // Smooth transition
        ></motion.div>
      </div>

      {/* "Go to Top" Button */}
      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-gray-600 text-slate-200 p-3 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-110"
        >
          <FaArrowUp className="text-xl transition-all duration-500 ease-in-out animate-pulse hover:animate-none" />
        </button>
      )}

      {/* Main content */}
      <div className="pl-[150px]">
        <Navbar />
        <Page />
        <div className="relative mt-5 text-white p-6 rounded-lg w-[900px] mr-[330px] mx-auto justify-center items-center">
          <div className="border border-gray-500 rounded-lg p-6 relative">
            <div className="absolute -top-4 -left-4 text-3xl text-gray-500">
              &#8220;
            </div>
            <p className="text-xl font-mono">
              Your work is going to fill a large part of your life, and the only
              way to be truly satisfied is to do what you believe is great work.
              And the only way to do great work is to love what you do.
            </p>
            <div className="absolute -bottom-4 -right-4 text-3xl text-gray-500">
              &#8221;
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <span className="text-lg font-mono">- Steve Jobs</span>
          </div>
        </div>

        <Works />
        <Skills />
        <About />
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
