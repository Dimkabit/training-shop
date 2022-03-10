import React, { useState, useEffect, useCallback } from "react";
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
		 isChecked();
	}
	const isChecked = useCallback (() => {
		const changeMenuButtons = document.getElementsByClassName("filter__link");
		[...changeMenuButtons].forEach(btn => btn.children[0].checked ? btn.style.opacity = '100%' :  btn.style.opacity = '60%' );
  }, [])

  useEffect(() => {
		isChecked()
  }, [isChecked])
	

	return (
			<section className={styles.woomens}>
				
					<div className={styles.woomens__container} data-test-id={`clothes-${typeProduct}`} key={typeProduct}>
						<div className={styles.filter_body__filter}>
						<div className={styles.filter__title}><Link to="/">{typeProduct.toUpperCase()}{"'S"}</Link></div>
							<nav className={styles.filter__body}>
								<ul className={styles.filter__list}>
									<li className={styles.filter__item}>
									<label key="isNewArrivals" onChange={changeMenuButtons} className={`clothes-filter-btn`} data-test-id={`clothes-${typeProduct}-isNewArrivals`}> 
                            NEW ARRIVALS
                                <input type="radio" name={typeProduct} value='isNewArrivals' className="button-clothes-menu" defaultChecked/>
                            </label>
										{FILTERBUTTONS.map(({particulars, name}) => (
											<label key={particulars} onChange={changeMenuButtons} className={`clothes-filter-btn`} data-test-id={`clothes-${typeProduct}-${particulars}`}> {name}
                                <input type="radio" name={typeProduct} value={particulars} className="button-clothes-menu" />
                           		 </label>
											
										))}
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

						                    

						
					</div>
					<Link to={`/${typeProduct}`}>
							<button className={styles.woomens_all}> SEE ALL</button>
                    </Link>
				</div>
			
			</section>
	)
};


export {Woomen};