import React from 'react';
import Image from 'next/image';

function WizualizacjaPokojow() {
  const images = [
    '/images/architektura-wnetrz/wizualizacja-pokojow/1.webp',
    '/images/architektura-wnetrz/wizualizacja-pokojow/2.webp',
    '/images/architektura-wnetrz/wizualizacja-pokojow/3.webp',
    '/images/architektura-wnetrz/wizualizacja-pokojow/4.webp',
    '/images/architektura-wnetrz/wizualizacja-pokojow/5.webp',
    '/images/architektura-wnetrz/wizualizacja-pokojow/6.webp',
    '/images/architektura-wnetrz/wizualizacja-pokojow/7.webp',
    '/images/architektura-wnetrz/wizualizacja-pokojow/8.webp',
    '/images/architektura-wnetrz/wizualizacja-pokojow/9.webp',
    '/images/architektura-wnetrz/wizualizacja-pokojow/10.webp',
    '/images/architektura-wnetrz/wizualizacja-pokojow/11.webp',
    '/images/architektura-wnetrz/wizualizacja-pokojow/12.webp',
    '/images/architektura-wnetrz/wizualizacja-pokojow/13.webp',
    '/images/architektura-wnetrz/wizualizacja-pokojow/14.webp',
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

export default WizualizacjaPokojow;
