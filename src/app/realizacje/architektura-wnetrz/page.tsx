import React from 'react';
import Link from "next/link";
import Image from "next/image";

function ArchitekturaWnetrz() {
    return (
        <>
            <div className={`mt-20 w-full mx-auto px-5 max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-5`}>
                <Link href="/realizacje/architektura-wnetrz/sad-okregowy" className={`relative`}>
                    <div className={`overflow-hidden`}>
                        <Image src="/images/architektura-wnetrz/sad-okregowy/1.jpg" alt="sad okregowy" width={1000}
                               height={0}
                               className="w-full aspect-square object-cover transition duration-300 hover:scale-[1.03]"/>
                        <h3 className='absolute right-0 bottom-4 bg-white px-10 py-3 text-center text-black text-xl'>
                            Koncepcja Czytelni Akt Sąd Okręgowy Warszawa Praga
                        </h3>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default ArchitekturaWnetrz;