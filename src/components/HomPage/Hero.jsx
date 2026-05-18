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
        <section className="relative">

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                speed={1000}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation
                pagination={{
                    clickable: true,
                }}
                className="heroSwiper"
            >
                <SwiperSlide>
                    <Slide1 />
                </SwiperSlide>

                <SwiperSlide>
                    <Slide2 />
                </SwiperSlide>

                <SwiperSlide>
                    <Slide3 />
                </SwiperSlide>
            </Swiper>

            {/* CUSTOM STYLE */}
            <style jsx global>{`
                .heroSwiper {
                    position: relative;
                }

                /* Navigation Buttons */
                .heroSwiper .swiper-button-next,
                .heroSwiper .swiper-button-prev {
                    width: 52px;
                    height: 52px;
                    border-radius: 9999px;
                    background: rgba(255, 255, 255, 0.9);
                    backdrop-filter: blur(10px);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
                    color: #2563eb;
                    transition: all 0.3s ease;
                }

                .heroSwiper .swiper-button-next:hover,
                .heroSwiper .swiper-button-prev:hover {
                    background: #2563eb;
                    color: white;
                    transform: scale(1.08);
                }

                .heroSwiper .swiper-button-next::after,
                .heroSwiper .swiper-button-prev::after {
                    font-size: 18px;
                    font-weight: 700;
                }

                /* Pagination */
                .heroSwiper .swiper-pagination {
                    bottom: 25px !important;
                }

                .heroSwiper .swiper-pagination-bullet {
                    width: 12px;
                    height: 12px;
                    background: #cbd5e1;
                    opacity: 1;
                    transition: all 0.3s ease;
                }

                .heroSwiper .swiper-pagination-bullet-active {
                    width: 32px;
                    border-radius: 999px;
                    background: #2563eb;
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .heroSwiper .swiper-button-next,
                    .heroSwiper .swiper-button-prev {
                        display: none;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;