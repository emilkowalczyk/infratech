import HeroSection from '@/components/HeroSection';
import {heroDetails} from '@/data/data';

function NadzorBudowlany() {
    return (
        <>
            <HeroSection
                bgImage={heroDetails[5].bgImage}
                heading={heroDetails[5].heading}
                btnLabel={heroDetails[5].btnLabel}
                btnPath={'/kontakt'}
            />
        </>
    );
}

export default NadzorBudowlany;
