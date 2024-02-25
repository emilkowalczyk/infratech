import Button from '@/components/Button';
import CompanyValues from '@/components/CompanyValues';
import ContentWrapper from '@/components/ContentWrapper';
import Heading from '@/components/Heading';
import HeroSection from '@/components/HeroSection';
import Offer from '@/components/Offer';
import Text from '@/components/Text';
import { homeData, navLinks } from '@/data/data';
import Image from 'next/image';

function Home() {
  return (
    <>
      <HeroSection
        bgImage={homeData.hero.img}
        title={homeData.hero.heading}
        description={homeData.hero.description}
        label={homeData.hero.label}
      />
      <ContentWrapper>
        <Heading label='Od marzeń do realizacji' underline />
        <Text content={homeData.content[0]} />
      </ContentWrapper>
      <Offer />
      <ContentWrapper>
        <CompanyValues />
      </ContentWrapper>
      <div className='my-20 relative w-full'>
        <Image
          src={'/images/architecture.jpg'}
          alt='smarthome'
          width={1920}
          height={0}
          className='w-full h-screen object-cover'
        />
        <div className='absolute bottom-0 left-0 text-white w-full bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.05)] pb-6 pt-20 px-6'>
          <Heading label='Lorem ipsum' underline color='white' />
          <Text content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti totam culpa, quibusdam animi cum officiis maxime accusantium aut suscipit alias nisi modi. Cupiditate, sunt. Tenetur nisi ipsa pariatur saepe laudantium!' />
          <Button path={navLinks[4].path} label='Zobacz więcej' />
        </div>
      </div>
    </>
  );
}

export default Home;
