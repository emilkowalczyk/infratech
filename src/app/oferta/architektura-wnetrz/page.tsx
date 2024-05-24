import HeroSection from '@/components/HeroSection';
import { heroDetails } from '@/data/data';
import Image from 'next/image';

function ArchitekturaWnetrz() {
  return (
    <>
      <HeroSection
        bgImage={heroDetails[1].bgImage}
        heading={heroDetails[1].heading}
        description={heroDetails[1].description}
        btnLabel={heroDetails[1].btnLabel}
      />
      <div className='mt-20 px-5 flex flex-col items-center md:mx-auto md:max-w-7xl md:w-full'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div>
            <div className={`flex flex-col items-center md:items-start`}>
              <h2 className={`text-3xl font-bold`}>
                Lorem ipsum dolor sit amet
              </h2>

              <span className={`block w-[100px] h-[1px] my-6 bg-black`}></span>
            </div>
            <p className='text-black text-center lg:text-left mb-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              temporibus assumenda dignissimos voluptas nesciunt culpa nisi
              doloribus consequuntur error libero mollitia nihil eos, ab
              quisquam totam asperiores modi distinctio reprehenderit.
            </p>
          </div>
          <Image
            src={'/images/architecture.jpg'}
            alt='About us'
            width={1920}
            height={0}
            className='object-cover top-0 left-0 -z-10'
          />
        </div>
      </div>
    </>
  );
}

export default ArchitekturaWnetrz;
