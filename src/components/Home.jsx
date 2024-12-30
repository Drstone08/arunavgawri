import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Page from "../components/Page";
import Works from "./Works";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
import { FaInstagram, FaLinkedin, FaGithub, FaDownload, FaArrowUp } from "react-icons/fa";

function Home() {
  const [showIcons, setShowIcons] = useState(true); // State for showing icons
  const [showTopButton, setShowTopButton] = useState(false); // State for "Go to Top" button
  const footerRef = useRef(null); // Reference for the footer

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const footerEntry = entries[0];

        if (footerEntry.isIntersecting) {
          setShowIcons(false); // Hide icons when footer is visible
          setShowTopButton(true); // Show "Go to Top" button
        } else {
          setShowIcons(true); // Show icons when footer is not visible
          setShowTopButton(false); // Hide "Go to Top" button
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the footer is visible
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#272B34] min-h-screen w-full">
      {/* Fixed vertical icons */}
      {showIcons && (
        <div className="fixed top-1/2 left-6 transform -translate-y-1/2 flex flex-col items-center space-y-5">
          <div className="border-r-2 h-[170px] border-gray-500"></div>
          <ul className="space-y-5">
            <li>
              <FaInstagram className="text-3xl text-gray-500 cursor-pointer" />
            </li>
            <li>
              <FaLinkedin className="text-3xl text-gray-500 cursor-pointer" />
            </li>
            <li>
              <FaGithub className="text-3xl text-gray-500 cursor-pointer" />
            </li>
            <li>
              <FaDownload className="text-3xl text-gray-500 cursor-pointer" />
            </li>
          </ul>
          <div className="border-r-2 h-[170px] border-gray-500"></div>
        </div>
      )}

      {/* "Go to Top" Button */}
      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        >
          <FaArrowUp className="text-2xl" />
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
      {/* Footer with ref */}
      <Footer ref={footerRef} />
    </div>
  );
}

export default Home;
