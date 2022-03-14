import React from "react";
import PropTypes from "prop-types";
import { PRODUCTS } from "../../constants/products";
import { FilterProductsCategory } from "../../components/filterProductsCategory/filterProductsCategory";
import styles from "./productsPage.module.scss";
import { MenuTypePage } from "../../components/menuTypePage/menuTypePage";
import { CardsWoomen } from "../../components/cards-item/cards-woomen";
import adjst from "./assets/icons/adjustments.svg";
import filterClosed from "./assets/icons/filterClosed.png";
import menu from "./assets/icons/menu.svg";
import share from "./assets/icons/share.svg";
import view from "./assets/icons/view.svg";

import "./filterProductCategory.scss";


export class MenProductsPage extends React.Component {
	initState = {
		colorsProduct: [],
		sizesProduct: [],
		brandsProduct: [],
		priceProduct: ['$ 500+', '$ 200-500', '$ 100-200', '$ 50-100', '$ 0-50'],
		isMenuOpen: false,
		filters: {
			 color: [],
			 size: [],
			 brand: [],
			 price: [],
		},
		filterProduct: [],
  };

  constructor (props) {
		super (props);

		this.state = { ...this.initState }; 
  }

  componentDidUpdate = (prevProps) => {
		if (prevProps.page !== this.props.page) {
			 this.setState({
				  ...this.initState,
				  filters: {
						color: [],
						size: [],
						brand: [],
						price: [],
				  }
			 });
		}
  };

	toggleMenuMode = () => {
			this.setState({isMenuOpen: !this.state.isMenuOpen})
			(this.state.isMenuOpen ? this.state.colorsProduct : this.addArrColorsProduct() &&
			this.state.isMenuOpen ? this.state.sizesProduct : this.addArrBrandsProduct() &&
			this.state.isMenuOpen ? this.state.brandsProduct : this.addArrSizesProduct())
	}




  addArrColorsProduct = () => {
		const {page} = this.props;
		const productType = page.toLowerCase();
		let colorProd = [...this.state.colorsProduct];
		PRODUCTS[productType].forEach(product => {
			 product.images.forEach(color => {
				  let res = colorProd.some(col => col === color.color);
				  return res !== true ? colorProd.push(color.color) : null; 
			 })
		})   
		this.setState({colorsProduct: colorProd})
  }

  addArrSizesProduct = () => {
		const {page} = this.props;
		const productType = page.toLowerCase();
		let sizeProd = [...this.state.sizesProduct];
		PRODUCTS[productType].forEach(product => {
			 product.sizes.forEach(size => {
				  let res = sizeProd.some(sizes => sizes === size);
				  return res !== true ? sizeProd.push(size) : null; 
			 })
		})   
		this.setState({sizesProduct: sizeProd})
  }

  addArrBrandsProduct = () => {
		const {page} = this.props;
		const productType = page.toLowerCase();
		let brandProd = [...this.state.brandsProduct];
		PRODUCTS[productType].forEach(product => {
				  let res = brandProd.some(brand => brand === product.brand);
				  return res !== true ? brandProd.push(product.brand) : null; 
		})   
		this.setState({brandsProduct: brandProd})
  }

  filterСategory = (e) => {
		let filter = this.state.filters;
		let res = filter[e.target.name].find(item => item === e.target.value);
  
		if (e.target.checked === true) {
			 if (res === undefined) {
				  filter[e.target.name].push(e.target.value);
			 }
		} else {
			 if (res === e.target.value) {
				  filter[e.target.name].forEach((item, i) => {
						if (item === res){
							 filter[e.target.name].splice(i, 1);
						}
				  })
			 }
		}
		this.setState({filters: filter})

		this.filterProduct();
  };

  getDiscount = (price, discout) => {
		return discout ? price * (100 - discout.replace(/[\D]+/g, '')) / 100 : price;
  }

  filterByPrice = (key) => (price) => {
		const prices = {
			 '$ 500+': price >= 500, 
			 '$ 200-500': price >= 200 && price < 500,
			 '$ 100-200': price >= 100 && price < 200,
			 '$ 50-100': price >=50 && price < 100,
			 '$ 0-50': price >= 0 && price < 50,
		};
		return prices[key];
  } 


  filterProduct = () => {
		const {page} = this.props;
		const productType = page.toLowerCase();

		let filterProd = PRODUCTS[productType].filter(product =>  

			 {
				  let isFilter =
				  (this.state.filters.color.length > 0 ? product.images.some(item => this.state.filters.color.some(col => col === item.color)) : true)
				  &&
				  (this.state.filters.size.length > 0 ? product.sizes.some(size => this.state.filters.size.some(siz => siz === size)) : true)
				  &&
				  (this.state.filters.brand.length > 0 ? this.state.filters.brand.some(bran => bran === product.brand) : true)
				  &&
				  (this.state.filters.price.length > 0 ? this.state.filters.price.some(pric => this.filterByPrice(pric)(this.getDiscount(product.price, product.discount))) : true)
				  return isFilter === true ? product : null;
			 }
		) 

		this.setState({filterProduct: filterProd})  
  }


render () {
	const {page} = this.props;
	const productType = page.toLowerCase();
	return (
		<section className={styles.woomen} data-test-id={`products-page-${productType}`}>
			<div className={styles.woomen_product}>
				<div className={styles.woomens_product__container}>
					<div className={styles.woomens_product__header}>
						<div className={styles.woomens_product__pages}>
							<MenuTypePage page={page} />
						</div>
						<div className={styles.woomens_product__share}>
							<img src={share} alt="share" />
							<a href="/">Share</a>
						</div>
					</div>
					<div className={styles.woomen_page__title}>{page.toUpperCase()}</div>
				</div>
			</div>
			<div className={styles.woomen__container}>
				<div className={styles.filter_body__filter}>
					<div className={styles.filter__title}>
						<button onClick={this.toggleMenuMode} data-test-id="filter-button">
							<img src={!this.state.isMenuOpen ? adjst : filterClosed } alt="icon" />
							Filter
						</button>
					</div>
					<div>
					</div>
					<div className={styles.filter__center}>
						<img src={menu} className={styles.active} alt="menu" />
						<img src={view} alt="view" />
					</div>
					<div className={styles.filter__control}>
					</div>
				</div>
				<FilterProductsCategory 
                    productType={productType}
                    colorsProduct={this.state.colorsProduct} 
                    sizesProduct={this.state.sizesProduct}
                    brandsProduct={this.state.brandsProduct}
                    priceProduct={this.state.priceProduct}
                    isMenuOpen={this.state.isMenuOpen}
                    filterСategory={this.filterСategory}
                />
					 <div className='show-filter-result'>
                    {
                        this.state.filterProduct.length > 0 ? 
                        <>
                            <span className='show-filter-result-bold'>{this.state.filterProduct.length}</span>
                            <span className='show-filter-result-bold'>items Found</span>
                        </>
                        : null
                    }
                    {
                        this.state.filters.color.length > 0 ? 
                        <>
                            <span className='show-filter-result-opasity'>Color:</span>
                            {this.state.filters.color.map(color => (
                                <span className='show-filter-result-opasity' key={color}>{color}</span>
                            ))}
                        </>
                        : null
                    }
                    {
                        this.state.filters.size.length > 0 ? 
                        <>
                            <span className='show-filter-result-opasity'>Size:</span>
                            {this.state.filters.size.map(size => (
                                <span className='show-filter-result-opasity' key={size}>{size}</span>
                            ))}
                        </>
                        : null
                    }
                    {
                        this.state.filters.brand.length > 0 ? 
                        <>
                            <span className='show-filter-result-opasity'>Brand:</span>
                            {this.state.filters.brand.map(brand => (
                                <span className='show-filter-result-opasity' key={brand}>{brand}</span>
                            ))}
                        </>
                        : null
                    }
                    {
                        this.state.filters.price.length > 0 ? 
                        <>
                            <span className='show-filter-result-opasity'>Price:</span>
                            {this.state.filters.price.map(price => (
                                <span className='show-filter-result-opasity' key={price}>{price}</span>
                            ))}
                        </>
                        : null
                    }
                    
                </div>
				<div className={styles.woomen}>
				<div className={styles.woomens__container}>
				
					<div className={styles.catalog__card}>		
							{                
                        this.state.filterProduct.length > 0 ? 
                        
                        this.state.filterProduct.map(product => (
                            <CardsWoomen product={product} key={product.id} />
                        ))
                        : 
                        this.state.filterProduct.length === 0 &&
                        (this.state.filters.color.length > 0 ||
                        this.state.filters.size.length > 0 ||
                        this.state.filters.brand.length > 0 ||
                        this.state.filters.price.length > 0) ? null :

                        PRODUCTS[productType].map(product => (
                            <CardsWoomen product={product} key={product.id} />
                        ))
                    }
						<button className={styles.woomens_all}>See All</button>
					</div>
				</div>
				</div>
				
			</div>
		</section>
	)
}
}

MenProductsPage.propTypes = {
	page: PropTypes.string.isRequired,
}
