import ContentWrapper from '@/components/ContentWrapper';
import Heading from '@/components/Heading';
import Image from 'next/image';
import React from 'react';

function ONas() {
  return (
    <ContentWrapper>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <div className={`flex flex-col items-center md:items-start`}>
            <h2 className={`text-3xl font-bold mb-8 `}>O nas</h2>

            <span className={`block w-[100px] h-[1px] mb-8 bg-black`}></span>
          </div>
          <p className='text-black'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            temporibus assumenda dignissimos voluptas nesciunt culpa nisi
            doloribus consequuntur error libero mollitia nihil eos, ab quisquam
            totam asperiores modi distinctio reprehenderit.
          </p>
        </div>
        <Image
          src={'/images/architecture.jpg'}
          alt='About us'
          width={1920}
          height={0}
          className='object-cover top-0 left-0 -z-10'
        />
      </div>
    </ContentWrapper>
  );
}

export default ONas;
