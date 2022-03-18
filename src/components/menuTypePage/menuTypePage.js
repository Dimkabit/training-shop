import React from "react";
import "./menuTypePage.scss";
import { Link } from "react-router-dom";

const MenuTypePage = (page) => {
	const typePage = page.page;
	const nameProduct = page.nameProduct;

	return (
		 <div className='wrapper-products-page-nav'>
			  <div className='products-page-nav'>
					<div className='products-page-nav_page'><Link to={`/`}><span>Home</span></Link> ► <Link to={`/${typePage}`}><span>{typePage}</span></Link> 
                {nameProduct ? <span>{`► ${nameProduct}`}</span> : null}</div>
			  </div>
		 </div>
	)
}

export {MenuTypePage}