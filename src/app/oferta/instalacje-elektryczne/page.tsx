import HeroSection from '@/components/HeroSection';
import {heroDetails} from '@/data/data';
import Image from "next/image";

function InstalacjeElektryczne() {
    return (
        <>
            <HeroSection
                bgImage={heroDetails[2].bgImage}
                heading={heroDetails[2].heading}
                btnLabel={heroDetails[2].btnLabel}
                btnPath={'/kontakt'}
            />
            <div className='mt-20 px-5 flex flex-col items-center md:mx-auto md:max-w-7xl md:w-full'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
                    <div>
                        <div className={`flex flex-col items-center md:items-start`}>
                            <h2 className={`text-3xl font-bold`}>
                                Profesjonalne Rozwiązania Elektryczne
                            </h2>

                            <span className={`block w-[100px] h-[1px] my-6 bg-black`}></span>
                        </div>
                        <p className='text-black text-center lg:text-left mb-6'>
                            Oferujemy kompleksowe usługi w zakresie instalacji elektrycznych, od projektu po montaż i
                            serwis. Gwarantujemy bezpieczeństwo, niezawodność oraz zgodność z najnowszymi standardami i
                            normami. Nasze rozwiązania zapewniają komfort i bezpieczeństwo użytkowania, a także
                            umożliwiają łatwą rozbudowę systemów w przyszłości.
                        </p>
                    </div>
                    <Image
                        src={'/images/electrical.jpg'}
                        alt='About us'
                        width={1920}
                        height={0}
                        className='object-cover aspect-[9/16] top-0 left-0 -z-10'
                    />
                </div>
            </div>
        </>
    );
}

export default InstalacjeElektryczne;
