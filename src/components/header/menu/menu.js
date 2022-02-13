import { React, useState } from "react";
import styles from "./menu.module.scss";
import { Link } from "react-router-dom";


const Menu = () => {
	const [menu, setMenu] = useState(false);

	const changeMenu = () => {
		setMenu(!menu)
	}
	return (
		<div className={styles.foot_header__menu}>
			<button type="button" className={styles.icon_menu} onClick={() => changeMenu()}><span></span></button>
			<nav className={styles.menu__body}>
				<ul className={styles.menu__list}>
					<li className={styles.menu__item}><Link to="/" className={styles.menu__link} data-test-id={`menu-link-about`}>About Us</Link></li>
					<li className={styles.menu__item}><Link to={'/WoomenProductsPage'} className={styles.menu__link} data-test-id={`menu-link-woomen`}>Women</Link></li>
					<li className={styles.menu__item}><Link to={'/MenProductsPage'} className={styles.menu__link} data-test-id={`menu-link-men`}>Men</Link></li>
					<li className={styles.menu__item}><Link to="/" className={styles.menu__link} data-test-id={`menu-link-beauty`}>Beauty</Link></li>
					<li className={styles.menu__item}><Link to="/" className={styles.menu__link} data-test-id={`menu-link-accessories`}>Accessories</Link></li>
					<li className={styles.menu__item}><Link to="/" className={styles.menu__link} data-test-id={`menu-link-blog`}>Blog</Link></li>
					<li className={styles.menu__item}><Link to="/" className={styles.menu__link} data-test-id={`menu-link-contact`}>Contact</Link></li>
				</ul>
			</nav>
		</div>
	)
}

export default Menu;