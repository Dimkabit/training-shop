import React from "react";
import styles from "./productsPage.module.scss";
import { MenuTypePage } from "../../components/menuTypePage/menuTypePage";
import { CardsWoomen } from "../../components/cards-item/cards-woomen";
import adjst from "./assets/icons/adjustments.svg";
import menu from "./assets/icons/menu.svg";
import share from "./assets/icons/share.svg";
import view from "./assets/icons/view.svg";


const MenProductsPage = (page) => {

	const typePage = page.page;
	const typePageUpper = typePage.toUpperCase();
	const productType  = typePage.toLowerCase();
	console.log(typePage);
	console.log(typePageUpper);
	console.log(productType);

	return (
		<section className={styles.woomen} data-test-id={`products-page-${productType}`}>
			<div className={styles.woomen_product}>
				<div className={styles.woomens_product__container}>
					<div className={styles.woomens_product__header}>
						<div className={styles.woomens_product__pages}>
							<MenuTypePage page={typePage} />
						</div>
						<div className={styles.woomens_product__share}>
							<img src={share} alt="share" />
							<a href="/">Share</a>
						</div>
					</div>
					<div className={styles.woomen_page__title}>{typePageUpper}</div>
				</div>
			</div>
			<div className={styles.woomen__container}>
				<div className={styles.filter_body__filter}>
					<div className={styles.filter__title}>
						<img src={adjst} alt="icon" />
						Filter
					</div>
					<div className={styles.filter__center}>
						<img src={menu} className={styles.active} alt="menu" />
						<img src={view} alt="view" />
					</div>
					<div className={styles.filter__control}>
						<select name="form[]" className={styles.control}>
							<option value="1" selected>BESTSELLERS</option>
							<option value="2">SPECIALS</option>
							<option value="3">MOST VIEWED</option>
							<option value="4">FEATURED PRODUCTS</option>
							<option value="5" selected>NEW ARRIVALS</option>
						</select>
					</div>
				</div>
				<div className={styles.woomen}>
				<div className={styles.woomens__container}>

					<div className={styles.catalog__card}>		
						<CardsWoomen productType={productType} />
						<button className={styles.woomens_all}>See All</button>
					</div>
				</div>
				</div>
				
			</div>
		</section>
	)
};

export { MenProductsPage };