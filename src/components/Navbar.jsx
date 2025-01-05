import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='top-0 left-0 w-full  z-50'>
      <div className='flex items-center justify-between px-6 py-4'>
        {/* Logo */}
        <img src={logo} alt="logo" className='w-14 h-14 ml-5' />
 
        {/* Hamburger Menu for Small Screens */}
        <button
          className='text-gray-700 text-2xl md:hidden'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>

        {/* Navbar Links */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute top-16 left-0 w-full  md:static md:w-auto md:flex md:flex-row md:gap-10 md:items-center`}
        >
          <ul className='text-[#b0aeae] text-lg font-mono flex flex-col md:flex-row gap-4 md:gap-10 p-4 md:p-0'>
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-violet-500 transition"
              >
                <span className='text-violet-500'>#</span>home
              </Link>
            </li>
            <li>
              <Link
                to="works"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-violet-500 transition"
              >
                <span className='text-violet-500'>#</span>works
              </Link>
            </li>
            <li>
              <Link
                to="about-me"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-violet-500 transition"
              >
                <span className='text-violet-500'>#</span>about-me
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-violet-500 transition"
              >
                <span className='text-violet-500'>#</span>contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
