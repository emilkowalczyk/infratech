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
                               priority
                               className="w-full aspect-square object-cover transition duration-300 hover:scale-[1.03]"/>
                        <h3 className='absolute right-0 bottom-4 bg-white px-10 py-3 text-center text-black text-xl'>
                            Koncepcja Czytelni Akt Sąd Okręgowy Warszawa Praga
                        </h3>
                    </div>
                </Link>
                <Link href="/realizacje/architektura-wnetrz/wizualizacja-salonu" className={`relative`}>
                    <div className={`overflow-hidden`}>
                        <Image src="/images/architektura-wnetrz/wizualizacja-salonu/1.jpg" alt="wizualizacja-salonu"
                               width={1000}
                               height={0}
                               priority
                               className="w-full aspect-square object-cover transition duration-300 hover:scale-[1.03]"/>
                        <h3 className='absolute right-0 bottom-4 bg-white px-10 py-3 text-center text-black text-xl'>
                            Wizualizacja salonu
                        </h3>
                    </div>
                </Link>
                <Link href="/realizacje/architektura-wnetrz/wizualizacja-kuchni" className={`relative`}>
                    <div className={`overflow-hidden`}>
                        <Image src="/images/architektura-wnetrz/wizualizacja-kuchni/1.jpg" alt="wizualizacja-kuchni"
                               width={1000}
                               height={0}
                               priority
                               className="w-full aspect-square object-cover transition duration-300 hover:scale-[1.03]"/>
                        <h3 className='absolute right-0 bottom-4 bg-white px-10 py-3 text-center text-black text-xl'>
                            Wizualizacja kuchni
                        </h3>
                    </div>
                </Link>
                <Link href="/realizacje/architektura-wnetrz/wizualizacja-lazienki" className={`relative`}>
                    <div className={`overflow-hidden`}>
                        <Image src="/images/architektura-wnetrz/wizualizacja-lazienki/1.jpg" alt="wizualizacja lazienki"
                               width={1000}
                               height={0}
                               priority
                               className="w-full aspect-square object-cover transition duration-300 hover:scale-[1.03]"/>
                        <h3 className='absolute right-0 bottom-4 bg-white px-10 py-3 text-center text-black text-xl'>
                            Wizualizacja łazienki
                        </h3>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default ArchitekturaWnetrz;