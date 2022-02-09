import React from "react";
import styles from './mainBlock.module.scss';
import slide1 from "../assets/icons/main/slid1.png";
import block from "../assets/icons/main/block.png";
import block1 from "../assets/icons/main/block1.png";
import block2 from "../assets/icons/main/block2.png";
import leftArrow from "../assets/icons/left.svg";

const MainBlock = () => {
	return (
		<main className={styles.page}>
			<div className={styles.page__container}>
				<div className={styles.page_block}>
				<div className={styles.page_block__slider}>
					<div className={styles.block__page_slider}>
						<div className={styles.block__page_swiper}>
							<div className={styles.block__page_slide}>
								<article className={styles.slide_card}>
									<img src={slide1} alt="slider"/>
									<div className={styles.slide_card__bunner}>
										<span>Banner</span>your Title text
									</div>
									<div className={styles.control_group__button}>
										<button className={styles.control_slide__prev}><img src={leftArrow} alt="arrow" /></button>
										<button className={styles.control_slide__next}><img src={leftArrow} alt="arrow" /></button>
									</div>
								</article>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.page_block_right}>
					<div className={styles.right_block}>
						<img src={block} alt="block" />
						<a href="woomen-product-page.html">Women</a>
					</div>
					<div className={styles.right_block}>
						<img src={block1} alt="block1" />
						<a href="men-product-page.html">men</a>
					</div>
					<div className={styles.right_block}>
						<img src={block2} alt="block2" />
						<a href="/">Accessories</a>
					</div>
				</div>
				</div>
			</div>
		</main>
	)
};

export default MainBlock;