import { navLinks } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link';
import SocialMedia from './SocialMedia';

function Footer() {
  const date = new Date().getFullYear();

  return (
    <div className='bg-white px-6 py-6 flex flex-col gap-6 z-0 items-center md:flex-row justify-center'>
      <Link href={'/'} className='z-0'>
        <Image
          src={'/images/logo.png'}
          alt='logo'
          width={150}
          height={0}
          priority
          className={`w-auto transition duration-300`}
        />
      </Link>
      <SocialMedia />
      <ul className='grid text-center gap-2 md:gap-2'>
        {navLinks.map((link) => (
          <li key={link.title}>
            <Link href={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
      <p>Copyright &copy; {date}</p>
    </div>
  );
}

export default Footer;
