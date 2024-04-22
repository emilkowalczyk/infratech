import CompanyValues from '@/components/CompanyValues';
import ContentWrapper from '@/components/ContentWrapper';
import Heading from '@/components/Heading';
import HeroSection from '@/components/HeroSection';
import Offer from '@/components/Offer';
import Slider from '@/components/Slider';
import { heroDetails, homeData } from '@/data/data';

function Home() {
  return (
    <>
      <HeroSection
        bgImage={heroDetails[0].bgImage}
        heading={heroDetails[0].heading}
        description={heroDetails[0].description}
        btnLabel={heroDetails[0].btnLabel}
      />
      <ContentWrapper>
        <Heading
          label='Od marzeń do realizacji'
          underline
          bgColor='bg-black'
          textColor='text-black'
        />

        <p className='w-4/5 text-center text-gray-600'>{homeData.content[0]}</p>
      </ContentWrapper>
      <Offer />
      <ContentWrapper>
        <Heading
          label='Dlaczego my?'
          underline
          bgColor='bg-black'
          textColor='text-black'
        />
        <CompanyValues />
      </ContentWrapper>
      <Slider />
    </>
  );
}

export default Home;
