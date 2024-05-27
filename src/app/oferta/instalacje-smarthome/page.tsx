import HeroSection from '@/components/HeroSection';
import {heroDetails} from '@/data/data';
import Image from "next/image";

function InstalacjeSmarthome() {
    return (
        <>
            <HeroSection
                bgImage={heroDetails[3].bgImage}
                heading={heroDetails[3].heading}
                btnLabel={heroDetails[3].btnLabel}
                btnPath={'/kontakt'}
            />
            <div className='mt-20 px-5 flex flex-col items-center md:mx-auto md:max-w-7xl md:w-full'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
                    <div>
                        <div className={`flex flex-col items-center md:items-start`}>
                            <h2 className={`text-3xl font-bold`}>
                                Inteligentne Rozwiązania dla Twojego Domu
                            </h2>

                            <span className={`block w-[100px] h-[1px] my-6 bg-black`}></span>
                        </div>
                        <p className='text-black text-center lg:text-left mb-6'>
                            Wdrażamy nowoczesne rozwiązania smart home, które uczynią Twoje życie wygodniejszym i
                            bezpieczniejszym. Zdalne sterowanie, inteligentne oświetlenie, systemy bezpieczeństwa – to
                            tylko niektóre z możliwości, które oferujemy. Dzięki naszym rozwiązaniom Twój dom
                            stanie się bardziej energooszczędny i przyjazny dla środowiska.
                        </p>
                    </div>
                    <Image
                        src={'/images/smarthome.webp'}
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

export default InstalacjeSmarthome;
