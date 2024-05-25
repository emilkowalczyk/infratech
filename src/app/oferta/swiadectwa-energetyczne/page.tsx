import HeroSection from '@/components/HeroSection';
import {heroDetails} from '@/data/data';
import Image from "next/image";

function SwiadectwaEnergetyczne() {
    return (
        <>
            <HeroSection
                bgImage={heroDetails[4].bgImage}
                heading={heroDetails[4].heading}
                btnLabel={heroDetails[4].btnLabel}
                btnPath={'/kontakt'}
            />
            <div className='mt-20 px-5 flex flex-col items-center md:mx-auto md:max-w-7xl md:w-full'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
                    <div>
                        <div className={`flex flex-col items-center md:items-start`}>
                            <h2 className={`text-3xl font-bold`}>
                                Świadectwa energetyczne
                            </h2>

                            <span className={`block w-[100px] h-[1px] my-6 bg-black`}></span>
                        </div>
                        <p className='text-black text-center lg:text-left mb-6'>
                            Wykonujemy profesjonalne świadectwa energetyczne, które są niezbędne przy sprzedaży lub
                            wynajmie nieruchomości. Zapewniamy rzetelną ocenę energetyczną budynków, pomagając obniżyć
                            koszty eksploatacji. Nasze świadectwa energetyczne dostarczają niezbędnych informacji
                            o efektywności energetycznej, co jest istotne dla świadomych ekologicznie klientów.
                        </p>
                    </div>
                    <Image
                        src={'/images/certificates.jpg'}
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

export default SwiadectwaEnergetyczne;


