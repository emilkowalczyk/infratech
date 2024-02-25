import ContentWrapper from '@/components/ContentWrapper';
import Heading from '@/components/Heading';
import HeroSection from '@/components/HeroSection';
import Offer from '@/components/Offer';
import Text from '@/components/Text';
import { homeData } from '@/data/data';

function Home() {
  return (
    <>
      <HeroSection
        bgImage={homeData.img}
        title={homeData.title}
        description={homeData.description}
        buttonTitle={homeData.buttonTitle}
      />
      <ContentWrapper>
        <Heading label='Od marzeń do realizacji' underline />
        <Text content={homeData.content[0]} />
      </ContentWrapper>
      <Offer />
      <ContentWrapper>
        <div className='flex flex-col md:flex-row justify-center items-center w-full'>
          {homeData.values.map((value) => (
            <div
              key={value.title}
              className='w-full py-6 flex flex-col justify-center items-center gap-1'
            >
              {value.icon}
              <h3 className='font-bold text-md uppercase mt-4'>
                {value.title}
              </h3>
              <p className='text-sm'>{value.subtitle}</p>
            </div>
          ))}
        </div>
      </ContentWrapper>
    </>
  );
}

export default Home;
