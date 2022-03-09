import React from "react";
import styles from "./cards.module.scss";
import { Link } from 'react-router-dom';
import {StarRating} from "../rating/rating";
import classNames from "classnames";





const CardsWoomen = (product) => {
	const prodInfo = product.product;

	

	return (
		<>
            
                
               
                <article className={styles.product_card} >
					 {!prodInfo.discount ? '' : <div className={styles.product_card__sale}>{prodInfo.discount}</div>}
						<Link to={`/${prodInfo.category}/${prodInfo.id}`} className={styles.product_card__image} data-test-id={`clothes-card-${prodInfo.typeProduct}`}>
						<span className={styles.product_card__item}><img src={`https://training.cleverland.by/shop${prodInfo.images[0]?.url}`} alt="card" width="255"/></span>
						</Link>
						<div className={styles.product_card__body}>
							<h4 className={styles.product_card__title}>
								<a href="/" className={styles.roduct_card__link}>{prodInfo.name}</a>
							</h4>
							<div className={styles.product_card__rating}>
								<div className={classNames('styles.product_card__price', {active: prodInfo.discount !== null})}>$ {prodInfo.price}</div>
								<div className={styles.rating__body}>
									<StarRating rating={prodInfo.rating}/>
								</div>
							</div>
						</div>
					</article>

		</>
	)
};

export {CardsWoomen};

