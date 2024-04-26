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
    <header className='w-full h-[720px] flex flex-col justify-center'>
      <Image
        src={bgImage}
        alt='Home image'
        width={1920}
        height={0}
        className='w-full h-screen object-cover absolute top-0 left-0 -z-10 brightness-[50%] max-h-[720px]'
      />
      <div className='flex flex-col justify-center items-center md:items-start px-4 md:max-w-5xl md:mx-auto md:w-full'>
        <h1 className='text-4xl md:text-5xl text-white font-bold uppercase text-center leading-tight md:text-left'>
          {heading}
        </h1>

        <p className='text-gray-200 max-w-[720px] text-center my-8 text-sm md:text-left md:text-base'>
          {description}
        </p>
        <Button path={navLinks[1].path} label={btnLabel} />
      </div>
    </header>
  );
}

export default HeroSection;
