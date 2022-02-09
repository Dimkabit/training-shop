import React from "react";
import styles from "./iconNav.module.scss";
import search from '../assets/icons/search.svg';
import globe from '../assets/icons/globe.svg';
import user from '../assets/icons/user.svg';
import shopping from '../assets/icons/shopping-bag.svg';

const IconNav = () => {
	return (
		<div className={styles.foot_header__actions}>
			<ul className={styles.foot_header__list}>
				<li className={styles.foot_header__link}><a href="/"><img src={search} alt="icon: search" /></a></li>
				<li className={styles.foot_header__link}><a href="/"><img src={globe} alt="icon: globe" /></a></li>
				<li className={styles.foot_header__link}><a href="/"><img src={user} alt="icon: user" /></a></li>
				<li className={styles.foot_header__link}><a href="/"><img src={shopping} alt="icon: sopping-bag" /></a><span></span></li>
			</ul>
		</div>
	)
};

export default IconNav;