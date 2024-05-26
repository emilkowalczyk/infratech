import Image from 'next/image';
import React from 'react';

function Kontakt() {
    return (
        <div className='mt-20 px-5 flex flex-col items-center md:mx-auto md:max-w-7xl md:w-full'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div>
                    <div className={`flex flex-col items-center md:items-start`}>
                        <h2 className={`text-3xl font-bold`}>Skontaktuj się z nami</h2>

                        <span className={`block w-[100px] h-[1px] my-6 bg-black`}></span>
                    </div>
                    <div>
                        <h2 className={`text-lg font-semibold text-center md:text-left`}>Piotr Klimek</h2>
                        <div className='text-black text-center md:text-left mb-6'>
                            <p>Instalacje SmartHome</p>
                            <p>Instalacje elektryczne</p>
                            <p>Tel: <a href='tel:+123456789'> 606 694 539</a></p>
                            <p>E-mail: <a href='mailto:example@mail.com'> kontakt@infratechgroup.pl</a></p>
                        </div>
                    </div>
                    <div>
                        <h2 className={`text-lg font-semibold text-center md:text-left`}>Mariola Klimek</h2>
                        <div className='text-black text-center md:text-left mb-6'>
                            <p>Nadzory budowlane</p>
                            <p>Świadectwa energetyczne</p>
                            <p>Tel: <a href='tel:+123456789'> 604 856 876</a></p>
                            <p>E-mail: <a href='mailto:example@mail.com'> kontakt@infratechgroup.pl</a></p>
                        </div>

                    </div>
                    <div>
                        <h2 className={`text-lg font-semibold text-center md:text-left`}>Konrad Klimek</h2>
                        <div className='text-black text-center md:text-left mb-6'>
                            <p>Architektura wnętrz</p>
                            <p>Tel: <a href='tel:+123456789'> 606 584 687</a></p>
                            <p>E-mail: <a href='mailto:example@mail.com'> kontakt@infratechgroup.pl</a></p>
                        </div>
                    </div>
                </div>
                <Image
                    src={'/images/architecture.jpg'}
                    alt='About us'
                    width={1920}
                    height={0}
                    className='object-cover top-0 left-0 -z-10'
                />
            </div>
        </div>
    );
}

export default Kontakt;
