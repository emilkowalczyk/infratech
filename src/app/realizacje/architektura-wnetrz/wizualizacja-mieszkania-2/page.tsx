import React from 'react';
import Image from "next/image";

function WizualizacjaMieszkania2() {
    const images = ['/images/architektura-wnetrz/wizualizacja-mieszkania-2/1.jpg', '/images/architektura-wnetrz/wizualizacja-mieszkania-2/2.jpg', '/images/architektura-wnetrz/wizualizacja-mieszkania-2/3.jpg', '/images/architektura-wnetrz/wizualizacja-mieszkania-2/4.jpg', '/images/architektura-wnetrz/wizualizacja-mieszkania-2/5.jpg']
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

export default WizualizacjaMieszkania2