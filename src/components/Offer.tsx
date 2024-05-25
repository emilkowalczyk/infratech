import {offerData} from '@/data/data';
import Image from 'next/image';
import Link from 'next/link';

function Offer() {
    return (
        <div className='px-5 mt-20 flex flex-col items-center md:mx-auto md:max-w-7xl md:w-full'>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5'>
                {offerData.map((offer) => (
                    <Link href={offer.path} key={offer.title}>
                        <div
                            className='relative overflow-hidden hover:shadow-xl transition-all duration-300'>
                            <Image
                                src={offer.img}
                                alt={offer.alt}
                                width={1920}
                                height={0}
                                className='w-full aspect-video object-cover transition duration-300 hover:scale-[1.03]'
                            />
                            <h3 className='absolute right-0 bottom-4 bg-white px-10 py-3 text-black text-xl'>
                                {offer.title}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Offer;
