import React from "react";
import "./productPage.scss";
import { MenuTypePage } from "../../components/menuTypePage/menuTypePage";
import { SLIDEPROD } from "../../constants/Product";
import { Link } from "react-router-dom";

import Share from "../products-page/assets/icons/share.svg";
import Slide1 from "./assets/1.jpg";
import Slide2 from "./assets/2.png";
import Slide3 from "./assets/3.png";
import Slide4 from "./assets/4.png";
import Smoll1 from "./assets/5.png";
import Smoll2 from "./assets/6.png";
import Smoll3 from "./assets/7.png";
import Arrow from "./assets/icons/arrow.svg";
import Heandle from "./assets/icons/hanger.svg";
import Heart from "./assets/icons/heart.svg";
import Compare from "./assets/icons/compare.svg";
import Track from "./assets/icons/truck.svg";
import Refresh from "./assets/icons/refresh.svg";
import Mail from "./assets/icons/mail.svg";
import Stripe from "./assets/icons/Stripe.svg";
import AES from "./assets/icons/AES.png";
import Visa from "./assets/icons/visa.png";
import American from "./assets/icons/american-express.png";
import Discover from "./assets/icons/discover.png";
import Mastercard from "./assets/icons/mastercard.png";
import Paypal from "./assets/icons/paypal.png";
import Stars from "./assets/icons/stars.svg";
import Anonation from "./assets/icons/annotation.png";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

const ProductPage = (page) => {

	const pages = page.page;
	const productType = pages.toLowerCase();
	const pageType = page.page + ` ► ${page.page}'s tracksuit Q109`;
	return (
		<div className="productpage" data-test-id={`product-page-${productType}`}>
			<div className="productpage__top">
			<div className="productpage__container">
				<div className="woomens-product__header">
					<div className="woomens-product__pages">
						<MenuTypePage page={pageType}/>
					</div>
					<div className="woomens-product__share">
						<img src={Share} alt="share" />
						<a href="/">Share</a>
					</div>
				</div>
				<div className="woomen-page__title">{`${page.page}'s tracksuit Q109`}</div>
				<div className="woomens-product__rating">
						<div className="woomens-product__review">
							<div className="rating rating_set">
								<div className="rating__body">
									<div className="rating__active"></div>
									<div className="rating__items">
										<input type="radio" className="rating__item" value="1" name="rating" />
										<input type="radio" className="rating__item" value="2" name="rating" />
										<input type="radio" className="rating__item" value="3" name="rating" />
										<input type="radio" className="rating__item" value="4" name="rating" />
										<input type="radio" className="rating__item" value="5" name="rating" />
									</div>
								</div>
							</div>
							<span>2 Reviews</span>
						</div>
						<div className="woomens-product__info">
							<div className="info__sku">
								<span >SKU:</span>
								<span className="info__text">777</span>
							</div>
							<div className="avalibl">
								<span>Availability:</span>
								<span className="avalibl__text">In Stock</span>
							</div>
						</div>
				</div>
			</div>
			</div>
			<div class="product">
					<div class="product__container">
						<div class="product__main main-product">
							<div class="main-product__images images-product">
								<div class="images-product__slider">
									<div class="images-product__swiper">
										<div class="images-product__slide">
											<img src={Slide1} alt="product" />
										</div>
									</div>
								</div>
								<div class="images-product__thumbs thumbs-images">
									<div class="buttons__group">
										<div class="buttonc-top"><img src={Arrow} alt="arrow"/></div>
										<div class="buttonc"><img src={Arrow} alt="arrow"/></div>
									</div>
									<div class="thumbs-images__swiper ">
										<div class="thumbs-images__slide swiper-slide-thumb-active">
											<img src={Slide1} alt="product" width="94px" height="114px" />
										</div>
										<div class="thumbs-images__slide">
											<img src={Slide2} alt="product" width="94px" height="114px" />
										</div>
										<div class="thumbs-images__slide">
											<img src={Slide3} alt="product" width="94px" height="114px" />
										</div>
										<div class="thumbs-images__slide">
											<img src={Slide4} alt="product" width="94px" height="114px" />
										</div>
									</div>
								</div>
							</div>
							<div class="main-product__body body-product">
								<div class="body-product__header header-product">
									<div class="header-product__line">
										<div class="header-product__title-block">
											<h5 class="header-product__title">Color:</h5>
											<span class="header-product__subtitle">Blue</span>
										</div>
									</div>
									<div class="header-product__image">
										<img class="header-product__active" src={Slide1} alt="" width="64" height="64"/>
										<img src={Smoll1} alt="" width="64" height="64" />
										<img src={Smoll2} alt="" width="64" height="64" />
										<img src={Smoll3} alt="" width="64" height="64" />
									</div>
									<div class="header-product__sizes sizes-prod">
										<div class="size-prod__size"><p>Size:</p> <span>S</span></div>
										<div class="product-button-btn">
											<button class="button-size">XS</button>
											<button class="button-size active">S</button>
											<button class="button-size">M</button>
											<button class="button-size">L</button>
										</div>
										<div class="sizes-prod__guide">
											<img src={Heandle} alt="heander" />
											<span>Size guide</span>
										</div>
									</div>
								</div>
								<div class="product-information__price">
									<span>$ 379.99</span>
									<button>ADD TO CARD</button>
									<img src={Heart} alt='img' />
									<img src={Compare} alt='img' />
								</div>
								
								<div class="product-information__services">
									<div class="product-information__block">
										 <img src={Track} alt='img' />
										 <span>  Shipping & Delivery</span>
									</div>
									<div class="product-information__block">
										 <img src={Refresh} alt='img' />
										 <span>  Returns & Exchanges</span>
									</div>
									<div class="product-information__block">
										 <img src={Mail} alt='img' />
										 <span>  Ask a question</span>
									</div>
								</div>
								<div class="product-information__check">
									<p class="product-information__title">GUARANTEED SAFE CHECKOUT</p>
									<span></span>

								</div>
								<div class="product-information__pay">
									<img src={Stripe} alt="stripe" />
									<img src={AES} alt="aes" />
									<img src={Paypal} alt="paypal" />
									<img src={Visa} alt="visa" />
									<img src={Mastercard} alt="mastercard" />
									<img src={Discover} alt="discaver" />
									<img src={American} alt="american" />
								</div>
								<div class="product-information__description">
									<button>DESCRIPTION</button>
								</div>
								<div class="body-product__table">
									<div class="table-product__title">ADDITIONAL INFORMATION</div>
									<div class="table-product">
										<div class="table-product__label">Color:</div>
										<div class="table-product__value">Blue, White, Black, Grey</div>
										<div class="table-product__label">Size:</div>
										<div class="table-product__value">XS, S, M, L</div>
										<div class="table-product__label">Material:</div>
										<div class="table-product__value">100% Polyester</div>
									</div>
								</div>
								<div class="body-product__review rewiew-product">
									<span class="rewiew-product__title">REVIEWS</span>
									<div class="rewiew-product__ratings">
										 <div class="rewiew-product__review"><img src={Stars} alt="stars" /><span>2 Reviews</span></div>
										 <div class="rewiew-product__write"><img src={Anonation} alt="stars" /><span>Write a review</span></div>
									</div>
									<div class="rewiew-product__rating">
										 <div><span class="text1">Oleh Chabanov</span></div>
										 <div><span class="text">3 months ago </span><img src={Stars} alt="stars" /></div>
									</div>
									<div class="rewiew-product__rating-text">On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment</div>
									<div class="rewiew-product__rating">
										 <div><span class="text1">ShAmAn design</span></div>
										 <div><span class="text">3 months ago </span><img src={Stars} alt="stars" /></div>
									</div>
									<div class="rewiew-product__rating-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti</div>
								</div>

							</div>
						</div>
						<div class="product-footer footer-slider">
							<div class="footer-slider__nav">
								<div class="footer-slider__title">RELATED PRODUCTS</div>
								<div class="footer-slider__group">
									<button class="footer-slider__button-prev" ><img src={Arrow} alt="arrow" /></button>
									<button class="footer-slider__button-next" ><img src={Arrow} alt="arrow" /></button>
								</div>
							</div>
							<div class="footer-slider__body">
								<div class="product-footer__slider" data-test-id='related-slider'>
									<div class="product-footer__swiper">
										<div class="product-footer__slide">
											<Swiper modules={[Navigation]} spaceBetween={110} slidesPerView={4}
												   navigation={{
													nextEl: '.footer-slider__button-next',
													prevEl: '.footer-slider__button-prev',
													}}
													breakpoints= {{
														320: {
															slidesPerView: 1,
															spaceBetween: 110,
															autoHeight: true,
														},
														554: {
															slidesPerView: 2,
															spaceBetween: 20,
														},
														816: {
															slidesPerView: 3,
															spaceBetween: 70,
														},
														992: {
															slidesPerView: 3,
															spaceBetween: 70,
														},
														1268: {
															slidesPerView: 4,
															spaceBetween: 30,
														},
													}}
											>
											{SLIDEPROD.map(({id, name, price, img, category}) => (
												<SwiperSlide>
													<article className="product-cards">
													<div className="product-card">
														<div className="product-card__sale">-50%</div>
															<Link to={`/${category}/${id}`} className="product-card__image" data-test-id={`clothes-card-${category}`} key={`${category}${id}`}>
															<span className="product-card__item"><img src={img} alt="card"/></span>
															</Link>
															<div className="product-card__body">
																<h4 className="product-card__title">
																	<a href="/" className="roduct-card__link">{name}</a>
																</h4>
																<div className="product-card__rating">
																	<div className="product-card__price">{price}</div>
																	<div className="rating__body">
																		<div className="rating__active"></div>
																		<div className="rating__items">
																			<input type="radio" className="rating__item" value="1" name="rating" />
																			<input type="radio" className="rating__item" value="2" name="rating" />
																			<input type="radio" className="rating__item" value="3" name="rating" />
																			<input type="radio" className="rating__item" value="4" name="rating" />
																			<input type="radio" className="rating__item" value="5" name="rating" />
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</article>
												</SwiperSlide>					
												))}
											</Swiper>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
		</div>
	)
};

export default ProductPage;