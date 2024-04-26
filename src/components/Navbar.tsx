'use client';

import Image from 'next/image';
import { useState } from 'react';

function Navbar() {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => setMenu(!menu);

  return (
    <nav className='w-full py-4 bg-white lg:py-6 fixed top-0 left-0 z-50 shadow-lg'>
      <div className='px-5 mx-auto lg:max-w-7xl flex justify-between items-center'>
        {/* Logo with link to homepage */}
        <a href='/' className='block'>
          <Image
            src={'/images/logo.png'}
            width={300}
            height={0}
            alt='Logo'
            className='w-[150px] lg:w-[200px]'
          />
        </a>
        {/* Navigation links */}
        <ul
          className={`w-[300px] h-screen bg-white flex flex-col justify-center items-center fixed top-0 right-0 transition-all ${
            menu ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <li>link1</li>
          <li>link2</li>
          <li>link3</li>
        </ul>
        {/* Mobile icon */}
        <div
          onClick={handleMenu}
          className='w-[40px] h-[40px] flex flex-col justify-between items-center py-2 translate-x-2'
        >
          <span
            className={`block w-[24px] h-[3px] bg-black ${
              menu ? 'rotate-45 translate-y-[10px]' : 'rotate-0'
            } transition-all`}
          ></span>
          <span
            className={`block w-[24px] h-[3px] bg-black ${
              menu ? 'opacity-0' : 'opacity-100'
            } transition-all`}
          ></span>
          <span
            className={`block w-[24px] h-[3px] bg-black ${
              menu ? '-rotate-45 -translate-y-[11px]' : 'rotate-0'
            } transition-all`}
          ></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
