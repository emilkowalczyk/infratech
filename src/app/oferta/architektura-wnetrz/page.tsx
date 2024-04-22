import HeroSection from '@/components/HeroSection';
import { heroDetails } from '@/data/data';

function ArchitekturaWnetrz() {
  return (
    <>
      <HeroSection
        bgImage={heroDetails[1].bgImage}
        heading={heroDetails[1].heading}
        description={heroDetails[1].description}
        btnLabel={heroDetails[1].btnLabel}
      />
    </>
  );
}

export default ArchitekturaWnetrz;
