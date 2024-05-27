import React from 'react';
import Image from "next/image";

function WizualizacjaSalonu() {
    const images = ['/images/architektura-wnetrz/wizualizacja-salonu/1.jpg', '/images/architektura-wnetrz/wizualizacja-salonu/2.jpg', '/images/architektura-wnetrz/wizualizacja-salonu/3.jpg', '/images/architektura-wnetrz/wizualizacja-salonu/4.jpg', '/images/architektura-wnetrz/wizualizacja-salonu/5.jpg', '/images/architektura-wnetrz/wizualizacja-salonu/6.jpg', '/images/architektura-wnetrz/wizualizacja-salonu/7.jpg', '/images/architektura-wnetrz/wizualizacja-salonu/8.jpg']
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto px-5 gap-5`}>
            {images.map((image, i) => (
                <div key={i}>
                    <Image src={image} width={1000} height={0} className={`w-full aspect-square object-cover`}
                           alt={`image`}
                           priority/>
                </div>
            ))}
        </div>
    );
}

export default WizualizacjaSalonu