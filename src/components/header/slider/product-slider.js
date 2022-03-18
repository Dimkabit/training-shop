import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./product-slider.scss";

import { FreeMode, Navigation, Thumbs } from "swiper";

import Arrow from "./assets/arrow.svg";

const MainSlider = (img) => {
    const image = img.img;
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (

        <div className='product-slider' data-test-id="product-slider">
            <Swiper

                spaceBetween={20}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="product-slider-first"
                loop={true}
                breakpoints={{
                        992:{
                            spaceBetween: 30,
                            slidesPerView: 1
                        }
                    }} 
                 >
                {
                    image.map((img, i) => (
                        <SwiperSlide key={i}>
                            <img src={`https://training.cleverland.by/shop${img.url}`} alt="img" width="448" heigth="560"/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className="product-slider-second">
                <div className="button-slider">
                    <button className="btn-slider-top"><img src={Arrow} alt="img" width="30" heigth="30"/></button>
                    <button className="btn-slider-bottom"><img src={Arrow} alt="img" width="30" heigth="30"/></button>
                </div>
                
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={20}
                    slidesPerView={3}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="product-slider-second"
                    breakpoints={{
                        470:{
                            spaceBetween: 30,
                            slidesPerView: 4
                        }
                    }} 
                    navigation={{
                        nextEl: '.btn-slider-bottom', 
                        prevEl: '.btn-slider-top',
                    }}
                    direction={'vertical'}
                >
                    {
                        image.map((img, i) => (
                            <SwiperSlide key={i}>
                                <img src={`https://training.cleverland.by/shop${img.url}`} alt="img" width="94" heigth="114"/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export  { MainSlider };