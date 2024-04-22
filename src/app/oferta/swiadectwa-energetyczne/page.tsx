import HeroSection from '@/components/HeroSection';
import { heroDetails } from '@/data/data';

function SwiadectwaEnergetyczne() {
  return (
    <>
      <HeroSection
        bgImage={heroDetails[4].bgImage}
        heading={heroDetails[4].heading}
        description={heroDetails[4].description}
        btnLabel={heroDetails[4].btnLabel}
      />
    </>
  );
}

export default SwiadectwaEnergetyczne;
