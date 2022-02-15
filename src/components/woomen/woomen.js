import React from "react";
import styles from "./woomen.module.scss";
import { Link } from "react-router-dom";
import { CardsWoomen } from "../cards-item/cards-woomen";
import { productType } from "../../constants/PROD_TYPE";
import { filterButtons } from "../../constants/FILTER_BUT";




const Woomen = () => {
	

	return (
			<section className={styles.woomens}>
				{productType.map(productType => (
					<div className={styles.woomens__container}>
						<div className={styles.filter_body__filter}>
						<div className={styles.filter__title}><Link to="/">{productType.toUpperCase()}{"'S"}</Link></div>
							<nav className={styles.filter__body}>
								<ul className={styles.filter__list}>
									<li className={styles.filter__item}>
										{filterButtons.map(btnName => (
											<a href="/" className={styles.filter__link}>{btnName}</a>
										))}
									</li>
								</ul>
							</nav>
						</div>
					<div className={styles.catalog__card}>		
						<CardsWoomen productType={productType} />
						<button className={styles.woomens_all}>See All</button>
					</div>
				</div>
				))}
			</section>
	)
};


export {Woomen};