import React from "react";
import styles from "./menu.module.scss";

const Menu = () => {
	return (
		<div className={styles.foot_header__menu}>
			<button type="button" className={styles.icon_menu}><span></span></button>
			<nav className={styles.menu__body}>
				<ul className={styles.menu__list}>
					<li className={styles.menu__item}><a href="/" className={styles.menu__link}>About Us</a></li>
					<li className={styles.menu__item}><a href="/" className={styles.menu__link}>Women</a></li>
					<li className={styles.menu__item}><a href="/" className={styles.menu__link}>Men</a></li>
					<li className={styles.menu__item}><a href="/" className={styles.menu__link}>Beauty</a></li>
					<li className={styles.menu__item}><a href="/" className={styles.menu__link}>Accessories</a></li>
					<li className={styles.menu__item}><a href="/" className={styles.menu__link}>Blog</a></li>
					<li className={styles.menu__item}><a href="/" className={styles.menu__link}>Contact</a></li>
				</ul>
			</nav>
		</div>
	)
}

export default Menu;