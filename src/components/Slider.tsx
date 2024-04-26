'use client';

import Image from 'next/image';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Heading from './Heading';

function Slider() {
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
    <div className='my-20 w-full flex flex-col'>
      <Heading
        label='Nasze realizacje'
        textColor='text-black'
        bgColor='bg-black'
        underline
      />
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={10000}
        centerMode={false}
        className='max-w-full'
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
        showDots
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
            src='/images/electrical.jpg'
            className='w-auto object-cover max-h-[720px] block'
            priority
          />
        </div>
        <div className='relative'>
          <Image
            width={1920}
            height={720}
            alt='x'
            src='/images/smarthome.jpg'
            className='w-auto object-cover max-h-[720px] block'
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
