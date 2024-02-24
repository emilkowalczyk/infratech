import Image from 'next/image';
import Link from 'next/link';

type HeroSectionProps = {
  bgImage: string;
  title: string;
  description: string;
  buttonTitle: string;
};

function HeroSection({
  bgImage,
  title,
  description,
  buttonTitle,
}: HeroSectionProps) {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center px-6 gap-8'>
      <Image
        src={bgImage}
        alt='Home image'
        width={1920}
        height={0}
        className='h-screen object-cover absolute top-0 left-0 -z-10 brightness-[50%]'
      />
      <h1 className='text-4xl text-white font-bold uppercase text-center leading-tight'>
        {title}
      </h1>
      <p className='text-white text-center text-sm'>{description}</p>
      <Link
        href={'/oferta'}
        className='block text-white text-center border-2 border-white px-4 py-4 font-bold hover:text-black hover:bg-white transition'
      >
        {buttonTitle}
      </Link>
    </div>
  );
}

export default HeroSection;
