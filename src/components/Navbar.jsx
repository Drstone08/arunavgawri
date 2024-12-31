import React from 'react';
import { Link } from 'react-scroll'; 
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <div className='flex flex-row ml-[20px] mt-7'>
      <img src={logo} alt="logo" className='w-14 h-14' />
      <div className='ml-[750px] mt-3'>
        <ul className='text-[#b0aeae] text-lg font-mono flex flex-row gap-10'>
          <li>
            <Link to="home" smooth={true} duration={500} className="cursor-pointer">
              <span className='text-violet-500'>#</span>home
            </Link>
          </li>
          <li>
            <Link to="works" smooth={true} duration={500} className="cursor-pointer">
              <span className='text-violet-500'>#</span>works
            </Link>
          </li>
          <li>
            <Link to="about-me" smooth={true} duration={500} className="cursor-pointer">
              <span className='text-violet-500'>#</span>about-me
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer">
              <span className='text-violet-500'>#</span>contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
