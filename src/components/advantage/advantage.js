import React from "react";
import styles from "./advantage.module.scss";
import Truck from "../header/assets/advantege/truck.svg";
import Refresh from "../header/assets/advantege/refresh.svg";
import Support from "../header/assets/advantege/support.svg";


const Advantage = () => {
	return (
		<section className={styles.advantege}>
				<div className={styles.advantege__container}>
					<div className={styles.advantege_block__body}>
						<img className={styles.advantege_block__icon} src={Truck} alt="truck" />
						<div className={styles.advantege_block__info}>
							<h3 className={styles.advantege_block__title}>FREE SHIPPING</h3>
							<div className={styles.advantege_block__text}>On all UA order or order above $100</div>
						</div>
					</div>
					<div className={styles.advantege_block__body}>
						<img className={styles.advantege_block__icon} src={Refresh} alt="refresh"/>
						<div className={styles.advantege_block__info}>
							<h3 className={styles.advantege_block__title}>30 DAYS RETURN</h3>
							<div className={styles.advantege_block__text}>Simply return it within 30 days for an exchange</div>
						</div>
					</div>
					<div className={styles.advantege_block__body}>
						<img className={styles.advantege_block__icon} src={Support} alt="support"/>
						<div className={styles.advantege_block__info}>
							<h3 className={styles.advantege_block__title}>SUPPORT 24/7</h3>
							<div className={styles.advantege_block__text}>Contact us 24 hours a day, 7 days a week</div>
						</div>
					</div>
				</div>
			</section>
	)
};

export default Advantage;