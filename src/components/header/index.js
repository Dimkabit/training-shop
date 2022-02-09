import React from 'react';
import styles from './Header.module.scss';
import phone from './assets/icons/phone.svg';
import location from './assets/icons/location-marker.svg';
import clock from './assets/icons/clock.svg';
import Social from './social-network/social';
import Menu from './menu/menu';
import IconNav from './header-icon-nav/icon-nav';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header_top}>
				<div className={styles.header_top__container}>
					<div className={styles.top_header__block}>
						<div className={styles.top_header__phone}>
							<img src={phone} alt="icon: phone" />
							<a href="tel:+375291002030"><span>+375 29 100 20 30</span></a>
						</div>
						<div className={styles.top_header__adress}>
							<img src={location} alt="location" />
							<a href="/">Belarus, Gomel, Lange 17</a>
						</div>
						<div className={styles.top_header__clock}>
							<img src={clock} alt="" />
							<span>All week 24/7</span>
						</div>
					</div>
					<Social />
				</div>
			</div>
			<div className={styles.header_footer}>
				<div className={styles.header_footer__container}>
					<div className={styles.foot_header__logo}>
						<a href="/">CleverShop</a>
					</div>
					<Menu />
					<IconNav />
				</div>
			</div>
		</header>
	)
}
export default Header;