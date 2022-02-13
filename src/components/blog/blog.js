import React from "react";
import styles from "./blog.module.scss";
import Image1 from "./assets/1.jpg";
import Image2 from "./assets/2.jpg";
import Image3 from "./assets/3.jpg";


const Blog = () => {
	return (
		<section className={styles.blog}>
			<div className={styles.blog_body__container}>
				<div className={styles.body_blog__header}>
					<h4 className={styles.body_blog__title}>LATEST FROM BLOG</h4>
					<a className={styles.body_blog__link} href="/">SEE ALL</a>
				</div>
				<div className={styles.body_blog__content}>
					<div className={styles.content_blog__body}>
						<img src={Image1} alt="model" />
						<div className={styles.content_blog__latest}>
							<div className={styles.content_blog__title_latest}>The Easiest Way to Break</div>
							<div className={styles.content_blog__text}>But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</div>
						</div>
					</div>
					<div className={styles.content_blog__body}>
						<img src={Image2} alt="model" />
						<div className={styles.content_blog__latest}>
							<div className={styles.content_blog__title_latest}>Wedding Season</div>
							<div className={styles.content_blog__text}>But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</div>
						</div>
					</div>
					<div className={styles.content_blog__body}>
						<img src={Image3} alt="model" />
						<div className={styles.content_blog__latest}>
							<div className={styles.content_blog__title_latest}>Recent Favorites On Repeat</div>
							<div className={styles.content_blog__text}>But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
};

export default Blog;