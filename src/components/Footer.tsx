import { navLinks } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className='mt-20 mb-6 h-20 bg-white px-5 flex flex-col justify-between z-0 items-center md:flex-row mx-auto max-w-7xl'>
      <Link href={'/'} className='z-0 flex justify-center'>
        <Image
          src={'/images/logo.png'}
          alt='logo'
          width={150}
          height={0}
          priority
          className={`w-auto transition duration-300`}
        />
      </Link>
      <p className='flex justify-center'>
        infratechgroup.pl Copyright &copy; {date}
      </p>
    </footer>
  );
}

export default Footer;
