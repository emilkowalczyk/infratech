import { offerData } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link';
import Heading from './Heading';
import ContentWrapper from './ContentWrapper';

function Offer() {
  return (
    <ContentWrapper>
      <Heading
        label='Nasza oferta'
        underline
        textColor='text-black'
        bgColor='bg-black'
      />
      <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
        {offerData.map((offer) => (
          <Link href={offer.path} key={offer.title}>
            <div className='relative overflow-hidden hover:shadow-xl transition-all duration-300'>
              <Image
                src={offer.img}
                alt={offer.alt}
                width={1920}
                height={0}
                className='w-full aspect-video object-cover transition duration-300 hover:scale-110'
              />
              <h3 className='absolute right-0 bottom-4 bg-white px-8 py-2 text-black'>
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
