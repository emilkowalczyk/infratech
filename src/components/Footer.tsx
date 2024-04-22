import { navLinks } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  const date = new Date().getFullYear();

  return (
    <div className='bg-white px-4 py-6 grid grid-cols-1 gap-6 z-0 items-center lg:grid-cols-[auto_1fr_auto]'>
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
      <ul className='flex flex-col justify-center text-center gap-2 lg:gap-6 lg:flex-row'>
        {navLinks.map((link) => (
          <li key={link.title}>
            <Link href={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
      <p className='flex justify-center'>
        infratechgroup.pl Copyright &copy; {date}
      </p>
    </div>
  );
}

export default Footer;
