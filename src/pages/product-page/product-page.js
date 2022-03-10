
import React, {useState} from "react";
import "./productPage.scss";
import { MenuTypePage } from "../../components/menuTypePage/menuTypePage";
import {StarRating} from "../../components/rating/rating";
import { useParams } from "react-router-dom";
import { CardsWoomen } from "../../components/cards-item/cards-woomen";
import { useEffect } from "react";

//import { Link } from "react-router-dom";
import { MainSlider } from "../../components/header/slider/product-slider";
import { PRODUCTS } from "../../constants/products";

import Share from "../products-page/assets/icons/share.svg";
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
import Anonation from "./assets/icons/annotation.png";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

function ProductPage (page) {
	const pages = page.page;

	let idProduct = useParams();
	let product = PRODUCTS[pages.toLowerCase()].find(prod => prod.id===idProduct.id);
	let nameProduct = product.name;
	let materialProduct = product.material;
	let priceProduct = product.price;
	let sizesProduct = product.sizes;
	let reviewsProduct = product.reviews;
	//let discountProduct = product.discount;
	let ratingProduct = product.rating;

	let colorProd = [];
	product.images.forEach(color => {
		 let res = colorProd.some(col => col === color.color);
		 return res !== true ? colorProd.push(color.color) : null; 
	})

	const isChecked = () => {
		const sizeElem = document.getElementsByClassName("size-btn");
		sizeElem[0].children[0].defaultChecked = true;
		if (sizeElem[0].children[0].defaultChecked) {
			  sizeElem[0].style.border ='2px solid black'
		 };
	};

	let colorImgProd = [];
	colorProd.forEach(color => {
		 product.images.find(prodcol => prodcol.color === color ? colorImgProd.push([prodcol.url, prodcol.color]) : null)
	})

	const [colorImg, setColorImg] = useState(colorProd[0]);

	const colorImgProduct = (e) => {  
		 setColorImg(e.target.name);
	}

	const buttonStyleChangeColor = () => {
		 let btnColorImg = document.getElementsByClassName("header-product");
		 [...btnColorImg].forEach(btn => btn.name === colorImg ? btn.style.border = '2px solid black' : btn.style.border = 'none');  
	}
	
	useEffect(() => {
		 buttonStyleChangeColor()
	}, [buttonStyleChangeColor])

	const [useSize, setUseSize] = useState([]);

	const selectedSize = (e) => {
		 let arrSize = [...useSize];
		 if(e.target.checked === true) {
			  arrSize.push(e.target.value);
		 } else {
			  arrSize.forEach((size, i) => {
					return size === e.target.value ? arrSize.splice(i, 1) : null;
			  });
		 }
		 setUseSize(arrSize);
	}

	const buttonChangeSize = (e) => {
		 e.target.checked === true ? e.currentTarget.style.border = '2px solid black' : e.currentTarget.style.border = 'none' 
	}
	
	const defaultSelect = () => {
		 setColorImg(colorProd[0]);
		 setUseSize([sizesProduct[0]])
	}
	
	useEffect(() => {
		 defaultSelect()
	}, [colorProd[0]])

	useEffect(() => {
		 defaultSelect()
	}, [sizesProduct[0]])

	useEffect(() => {
		 isChecked()
	}, [isChecked]);


	const productType = pages.toLowerCase();
	const pageType = page.page;
	
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
				<div className="woomen-page__title">{nameProduct}</div>
				<div className="woomens-product__rating">
						<div className="woomens-product__review">
							<div className="rating rating_set">
								<div className="rating__body">
									<StarRating  rating={ratingProduct}/>
								</div>
							</div>
							<span>{reviewsProduct.length} 2 Reviews</span>
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
			<div className="product">
					<div className="product__container">
						<div className="product__main main-product">
							<div className="main-product__images images-product">
								<MainSlider img={product.images}/>
							</div>
							<div className="main-product__body body-product">
								<div className="body-product__header header-product">
									<div className="header-product__line">
										<div className="header-product__title-block">
											<h5 className="header-product__title">Color:</h5>
											<span className="header-product__subtitle">{colorImg}</span>
										</div>
									</div>
									<div className="header-product__image">
									{
                                colorImgProd.map((img, i) => (
                                    <img className="header-product active" src={`https://training.cleverland.by/shop${img[0]}`} name={img[1]} onClick={colorImgProduct} alt='img' key={i}  width="64" height="64"/>
                                ))
                            }

									</div>
									<div className="header-product__sizes sizes-prod">
										<div className="size-prod__size">
										<p>Size:</p> 
											{useSize.map((size, i) => (
											<span key={i} className="text">{size}</span>
										))}
										</div>
										<div className="product-button-btn">
                            {sizesProduct.map((size, i) => (
                                <div className="size-btn" key={i}>
                                    <input type='checkbox' name={size} value={size} key={i} id={size} onChange={selectedSize} />
                                    <label htmlFor={size} onClick={buttonChangeSize}>{size}</label>
                                </div>
                            ))}
										</div>
										<div className="sizes-prod__guide">
											<img src={Heandle} alt="heander" />
											<span>Size guide</span>
										</div>
									</div>
								</div>
								<div class="product-information__price">
									<span>$ {priceProduct}</span>
									<button>ADD TO CARD</button>
									<img src={Heart} alt='img' />
									<img src={Compare} alt='img' />
								</div>
								
								<div className="product-information__services">
									<div className="product-information__block">
										 <img src={Track} alt='img' />
										 <span>  Shipping & Delivery</span>
									</div>
									<div className="product-information__block">
										 <img src={Refresh} alt='img' />
										 <span>  Returns & Exchanges</span>
									</div>
									<div className="product-information__block">
										 <img src={Mail} alt='img' />
										 <span>  Ask a question</span>
									</div>
								</div>
								<div className="product-information__check">
									<p className="product-information__title">GUARANTEED SAFE CHECKOUT</p>
									<span></span>

								</div>
								<div className="product-information__pay">
									<img src={Stripe} alt="stripe" />
									<img src={AES} alt="aes" />
									<img src={Paypal} alt="paypal" />
									<img src={Visa} alt="visa" />
									<img src={Mastercard} alt="mastercard" />
									<img src={Discover} alt="discaver" />
									<img src={American} alt="american" />
								</div>
								<div className="product-information__description">
									<button>DESCRIPTION</button>
								</div>
								<div className="body-product__table">
									<div className="table-product__title">ADDITIONAL INFORMATION</div>
									<div className="table-product">
										<div className="table-product__label">Color:</div>
										{colorProd.map(color =>(<div className="table-product__value" key={color}>{color}</div>))}
										<div className="table-product__label">Size:</div>
										{sizesProduct.map((size, i) => (<div className="table-product__value" key={i}>{size}</div>))}
										<div className="table-product__label">Material:</div>
										<div className="table-product__value">{materialProduct}</div>
									</div>
								</div>
								<div className="body-product__review rewiew-product">
									<span className="rewiew-product__title">REVIEWS</span>
									<div className="rewiew-product__ratings">
										 <StarRating rating={ratingProduct} />
										 <div className="rewiew-product__write"><img src={Anonation} alt="stars" /><span>Write a review</span></div>
									</div>
									{reviewsProduct.map(reviews => (
										<>
										<div className="rewiew-product__rating" key={reviews.id}>
											<div><span className="text1">{reviews.name}</span></div>
											<div><span className="text">3 months ago </span><StarRating rating={reviews.rating}/></div>
										</div>
										<div className="rewiew-product__rating-text">{reviews.text}</div>
										</>
									))}
								</div>

							</div>
						</div>
						<div className="product-footer footer-slider">
							<div className="footer-slider__nav">
								<div className="footer-slider__title">RELATED PRODUCTS</div>
								<div className="footer-slider__group">
									<button className="footer-slider__button-prev" ><img src={Arrow} alt="arrow" /></button>
									<button className="footer-slider__button-next" ><img src={Arrow} alt="arrow" /></button>
								</div>
							</div>
							<div className="footer-slider__body">
								<div className="product-footer__slider" data-test-id='related-slider'>
									<div className="product-footer__swiper">
										<div className="product-footer__slide">
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
											{PRODUCTS[pages.toLowerCase()].map(product => (
												<SwiperSlide to={`/${product.category}/${product.id}`} key={`${product.category}${product.id}`}>
													<CardsWoomen product={product} key={product.id} />
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

export {ProductPage};