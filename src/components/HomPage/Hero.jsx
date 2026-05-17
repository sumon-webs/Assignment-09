'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slide1 from '../slides/Slide1';
import Slide2 from '../slides/slide2';
import Slide3 from '../slides/Slide3';

const Hero = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop={true}
        >
            <SwiperSlide><Slide1/></SwiperSlide>
            <SwiperSlide><Slide2/></SwiperSlide>
            <SwiperSlide><Slide3/></SwiperSlide>
        </Swiper>
    );
};

export default Hero;