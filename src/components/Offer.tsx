import { offerData } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link';
import Heading from './Heading';
import ContentWrapper from './ContentWrapper';

function Offer() {
  return (
    <ContentWrapper>
      <Heading label='Nasza oferta' />
      <div className='w-full grid grid-cols-1'>
        {offerData.map((offer) => (
          <Link href={offer.path} key={offer.title} className='mb-6'>
            <div className='relative overflow-hidden'>
              <Image
                src={offer.img}
                alt={offer.alt}
                width={1920}
                height={0}
                className='w-full max-h-[200px] object-cover transition duration-300 hover:scale-110'
              />
              <h3 className='absolute right-0 bottom-4 bg-gray-800 px-8 py-2 text-white'>
                {offer.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </ContentWrapper>
  );
}

export default Offer;
