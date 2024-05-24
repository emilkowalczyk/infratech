import HeroSection from '@/components/HeroSection';
import {heroDetails} from '@/data/data';

function SwiadectwaEnergetyczne() {
    return (
        <>
            <HeroSection
                bgImage={heroDetails[4].bgImage}
                heading={heroDetails[4].heading}
                btnLabel={heroDetails[4].btnLabel}
                btnPath={'/kontakt'}
            />
        </>
    );
}

export default SwiadectwaEnergetyczne;
