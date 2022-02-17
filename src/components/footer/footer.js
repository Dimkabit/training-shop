import React from "react";
import { CATEGORI } from '../../constants/Categori';
import { INFO } from "../../constants/INFO";
import styles from "./footer.module.scss";
import Facebook from "./assets/icons/facebook.svg";
import Twitter from "./assets/icons/logo-twitter.svg";
import Instagram from "./assets/icons/instagram.svg";
import Pinterest from "./assets/icons/logo-pinterest.svg";
import Marker from "./assets/copirait/marker.svg";
import Phone from "./assets/copirait/phone.svg";
import Clock from "./assets/copirait/clock.svg";
import Mail from "./assets/copirait/mail.svg";
import AES from "./assets/copirait/AES.svg";
import American from "./assets/copirait/american.svg";
import Discover from "./assets/copirait/discover.svg";
import Mastercard from "./assets/copirait/mastercard.svg";
import Paypal from "./assets/copirait/paypal.svg";
import Stripe from "./assets/copirait/Stripe.svg";
import Visa from "./assets/copirait/visa.svg";
import { Link } from "react-router-dom";




const Footer = () => {
	return (
		<footer className={styles.footer} data-test-id='footer'>
			<div className={styles.footer__top}>
				<div className={styles.footer__container}>
					<div className={styles.footer_top__body}>
						<div className={styles.footer_top__title}>BE IN TOUCH WITH US:</div>
						<form className={styles.footer__form} action="">
							<input type="email" name="form[]" data-error="Ошибка" placeholder="Enter your email" className={styles.footer__input} />
							<button type="submit" className={styles.footer_top__button}>Join Us</button>
						</form>
						<div className={styles.footer_top__social}>
							<a href="/"><img src={Facebook} alt="facebook" /></a>
							<a href="/"><img src={Twitter} alt="twitter" /></a>
							<a href="/"><img src={Instagram} alt="instagram" /></a>
							<a href="/"><img src={Pinterest} alt="pinterest" /></a>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.footer__content}>
				<div className={styles.footer__container}>
					<div className={styles.footer_body__filter}>
						<div className={styles.footer_filter__block}>
							<div className={styles.footer__title}>Categories</div>
							<nav className={styles.footer__body}>
								<ul className={styles.footer__list}>
								{CATEGORI.map(({id, path, name }) => (
									<li className={styles.footer__item}>
									<Link key={id} to={`/${path}`} className={styles.footer__link} data-test-id={`footer-nav-link-${path}`}>
												{name}
											</Link>
									</li>
								))}
								</ul>
							</nav>
						</div>
						<div className={styles.footer_filter__block}>
							<div className={styles.footer__title}>Infomation</div>
							<nav className={styles.footer__body}>
								<ul className={styles.footer__list}>	
									{INFO.map(({ id, path, name }) => (
										<li className={styles.footer__item}><Link key={id} to={`/${path}`} className={styles.footer__link} data-test-id={`footer-nav-link-${path}`}>
												{name}
											</Link></li>
									))}
								</ul>
							</nav>
						</div>
						<div className={styles.footer_filter__block}>
							<div className={styles.footer__title}>Useful links</div>
							<nav className={styles.footer__body}>
								<ul className={styles.footer__list}>
									<li className={styles.footer__item}><Link to='/' className={styles.footer__link}>Terms & Conditions</Link></li>
									<li className={styles.footer__item}><Link to='/' className={styles.footer__link}>Returns & Exchanges</Link></li>
									<li className={styles.footer__item}><Link to='/' className={styles.footer__link}>Shipping & Delivery</Link></li>
									<li className={styles.footer__item}><Link to='/' className={styles.footer__link}>Privacy Policy</Link></li>
								</ul>
							</nav>
						</div>
						<div className={styles.footer_filter__block}>
							<div className={styles.footer__title}>CONTACT US</div>
							<nav className={styles.footer__body}>
								<ul className={styles.footer__list}>
									<li className={styles.footer__item}><Link to='/' className={styles.footer__link}><img src={Marker} alt="marker" /> Belarus, Gomel, Lange 17</Link></li>
									<li className={styles.footer__item}><a href="tel:+375291002030" className={styles.footer__link}><img src={Phone} alt="phone" /> +375 29 100 20 30</a></li>
									<li className={styles.footer__item}><Link to='/' className={styles.footer__link}><img src={Clock} alt="clock" /> All week 24/7</Link></li>
									<li className={styles.footer__item}><a href="mailto:info@clevertec.ru" className={styles.footer__link}><img src={Mail} alt="mail" /> info@clevertec.ru</a></li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.footer_copirait}>
				<div className={styles.footer_copirait__container}>
					<div className={styles.footer_copirait__all}>
						<div className={styles.footer_copirait__reser}>
							Copyright © 2032 all rights reserved
						</div>
						<div className={styles.footer_copirait__pay}>
							<ul className={styles.footer_copirait__list}>
								<li className={styles.footer_copirait__item}><a href="/" className={styles.footer_copirait__link}><img src={Stripe} alt="stripe" /></a></li>
								<li className={styles.footer_copirait__item}><a href="/" className={styles.footer_copirait__link}><img src={AES} alt="aes" /></a></li>
								<li className={styles.footer_copirait__item}><a href="/" className={styles.footer_copirait__link}><img src={Paypal} alt="paypal" /></a></li>
								<li className={styles.footer_copirait__item}><a href="/" className={styles.footer_copirait__link}><img src={Visa} alt="visa" /></a></li>
								<li className={styles.footer_copirait__item}><a href="/" className={styles.footer_copirait__link}><img src={Mastercard} alt="mastercard" /></a></li>
								<li className={styles.footer_copirait__item}><a href="/" className={styles.footer_copirait__link}><img src={Discover} alt="discover" /></a></li>
								<li className={styles.footer_copirait__item}><a href="/" className={styles.footer_copirait__link}><img src={American} alt="american" /></a></li>
							</ul>
						</div>
						<div className={styles.footer_copirait__link_training}>
							<a href="mailto:info@clevertec.ru">Clevertec.ru/training</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
};

export default Footer;