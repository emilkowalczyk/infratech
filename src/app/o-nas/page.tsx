import Button from '@/components/Button';
import Image from 'next/image';
import React from 'react';

function ONas() {
  return (
    <div className='mt-20 px-5 flex flex-col items-center md:mx-auto md:max-w-5xl md:w-full'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div>
          <div className={`flex flex-col items-center md:items-start`}>
            <h2 className={`text-3xl font-bold`}>O nas</h2>

            <span className={`block w-[100px] h-[1px] my-6 bg-black`}></span>
          </div>
          <p className='text-black text-center lg:text-left mb-6'>
            Jesteśmy wszechstronną firmą specjalizującą się w architekturze wnętrz, instalacjach smart home oraz kompleksowych remontach i modernizacjach budynków i mieszkań. Naszym celem jest przekształcenie Twojej przestrzeni w miejsce, które nie tylko zachwyca estetyką,
            ale także odpowiada na potrzeby nowoczesnego stylu życia.
          </p>
          <Button label='Poznaj naszą ofertę' path='/oferta' invert />
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

export default ONas;
