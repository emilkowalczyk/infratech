import React from 'react';
import Image from "next/image";

function WizualizacjaMieszkania() {
    const images = ['/images/architektura-wnetrz/wizualizacja-mieszkania/1.jpg', '/images/architektura-wnetrz/wizualizacja-mieszkania/2.jpg', '/images/architektura-wnetrz/wizualizacja-mieszkania/3.jpg', '/images/architektura-wnetrz/wizualizacja-mieszkania/4.jpg', '/images/architektura-wnetrz/wizualizacja-mieszkania/5.jpg', '/images/architektura-wnetrz/wizualizacja-mieszkania/6.jpg', '/images/architektura-wnetrz/wizualizacja-mieszkania/7.jpg', '/images/architektura-wnetrz/wizualizacja-mieszkania/8.jpg', '/images/architektura-wnetrz/wizualizacja-mieszkania/9.jpg', '/images/architektura-wnetrz/wizualizacja-mieszkania/10.jpg', '/images/architektura-wnetrz/wizualizacja-mieszkania/11.jpg']
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

export default WizualizacjaMieszkania