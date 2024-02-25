import Image from 'next/image';
import Button from './Button';
import { navLinks } from '@/data/data';

type Props = {
  bgImage: string;
  title: string;
  description: string;
  label: string;
};

function HeroSection({ bgImage, title, description, label }: Props) {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center px-6'>
      <Image
        src={bgImage}
        alt='Home image'
        width={1920}
        height={0}
        className='h-screen object-cover absolute top-0 left-0 -z-10 brightness-[50%]'
      />
      <h1 className='text-4xl text-white font-bold uppercase text-center leading-tight mb-8'>
        {title}
      </h1>
      <p className='text-white text-center text-sm'>{description}</p>
      <Button path={navLinks[1].path} label={label} />
    </div>
  );
}

export default HeroSection;
