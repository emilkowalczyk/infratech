import HeroSection from '@/components/HeroSection';
import { heroDetails } from '@/data/data';

function InstalacjeElektryczne() {
  return (
    <>
      <HeroSection
        bgImage={heroDetails[2].bgImage}
        heading={heroDetails[2].heading}
        description={heroDetails[2].description}
        btnLabel={heroDetails[2].btnLabel}
      />
    </>
  );
}

export default InstalacjeElektryczne;
