import HeroSection from '@/components/HeroSection';
import { heroDetails } from '@/data/data';

function NadzorBudowlany() {
  return (
    <>
      <HeroSection
        bgImage={heroDetails[5].bgImage}
        heading={heroDetails[5].heading}
        description={heroDetails[5].description}
        btnLabel={heroDetails[5].btnLabel}
      />
    </>
  );
}

export default NadzorBudowlany;
