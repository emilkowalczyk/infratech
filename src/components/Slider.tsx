'use client';

import Image from 'next/image';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Heading from './Heading';
import Button from './Button';

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
    <div className='my-20 w-full flex flex-col relative'>
      <Heading
        label='Nasze realizacje'
        textColor='text-black'
        bgColor='bg-black'
        underline
      />
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
            className='w-full min-h-[480px] h-auto object-cover max-h-[640px] block'
            priority
          />
        </div>
      </Carousel>
      <div className='fixed '>
        <h1>implementation title</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
          delectus ea fugit non accusamus temporibus doloremque nostrum maiores,
          repudiandae eum deserunt eius. Eligendi, quaerat ad! Tempora amet et
          voluptas provident?
        </p>
        <Button label='Więcej realizacji' path='/realizacje' />
      </div>
    </div>
  );
}

export default Slider;
