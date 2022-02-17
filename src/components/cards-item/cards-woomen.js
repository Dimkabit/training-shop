import React from "react";
import styles from "./cards.module.scss";
import { Link } from 'react-router-dom';
import { CLOTHES } from "../../constants/CLOHTES";


const CardsWoomen = (productType) => {
	const typeProduct = Object.values(productType).join()
	return (
		<>
            {CLOTHES.map(({id, name, price, img, category}) => (
                
                typeProduct === category ?
                <article className={styles.product_card}>
					 <div className={styles.product_card__sale}>-50%</div>
						<Link to={`/${typeProduct}/${id}`} className={styles.product_card__image} data-test-id={`clothes-card-${typeProduct}`} key={`${category}${id}`}>
						<span className={styles.product_card__item}><img src={img} alt="card" /></span>
						</Link>
						<div className={styles.product_card__body}>
							<h4 className={styles.product_card__title}>
								<a href="/" className={styles.roduct_card__link}>{name}</a>
							</h4>
							<div className={styles.product_card__rating}>
								<div className={styles.product_card__price}>{price}</div>
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
                : null
            ))}
		</>
	)
};

export {CardsWoomen};

