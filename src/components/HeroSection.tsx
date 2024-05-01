import Image from 'next/image';
import Button from './Button';
import { navLinks } from '@/data/data';

type Props = {
  bgImage: string;
  heading: string;
  description: string;
  btnLabel: string;
};

function HeroSection({ bgImage, heading, description, btnLabel }: Props) {
  return (
    <header className='w-full flex flex-col h-[720px] justify-end'>
      <Image
        src={bgImage}
        alt='Home image'
        width={1920}
        height={0}
        priority
        className='w-full h-full object-cover absolute top-16 left-0 -z-10 brightness-[50%] max-h-[800px]'
      />
      <div className='h-full flex flex-col justify-center items-center md:items-start px-5 md:max-w-5xl md:mx-auto md:w-full'>
        <h1 className='text-6xl md:text-8xl md:w-[600px] text-white font-bold  text-center leading-tight md:text-left'>
          {heading}
        </h1>

        <p className='text-gray-200 max-w-[720px] text-center my-5 text-sm md:text-left md:text-base'>
          {description}
        </p>
        <Button path={navLinks[1].path} label={btnLabel} />
      </div>
    </header>
  );
}

export default HeroSection;
