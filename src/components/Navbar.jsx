import React from 'react';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <div className=' flex flex-row ml-[20px] mt-7'>
      <img src={logo} alt="logo" className='w-14 h-14' />
      {/* <h3 className='mt-4 text-2xl ml-5 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 font-[JetBrains Mono]'>
        Arunav Gawri
      </h3> */}
      <div className='ml-[750px] mt-3'>
        <ul className='text-[#b0aeae] text-lg font-mono flex flex-row gap-10'>
          <li>
            <span className='text-violet-500'>#</span>home
          </li>
          <li>
            <span className='text-violet-500'>#</span>works
          </li>
          <li>
            <span className='text-violet-500'>#</span>about-me
          </li>
          <li>
            <span className='text-violet-500'>#</span>contact
          </li>
        </ul>
      </div>
    </div>
  );
}
