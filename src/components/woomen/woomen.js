import React from "react";
import styles from "./woomen.module.scss";
import Filter from "../filter/filterWomen";
import Image1 from "../header/assets/woomens/1.jpg"
import Image2 from "../header/assets/woomens/2.jpg"
import Image3 from "../header/assets/woomens/3.jpg"
import Image4 from "../header/assets/woomens/4.jpg"
import Image5 from "../header/assets/woomens/5.jpg"
import Image6 from "../header/assets/woomens/6.jpg"
import Image7 from "../header/assets/woomens/7.jpg"
import Image8 from "../header/assets/woomens/8.jpg"

const Woomen = () => {
	return (
			<section className={styles.woomens}>
				<div className={styles.woomens__container}>
					<Filter />
					<div className={styles.catalog__card}>
						<article className={styles.product_card}>
							<div className={styles.product_card__sale}>-50%</div>
								<a href="/" className={styles.product_card__image}>
									<span className={styles.product_card__item}><img src={Image1} alt="photo" /></span>
								</a>
								<div className={styles.product_card__body}>
									<h4 className={styles.product_card__title}>
										<a href="/" className={styles.roduct_card__link}>Women's tracksuit Q109</a>
									</h4>
									<div className={styles.product_card__rating}>
										<div className={styles.product_card__price}>$ 30.00</div>
										<div className={styles.rating__body}>
											<div className={styles.rating__active}></div>
											<div className={styles.rating__items}>
												<input type="radio" className={styles.rating__item} value="1" name="rating" />
												<input type="radio" className={styles.rating__item} value="2" name="rating" />
												<input type="radio" className={styles.rating__item} value="3" name="rating" />
												<input type="radio" className={styles.rating__item} value="4" name="rating" />
												<input type="radio" className={styles.rating__item} value="5" name="rating" />
											</div>
										</div>
									</div>
								</div>
						</article>
						<article className={styles.product_card}>
								<a href="/" className={styles.product_card__image}>
									<span className={styles.product_card__item}><img src={Image2} alt="photo" /></span>
								</a>
								<div className={styles.product_card__body}>
									<h4 className={styles.product_card__title}>
										<a href="/" className={styles.roduct_card__link}>Women's tracksuit Q109</a>
									</h4>
									<div className={styles.product_card__rating}>
										<div className={styles.product_card__price}>$ 30.00</div>
										<div className={styles.rating__body}>
											<div className={styles.rating__active}></div>
											<div className={styles.rating__items}>
												<input type="radio" className={styles.rating__item} value="1" name="rating" />
												<input type="radio" className={styles.rating__item} value="2" name="rating" />
												<input type="radio" className={styles.rating__item} value="3" name="rating" />
												<input type="radio" className={styles.rating__item} value="4" name="rating" />
												<input type="radio" className={styles.rating__item} value="5" name="rating" />
											</div>
										</div>
									</div>
								</div>
						</article>
						<article className={styles.product_card}>
								<a href="/" className={styles.product_card__image}>
									<span className={styles.product_card__item}><img src={Image3} alt="photo" /></span>
								</a>
								<div className={styles.product_card__body}>
									<h4 className={styles.product_card__title}>
										<a href="/" className={styles.roduct_card__link}>Women's tracksuit Q109</a>
									</h4>
									<div className={styles.product_card__rating}>
										<div className={styles.product_card__price}>$ 30.00</div>
										<div className={styles.rating__body}>
											<div className={styles.rating__active}></div>
											<div className={styles.rating__items}>
												<input type="radio" className={styles.rating__item} value="1" name="rating" />
												<input type="radio" className={styles.rating__item} value="2" name="rating" />
												<input type="radio" className={styles.rating__item} value="3" name="rating" />
												<input type="radio" className={styles.rating__item} value="4" name="rating" />
												<input type="radio" className={styles.rating__item} value="5" name="rating" />
											</div>
										</div>
									</div>
								</div>
						</article>
						<article className={styles.product_card}>
								<a href="/" className={styles.product_card__image}>
									<span className={styles.product_card__item}><img src={Image4} alt="photo" /></span>
								</a>
								<div className={styles.product_card__body}>
									<h4 className={styles.product_card__title}>
										<a href="/" className={styles.roduct_card__link}>Women's tracksuit Q109</a>
									</h4>
									<div className={styles.product_card__rating}>
										<div className={styles.product_card__price}>$ 30.00</div>
										<div className={styles.rating__body}>
											<div className={styles.rating__active}></div>
											<div className={styles.rating__items}>
												<input type="radio" className={styles.rating__item} value="1" name="rating" />
												<input type="radio" className={styles.rating__item} value="2" name="rating" />
												<input type="radio" className={styles.rating__item} value="3" name="rating" />
												<input type="radio" className={styles.rating__item} value="4" name="rating" />
												<input type="radio" className={styles.rating__item} value="5" name="rating" />
											</div>
										</div>
									</div>
								</div>
						</article>
						<article className={styles.product_card}>
								<a href="/" className={styles.product_card__image}>
									<span className={styles.product_card__item}><img src={Image5} alt="photo" /></span>
								</a>
								<div className={styles.product_card__body}>
									<h4 className={styles.product_card__title}>
										<a href="/" className={styles.roduct_card__link}>Women's tracksuit Q109</a>
									</h4>
									<div className={styles.product_card__rating}>
										<div className={styles.product_card__price}>$ 30.00</div>
										<div className={styles.rating__body}>
											<div className={styles.rating__active}></div>
											<div className={styles.rating__items}>
												<input type="radio" className={styles.rating__item} value="1" name="rating" />
												<input type="radio" className={styles.rating__item} value="2" name="rating" />
												<input type="radio" className={styles.rating__item} value="3" name="rating" />
												<input type="radio" className={styles.rating__item} value="4" name="rating" />
												<input type="radio" className={styles.rating__item} value="5" name="rating" />
											</div>
										</div>
									</div>
								</div>
						</article>
						<article className={styles.product_card}>
							<div className={styles.product_card__sale}>-50%</div>
								<a href="/" className={styles.product_card__image}>
									<span className={styles.product_card__item}><img src={Image6} alt="photo" /></span>
								</a>
								<div className={styles.product_card__body}>
									<h4 className={styles.product_card__title}>
										<a href="/" className={styles.roduct_card__link}>Women's tracksuit Q109</a>
									</h4>
									<div className={styles.product_card__rating}>
										<div className={styles.product_card__price}>$ 30.00</div>
										<div className={styles.rating__body}>
											<div className={styles.rating__active}></div>
											<div className={styles.rating__items}>
												<input type="radio" className={styles.rating__item} value="1" name="rating" />
												<input type="radio" className={styles.rating__item} value="2" name="rating" />
												<input type="radio" className={styles.rating__item} value="3" name="rating" />
												<input type="radio" className={styles.rating__item} value="4" name="rating" />
												<input type="radio" className={styles.rating__item} value="5" name="rating" />
											</div>
										</div>
									</div>
								</div>
						</article>
						<article className={styles.product_card}>
								<a href="/" className={styles.product_card__image}>
									<span className={styles.product_card__item}><img src={Image7} alt="photo" /></span>
								</a>
								<div className={styles.product_card__body}>
									<h4 className={styles.product_card__title}>
										<a href="/" className={styles.roduct_card__link}>Women's tracksuit Q109</a>
									</h4>
									<div className={styles.product_card__rating}>
										<div className={styles.product_card__price}>$ 30.00</div>
										<div className={styles.rating__body}>
											<div className={styles.rating__active}></div>
											<div className={styles.rating__items}>
												<input type="radio" className={styles.rating__item} value="1" name="rating" />
												<input type="radio" className={styles.rating__item} value="2" name="rating" />
												<input type="radio" className={styles.rating__item} value="3" name="rating" />
												<input type="radio" className={styles.rating__item} value="4" name="rating" />
												<input type="radio" className={styles.rating__item} value="5" name="rating" />
											</div>
										</div>
									</div>
								</div>
						</article>
						<article className={styles.product_card}>
							<div className={styles.product_card__sale}>-50%</div>
								<a href="/" className={styles.product_card__image}>
									<span className={styles.product_card__item}><img src={Image8} alt="photo" /></span>
								</a>
								<div className={styles.product_card__body}>
									<h4 className={styles.product_card__title}>
										<a href="/" className={styles.roduct_card__link}>Women's tracksuit Q109</a>
									</h4>
									<div className={styles.product_card__rating}>
										<div className={styles.product_card__price}>$ 30.00</div>
										<div className={styles.rating__body}>
											<div className={styles.rating__active}></div>
											<div className={styles.rating__items}>
												<input type="radio" className={styles.rating__item} value="1" name="rating" />
												<input type="radio" className={styles.rating__item} value="2" name="rating" />
												<input type="radio" className={styles.rating__item} value="3" name="rating" />
												<input type="radio" className={styles.rating__item} value="4" name="rating" />
												<input type="radio" className={styles.rating__item} value="5" name="rating" />
											</div>
										</div>
									</div>
								</div>
						</article>
						<button className={styles.woomens_all}>See All</button>
					</div>
				</div>
			</section>
	)
};


export default Woomen;