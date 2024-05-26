import React from 'react';
import Image from "next/image";

function SadOkregowy() {
    const images = ['/images/architektura-wnetrz/sad-okregowy/1.jpg', '/images/architektura-wnetrz/sad-okregowy/2.jpg', '/images/architektura-wnetrz/sad-okregowy/3.jpg', '/images/architektura-wnetrz/sad-okregowy/4.jpg', '/images/architektura-wnetrz/sad-okregowy/5.jpg', '/images/architektura-wnetrz/sad-okregowy/6.jpg', '/images/architektura-wnetrz/sad-okregowy/7.jpg', '/images/architektura-wnetrz/sad-okregowy/8.jpg', '/images/architektura-wnetrz/sad-okregowy/9.jpg', '/images/architektura-wnetrz/sad-okregowy/10.jpg']
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

export default SadOkregowy