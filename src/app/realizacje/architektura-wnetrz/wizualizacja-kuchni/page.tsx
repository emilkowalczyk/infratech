import React from 'react';
import Image from "next/image";

function WizualizacjaKuchni() {
    const images = ['/images/architektura-wnetrz/wizualizacja-kuchni/1.jpg', '/images/architektura-wnetrz/wizualizacja-kuchni/2.jpg', '/images/architektura-wnetrz/wizualizacja-kuchni/3.jpg', '/images/architektura-wnetrz/wizualizacja-kuchni/4.jpg']
    return (
        <div className={`grid grid-cols-1 md:grid-cols-3 w-full max-w-7xl mx-auto px-5 gap-5`}>
            {images.map((image, i) => (
                <div key={i}>
                    <Image src={image} width={1000} height={0} className={`w-full aspect-square`} alt={`image`}
                           priority/>
                </div>
            ))}
        </div>
    );
}

export default WizualizacjaKuchni