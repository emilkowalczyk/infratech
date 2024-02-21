'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io5';

function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleMobileMenu = () => setIsOpenMenu(!isOpenMenu);
  const closeMobileMenu = () => setIsOpenMenu(false);

  return (
    <header className='fixed top-0 left-0 px-6 w-full h-14 flex justify-between items-center bg-white'>
      <Link href={'/'} className='z-10' onClick={closeMobileMenu}>
        <Image
          src={'/images/logo.png'}
          alt='logo'
          width={150}
          height={0}
          priority
          className='w-auto'
        />
      </Link>
      <nav className='flex items-center'>
        <ul
          className={`fixed top-0 right-0 w-full h-screen bg-white flex flex-col justify-center items-center transition ${
            isOpenMenu ? 'translate-x-[0]' : 'translate-x-[100%]'
          }`}
        >
          <li>
            <Link href={'/o-nas'}>O nas</Link>
          </li>
          <li>
            <Link href={'/oferta'}>Oferta</Link>
          </li>
          <li>
            <Link href={'/cennik'}>Cennik</Link>
          </li>
          <li>
            <Link href={'/referencje'}>Referencje</Link>
          </li>
          <li>
            <Link href={'/realizacje'}>Realizacje</Link>
          </li>
          <li>
            <Link href={'/kontakt'}>Kontakt</Link>
          </li>
        </ul>
        <div className='flex gap-2 z-10'>
          <Link href={'https://www.instagram.com'} target='_blank'>
            <IoLogoInstagram size={25} />
          </Link>
          <Link href={'https://www.facebook.com'} target='_blank'>
            <IoLogoFacebook size={25} />
          </Link>
        </div>
        <div
          className='flex flex-col justify-between items-center w-11 h-11 py-3 translate-x-[10px]'
          onClick={handleMobileMenu}
        >
          <span
            className={`w-6 h-[2px] bg-black transition ${
              isOpenMenu ? 'rotate-45 translate-y-[9px]' : 'rotate-0'
            }`}
          ></span>
          <span
            className={`w-6 h-[2px] bg-black transition ${
              isOpenMenu ? 'opacity-0' : 'opacity-1'
            }`}
          ></span>
          <span
            className={`w-6 h-[2px] bg-black transition ${
              isOpenMenu ? '-rotate-45 -translate-y-[9px]' : 'rotate-0'
            }`}
          ></span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
