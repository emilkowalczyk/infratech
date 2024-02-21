'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io5';

function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleMobileMenu = () => setIsOpenMenu(!isOpenMenu);
  const closeMobileMenu = () => setIsOpenMenu(false);

  const links = [
    {
      title: 'O nas',
      path: 'o-nas',
    },
    {
      title: 'Oferta',
      path: 'oferta',
    },
    {
      title: 'Cennik',
      path: 'cennik',
    },
    {
      title: 'Referencje',
      path: 'referencje',
    },
    {
      title: 'Realizacje',
      path: 'realizacje',
    },
    {
      title: 'Kontakt',
      path: 'kontakt',
    },
  ];

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
          className={`fixed top-0 right-0 w-full h-screen bg-slate-100 flex flex-col justify-center items-center transition ${
            isOpenMenu ? 'opacity-1' : 'opacity-0'
          }`}
        >
          {links.map(({ path, title }) => (
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
