import React, { useState } from "react";
import styles from "./woomen.module.scss";
import './woomen.scss';
import { Link } from "react-router-dom";
import { CardsWoomen } from "../cards-item/cards-woomen";

//import { productType } from "../../constants/PROD_TYPE";
import { FILTERBUTTONS } from "../../constants/FILTER_BUT";
import { PRODUCTS } from "../../constants/products";




const Woomen = (typeCategory) => {
	const typeProduct = typeCategory.typeCategory;
	const [particulars, setParticulars] = useState('isNewArrivals');
	
	const changeMenuButtons = (e) => {
		 setParticulars(e.target.value);
	}
	
	

	return (
			<section className={styles.woomens}>
				
					<div className={styles.woomens__container} data-test-id={`clothes-${typeProduct}`} key={typeProduct}>
						<div className={styles.filter_body__filter}>
						<div className={styles.filter__title}><Link to="/">{typeProduct.toUpperCase()}{"'S"}</Link></div>
							<nav className={styles.filter__body}>
								<ul className={styles.filter__list}>
									<li className={styles.filter__item}>
										{FILTERBUTTONS.map(({particulars, name}) => {

											return <>
											<button className='filter__link' key={particulars} onClick={changeMenuButtons} value={particulars} data-test-id={`clothes-${typeProduct}-${particulars}`}>{name}</button>
											
											</>
											
										})}
									</li>
								</ul>
							</nav>
						</div>
					<div className={styles.catalog__card}>		
							{PRODUCTS[typeProduct].map(product => (
								product.particulars[particulars] === true ?
							<CardsWoomen product={product} key={product.id} />
							: null
						))}

						<button className={styles.woomens_all}>See All</button>
					</div>
				</div>
			
			</section>
	)
};


export {Woomen};