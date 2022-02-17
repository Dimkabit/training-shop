import React from "react";
import styles from "./productPage.module.scss";
import { MenuTypePage } from "../../components/menuTypePage/menuTypePage";


const ProductPage = (page) => {

	const pages = page.page;
	const productType = pages.toLowerCase();
	const pageType = page.page + `${page.page}'s tracksuit Q109`;
	return (
		<div className={styles.productpage} data-test-id={`product-page-${productType}`}>
			<MenuTypePage page={pageType}/>
		</div>
	)
};

export default ProductPage;