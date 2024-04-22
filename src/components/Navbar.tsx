'use client';

import { navLinks } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import SocialMedia from './SocialMedia';

function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleMobileMenu = () => setIsOpenMenu(!isOpenMenu);
  const closeMobileMenu = () => setIsOpenMenu(false);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setIsOpenMenu(true);
    } else setIsOpenMenu(false);
  }, []);

  return (
    <header
      className={`${
        isOpenMenu ? 'fixed' : 'absolute'
      } top-0 left-0 px-4 w-full h-14 flex justify-between items-center bg-white z-50`}
    >
      <Link href={'/'} onClick={closeMobileMenu}>
        <Image
          src={'/images/logo.png'}
          alt='logo'
          width={100}
          height={0}
          priority
          className={`w-auto transition duration-300`}
        />
      </Link>
      <nav className='flex items-center'>
        <ul
          className={`fixed top-0 right-0 w-full h-screen bg-white flex flex-col justify-center items-center transition-all duration-300 ${
            isOpenMenu ? 'opacity-1 visible' : 'opacity-0 invisible'
          } 
           lg:static lg:w-auto lg:h-auto lg:bg-transparent lg:opacity-1 lg:visible lg:flex-row lg:gap-6`}
        >
          {navLinks.map(({ path, title }) => (
            <li key={title}>
              <Link
                href={path}
                className='block py-4 text-lg'
                onClick={closeMobileMenu}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <SocialMedia />
        <div
          className='lg:hidden flex flex-col justify-between items-center w-11 h-11 py-3 -scale-[0.8] translate-x-[10px] cursor-pointer'
          onClick={handleMobileMenu}
        >
          <span
            className={`w-6 h-[2px] bg-black 
            ${
              isOpenMenu ? 'rotate-45 translate-y-[9px]' : 'rotate-0'
            } transition duration-300`}
          ></span>
          <span
            className={`w-6 h-[2px] bg-black ${
              isOpenMenu ? 'opacity-0' : 'opacity-1'
            } transition duration-300`}
          ></span>
          <span
            className={`w-6 h-[2px]  bg-black ${
              isOpenMenu ? '-rotate-45 -translate-y-[9px]' : 'rotate-0'
            } transition duration-300`}
          ></span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
