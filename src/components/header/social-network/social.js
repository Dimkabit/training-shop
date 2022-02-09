import React from "react";
import styles from './social.module.scss';
import facebook from '../assets/icons/social/facebook.svg';
import twitter from '../assets/icons/social/logo-twitter.svg';
import instagramm from '../assets/icons/social/instagram.svg';
import pinterest from '../assets/icons/social/logo-pinterest.svg';
const Social = () => {
	return (
		<div className={styles.top_header__social}>
			<a href="/" ><img src={facebook} alt="icon:facebook" /></a>
			<a href="/" ><img src={twitter} alt="icon:twitter" /></a>
			<a href="/"><img src={instagramm} alt="icon:instagram" /></a>
			<a href="/"><img src={pinterest} alt="icon:pinterest" /></a>
		</div>
	)
}
export default Social;