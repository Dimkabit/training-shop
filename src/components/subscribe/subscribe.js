import React from "react";
import styles from "./subscribe.module.scss";
import Woomen from "./assets/woomen.png";
import Men from "./assets/men.png";


const Subscribe = () => {
	return (
		<section className={styles.subscribe}>
			<div className={styles.subscribe__container}>
			
				<div className={styles.subscribe_block__body}>
					<div className={styles.subscribe_block__woomen_block}>
						<img className={styles.subscribe_block__woomen} src={Woomen} alt="woomen" />
					</div>
					<div className={styles.subscribe_block__banner_block}>
						<div className={styles.subscribe_block__banner}>
							<div className={styles.subscribe_block__subtitle}>Special Offer</div>
							<div className={styles.subscribe_block__title}>Subscribe And <span>Get 10% Off</span></div>
							<form className={styles.form} action="">
								<input type="email" name="form[]" data-error="Ошибка" placeholder="Enter your email" className={styles.input} />
								<button type="submit" className={styles.button}>Subscribe</button>
							</form>
						</div>
					</div>
					<img className={styles.subscribe_block__men} src={Men} alt="man" />
				</div>
			</div>
		</section>
	)
};

export default Subscribe;