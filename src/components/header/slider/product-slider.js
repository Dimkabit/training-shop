import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./product-slider.scss";

import { FreeMode, Navigation, Thumbs } from "swiper";

import Slide1 from "./assets/1.jpg";
import Slide2 from "./assets/2.png";
import Slide3 from "./assets/3.png";
import Slide4 from "./assets/4.png";
import Arrow from "./assets/arrow.svg";

const MainSlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (

        <div className='product-slider' data-test-id="product-slider">
            <Swiper

                spaceBetween={20}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="product-slider-first"
                breakpoints={{
                        992:{
                            spaceBetween: 30,
                            slidesPerView: 1
                        }
                    }} 
                 >
                <SwiperSlide>
                    <img src={Slide1} alt="img" width="448" height="590"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Slide2} alt="img" width="448" height="590"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Slide3} alt="img" width="448" height="590"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Slide3} alt="img" width="448" height="590"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Slide4} alt="img" width="448" height="590"/>
                </SwiperSlide>
            </Swiper>
            <div className="product-slider-second">
                <div className="button-slider">
                    <button className="btn-slider-top"><img src={Arrow} alt="img" /></button>
                    <button className="btn-slider-bottom"><img src={Arrow} alt="img" /></button>
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
                    <SwiperSlide>
                        <img src={Slide1} alt="img" width="94px" height="114px"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Slide2} alt="img" width="94px" height="114px"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Slide3} alt="img" width="94px" height="114px"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Slide3} alt="img" width="94px" height="114px"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Slide4} alt="img" width="94px" height="114px"/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default MainSlider;