import { React } from "react";
import styles from "./menu.module.scss";
import { MENU } from "./const/MENU";
import { Link } from "react-router-dom";


const Menu = () => {

	return (
		<div className={styles.foot_header__menu} data-test-id='menu'>
			<button type="button" className={styles.icon_menu}><span></span></button>
			<nav className={styles.menu__body}>
				<ul className={styles.menu__list}>
				<li className={styles.menu__item}>
					{MENU.map(({ id, path, name }) => (
								<Link key={id} to={`/${path}`} className={styles.menu__link} data-test-id={`menu-link-${path}`}>
								{name}
								</Link>
							))}
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Menu;
