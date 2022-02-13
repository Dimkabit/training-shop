import React from 'react';
import styles from './Lookbook.module.scss';
import Seasons from './assets/seasons.jpg';
import Sales from './assets/sale.jpg';

const Lookbook = () => {
	return (
		<section className={styles.lookbook}>
			<div className={styles.lookbook__container}>
				<div className={styles.lookbook_block}>
				<div className={styles.lookbook_seasons__block}>
					<img src={Seasons} alt="collections" className={styles.lookbook_seasons__image} />
					<a href="/" className={styles.lookbook_seasons__link}><span>New Season</span>lookbook collection</a>
				</div>
				<div className={styles.lookbook_salle__block}>
					<img src={Sales} alt="collections" className={styles.lookbook_salle__image} />
					<a href="/" className={styles.lookbook_salle__link}><span>Sale</span><p>Get UP to <span className={styles.red}>50% off</span></p></a>
				</div>
				</div>
			</div>
		</section>
	)
};

export default Lookbook;