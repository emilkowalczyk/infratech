import HeroSection from '@/components/HeroSection';
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
    </>
  );
}

export default Home;
