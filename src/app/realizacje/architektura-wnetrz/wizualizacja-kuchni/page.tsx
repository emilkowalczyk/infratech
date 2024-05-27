import React from 'react';
import Image from "next/image";

function WizualizacjaKuchni() {
    const images = ['/images/architektura-wnetrz/wizualizacja-kuchni/1.webp', '/images/architektura-wnetrz/wizualizacja-kuchni/2.webp', '/images/architektura-wnetrz/wizualizacja-kuchni/3.webp', '/images/architektura-wnetrz/wizualizacja-kuchni/4.webp']
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

export default WizualizacjaKuchni