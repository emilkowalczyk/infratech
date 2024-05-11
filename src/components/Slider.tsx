'use client';

import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Button from './Button';

function Slider(props: any) {
  const responsive = {
    desktop: {
      breakpoint: { max: 5000, min: 1024 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
  };

  return (
    <div className='w-full flex flex-col relative'>
      <Carousel
        additionalTransfrom={0}
        arrows={true}
        autoPlay
        autoPlaySpeed={10000}
        centerMode={false}
        className='max-w-full z-0'
        containerClass='container'
        dotListClass=''
        draggable
        focusOnSelect={false}
        infinite
        itemClass=''
        keyBoardControl
        minimumTouchDrag={80}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        rewind
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=''
        slidesToSlide={1}
        swipeable
        responsive={responsive}
      >
        <div className='relative'>
          <Image
            width={1920}
            height={720}
            alt='x'
            src='/images/certificates.jpg'
            className='w-full min-h-[480px] h-auto object-cover max-h-[800px] block'
            priority
          />
          <div className='w-full h-full bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent z-10 absolute bottom-0 left-0'>
            <div className='px-5 pb-5 flex flex-col justify-end w-full h-full max-w-7xl mx-auto md:-translate-y-10'>
              <h1 className='text-3xl text-white font-semibold mb-6 md:text-6xl'>
                Konceptualna Przemiana Przestrzeni
              </h1>
              <p className='hidden md:block text-white mb-6'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
                delectus ea fugit non accusamus temporibus doloremque nostrum
                maiores, repudiandae eum deserunt eius. Eligendi, quaerat ad!
                Tempora amet et voluptas provident?
              </p>
              <Button label='Więcej realizacji' path='/realizacje' />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
