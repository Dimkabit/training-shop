import React from "react";
import styles from "./filter.module.scss";



const Filter = () => {
	return (
			<div className={styles.filters__container}>
				<div className={styles.filter_body__filter}>
				<div className={styles.filter__title}><a href="men-product-page.html">WOMEN’S</a></div>
					<nav className={styles.filter__body}>
						<ul className={styles.filter__list}>
							<li className={styles.filter__item}><a href="/" className={styles.filter__link_active}>NEW ARRIVALS</a></li>
							<li className={styles.filter__item}><a href="/" className={styles.filter__link}>SPECIALS</a></li>
							<li className={styles.filter__item}><a href="/" className={styles.filter__link}>BESTSELLERS</a></li>
							<li className={styles.filter__item}><a href="/" className={styles.filter__link}>MOST VIEWED</a></li>
							<li className={styles.filter__item}><a href="/" className={styles.filter__link}>FEATURED PRODUCTS</a></li>
						</ul>
					</nav>
				</div>
			</div>
	)
};

export default Filter;