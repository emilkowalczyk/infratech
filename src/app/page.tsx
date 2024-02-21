import Image from 'next/image';
import React from 'react';

function Home() {
  return (
    <div className='w-full h-screen'>
      <Image
        src={'/images/home.jpg'}
        alt='Home image'
        width={1920}
        height={0}
        className='w-full h-screen bg-cover'
      />
    </div>
  );
}

export default Home;
