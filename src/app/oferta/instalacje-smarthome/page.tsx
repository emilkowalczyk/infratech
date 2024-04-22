import HeroSection from '@/components/HeroSection';
import { heroDetails } from '@/data/data';

function InstalacjeSmarthome() {
  return (
    <>
      <HeroSection
        bgImage={heroDetails[3].bgImage}
        heading={heroDetails[3].heading}
        description={heroDetails[3].description}
        btnLabel={heroDetails[3].btnLabel}
      />
    </>
  );
}

export default InstalacjeSmarthome;
