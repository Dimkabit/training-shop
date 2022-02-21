import { React, useState } from "react";
import  "./menu.scss";
import { MENU } from "./const/MENU";
import { Link } from "react-router-dom";



const Menu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	return (
		<div className="foot-header__menu" data-test-id='burger-menu'>
			<button type="button" className={`icon-menu ${isOpen ? 'menu-open' : ''}`} onClick={toggle} data-test-id='burger-menu-btn'><span></span></button>
			<nav className={`menu__body ${isOpen ? 'body-open' : ''}`}>
				<ul className="menu__list">
				<li className="menu__item">
					{MENU.map(({ id, path, name }) => (
								<Link key={id} to={`/${path}`} className="menu__link" onClick={toggle}  data-test-id={`menu-link-${path}`}>
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
