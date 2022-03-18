import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartOpen } from "../../redux/cart/cartReducers";
import { Cart } from "../cart/cart";
import { ItemsInCart } from "../itemsInCart/ItemsInCart"; 
import shoppingBag from "../header/assets/icons/shopping-bag.svg";
import './buttonCart.scss';

const ButtonCart = () => {
	const productInCart = useSelector(state => state.cart.productInCart);
	const dispatch = useDispatch();
	function toggleCartMode () {
		dispatch(cartOpen(true));
	}

	return (
		<> 
        <div className="container-button-cart">
            {productInCart.length > 0 ? <ItemsInCart quantity={productInCart.length} /> : null}
            <button type="button" className="button-cart" onClick={toggleCartMode} data-test-id='cart-button'><img src={shoppingBag} alt='img'/></button>
        </div>
            <Cart />
        </>
	)
}

export { ButtonCart }