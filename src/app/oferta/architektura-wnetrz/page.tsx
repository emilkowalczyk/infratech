import HeroSection from '@/components/HeroSection';
import {heroDetails} from '@/data/data';
import Image from 'next/image';

function ArchitekturaWnetrz() {
    return (
        <>
            <HeroSection
                bgImage={heroDetails[1].bgImage}
                heading={heroDetails[1].heading}
                btnLabel={heroDetails[1].btnLabel}
                btnPath={'/kontakt'}
            />
            <div className='mt-20 px-5 flex flex-col items-center md:mx-auto md:max-w-7xl md:w-full'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
                    <div>
                        <div className={`flex flex-col items-center md:items-start`}>
                            <h2 className={`text-center md:text-left text-3xl font-bold`}>
                                Kreowanie Wyjątkowych Przestrzeni
                            </h2>

                            <span className={`block w-[100px] h-[1px] my-6 bg-black`}></span>
                        </div>
                        <p className='text-black text-center lg:text-left mb-6'>
                            Kreujemy wnętrza, które łączą funkcjonalność z unikalnym designem. Nasz zespół
                            doświadczonych architektów wnętrz pomoże Ci stworzyć przestrzeń marzeń, dbając o każdy detal
                            od koncepcji po realizację. Pracujemy z pasją i zaangażowaniem, by każdy projekt był
                            odzwierciedleniem indywidualnych potrzeb i gustu naszych klientów.
                        </p>
                    </div>
                    <Image
                        src={'/images/architektura-wnetrz/sad-okregowy/1.webp'}
                        alt='About us'
                        width={1920}
                        height={0}
                        priority
                        className='object-cover aspect-[9/16] top-0 left-0 -z-10'
                    />
                </div>
            </div>
        </>
    );
}

export default ArchitekturaWnetrz;
