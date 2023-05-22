import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, EffectCoverflow } from "swiper";

import './index.less';
// Import Swiper styles
import "swiper/swiper.less";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
SwiperCore.use([Navigation, EffectCoverflow]);

const CoverflowSlider = () => {
  return (
    <Swiper
        navigation
        pagination={{ clickable: true }}
        effect="coverflow"
        initialSlide={1}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }}
        slidesPerView={2}
        centeredSlides
        style={{ height: '5rem' }}
      >
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-1.jpg)"
          }}
        >
          Slide 1
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-2.jpg)"
          }}
        >
          Slide 2
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-3.jpg)"
          }}
        >
          Slide 3
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-4.jpg)"
          }}
        >
          Slide 4
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-5.jpg)"
          }}
        >
          Slide 5
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-6.jpg)"
          }}
        >
          Slide 6
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-7.jpg)"
          }}
        >
          Slide 7
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-8.jpg)"
          }}
        >
          Slide 8
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-9.jpg)"
          }}
        >
          Slide 9
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-10.jpg)"
          }}
        >
          Slide 10
        </SwiperSlide>
      </Swiper>
  );
};

export default CoverflowSlider;