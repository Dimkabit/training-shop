import React from "react";
import  './mainBlock.scss';
import slide1 from "../assets/icons/main/slid1.png";
import block from "../assets/icons/main/block.png";
import block1 from "../assets/icons/main/block1.png";
import block2 from "../assets/icons/main/block2.png";
import leftArrow from "../assets/icons/left.svg";
//import classNames from 'classnames';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/scss';
import 'swiper/scss/navigation';

// import required modules
import { Navigation } from "swiper";

const MainBlock = () => {
	return (
		<main className="page">
			<div className="page__container">
				<div className="page-block">
					<div className="page-block__slider" data-test-id='main-slider'>
						<div className="block-page__slider">
							<div className="block-page__swiper">
								<div className="block-page__slide">
								<Swiper modules={[Navigation]}  spaceBetween={100} slidesPerView={1} navigation={{
                   	     nextEl: '.control-slide__next', 
                        prevEl: '.control-slide__prev',
                  	  }}>
								<SwiperSlide>
									<article className="slide-card">
										<div className="card-body">
										<img src={slide1} alt="slider"/>
										<div className="slid-card__bunner">
											<span>Banner</span>your Title text
										</div>
										</div>
									</article>
								</SwiperSlide>
								<SwiperSlide>
									<article className="slide-card">
										<div className="card-body">
										<img src={slide1} alt="slider"/>
										<div className="slid-card__bunner">
											<span>Banner</span>your Title text
										</div>
										</div>
									</article>
								</SwiperSlide>
								<SwiperSlide>
									<article className="slide-card">
										<div className="card-body">
										<img src={slide1} alt="slider"/>
										<div className="slid-card__bunner">
											<span>Banner</span>your Title text
										</div>
										</div>
									</article>
								</SwiperSlide>
								<div className="control-group__button">
									<button className="control-slide__prev"><img src={leftArrow} alt="arrow" /></button>
									<button className="control-slide__next"><img src={leftArrow} alt="arrow" /></button>
								</div>
								</Swiper>
							</div>
						</div>
					</div>
				</div>
				<div className="page-block__right">
					<div className="right__block">
						<img src={block} alt="block" />
						<span>women</span>
					</div>
					<div className="right__block">
						<img src={block1} alt="block1" />
						<span>men</span>
					</div>
					<div className="right__block">
						<img src={block2} alt="block2" />
						<span>Accessories</span>
					</div>
				</div>
				</div>
			</div>
		</main>
	)
};

export default MainBlock;