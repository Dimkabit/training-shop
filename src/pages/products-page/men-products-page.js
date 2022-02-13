import React from "react";
import styles from "./productsPage.module.scss";
import Men from "../../components/men/men";
import adjst from "./assets/icons/adjustments.svg";
import menu from "./assets/icons/menu.svg";
import share from "./assets/icons/share.svg";
import tt from "./assets/icons/tt.svg";
import view from "./assets/icons/view.svg";
import { Link } from "react-router-dom";


const MenProductsPage = () => {
	return (
		<section className={styles.woomen} data-test-id={'products-page-men'}>
			<div className={styles.woomen_product}>
				<div className={styles.woomens_product__container}>
					<div className={styles.woomens_product__header}>
						<div className={styles.woomens_product__pages}>
							<Link to='/' className={styles.woomens_product__page}>Home</Link>
							<img src={tt} alt="icon" />
							<Link to={'/MenProductsPage'} className={styles.woomens_product__page_active}>Men</Link>
						</div>
						<div className={styles.woomens_product__share}>
							<img src={share} alt="share" />
							<a href="/">Share</a>
						</div>
					</div>
					<div className={styles.woomen_page__title}>men</div>
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
				<Men />
			</div>
		</section>
	)
};

export default MenProductsPage;