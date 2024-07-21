import React from 'react';
import Image from 'next/image';

function WizualizacjaMieszkania1() {
  const images = [
    '/images/architektura-wnetrz/wizualizacja-mieszkania-1/1.webp',
    '/images/architektura-wnetrz/wizualizacja-mieszkania-1/2.webp',
    '/images/architektura-wnetrz/wizualizacja-mieszkania-1/3.webp',
    '/images/architektura-wnetrz/wizualizacja-mieszkania-1/4.webp',
    '/images/architektura-wnetrz/wizualizacja-mieszkania-1/5.webp',
    '/images/architektura-wnetrz/wizualizacja-mieszkania-1/6.webp',
    '/images/architektura-wnetrz/wizualizacja-mieszkania-1/7.webp',
    '/images/architektura-wnetrz/wizualizacja-mieszkania-1/8.webp',
    '/images/architektura-wnetrz/wizualizacja-mieszkania-1/9.webp',
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

export default WizualizacjaMieszkania1;
