import React from 'react';
import Image from 'next/image';

function WizualizacjaSalonu() {
  const images = [
    '/images/architektura-wnetrz/wizualizacja-salonu/1.webp',
    '/images/architektura-wnetrz/wizualizacja-salonu/2.webp',
    '/images/architektura-wnetrz/wizualizacja-salonu/3.webp',
    '/images/architektura-wnetrz/wizualizacja-salonu/4.webp',
    '/images/architektura-wnetrz/wizualizacja-salonu/5.webp',
    '/images/architektura-wnetrz/wizualizacja-salonu/6.webp',
    '/images/architektura-wnetrz/wizualizacja-salonu/7.webp',
    '/images/architektura-wnetrz/wizualizacja-salonu/8.webp',
  ];
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto px-5 gap-5`}
    >
      {images.map((image, i) => (
        <div key={i}>
          <Image
            src={image}
            width={1000}
            height={0}
            className={`w-full object-contain`}
            alt={`image`}
            loading='lazy'
          />
        </div>
      ))}
    </div>
  );
}

export default WizualizacjaSalonu;
