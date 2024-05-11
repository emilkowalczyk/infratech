import CompanyValues from '@/components/CompanyValues';
import Heading from '@/components/Heading';
import HeroSection from '@/components/HeroSection';
import Offer from '@/components/Offer';
import Slider from '@/components/Slider';
import { heroDetails, homeData } from '@/data/data';

async function Home() {
  return (
    <>
      <HeroSection
        bgImage={heroDetails[0].bgImage}
        heading={heroDetails[0].heading}
        description={heroDetails[0].description}
        btnLabel={heroDetails[0].btnLabel}
      />
      <div className='mt-20 px-5 flex flex-col items-center md:mx-auto md:max-w-5xl md:w-full'>
        <Heading
          label='Od marzeń, do realizacji'
          underline
          bgColor='bg-black'
          textColor='text-black'
        />
        <p className='text-center text-gray-600'>{homeData.content[0]}</p>
      </div>
      <Offer />
      <div className='mt-20 px-5 flex flex-col items-center md:mx-auto md:max-w-5xl md:w-full'>
        <Heading
          label='Dlaczego my?'
          underline
          bgColor='bg-black'
          textColor='text-black'
        />
        <CompanyValues />
      </div>
      <div className='mt-20 px-5 flex flex-col items-center md:mx-auto md:max-w-5xl md:w-full'>
        <Heading
          label='Nasze realizacje'
          textColor='text-black'
          bgColor='bg-black'
          underline
        />
      </div>
      <Slider />
    </>
  );
}

export default Home;
