import React from "react";
import "./menuTypePage.scss";

const MenuTypePage = (page) => {
	const typePage = page.page;

	return (
		 <div className='wrapper-products-page-nav'>
			  <div className='products-page-nav'>
					<div className='products-page-nav_page'><span>Home</span> ► {typePage}</div>
			  </div>
		 </div>
	)
}

export {MenuTypePage}