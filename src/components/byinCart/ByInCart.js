import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addOrder, removeOrder } from "../../redux/cart/cartReducers";

const ByInCart = (orderProduct) => {
	const orderedProduct = orderProduct.orderedProduct;
	const productInCart = useSelector(state => state.cart.productInCart);
	const isProductInCart = productInCart.some(product => (
		product.idProducta === orderedProduct.idProducta
		&& product.useColor === orderedProduct.useColor
		&& product.useSize === orderedProduct.useSize
	))

	const dispatch = useDispatch();
	const changeCart = (e) => {
		e.stopPropagation();
		isProductInCart ? dispatch(removeOrder(orderedProduct)) : dispatch(addOrder(orderedProduct))
	}
	return (
		<button onClick={changeCart} data-test-id="add-cart-button">
		{isProductInCart ? <span className="text-button">REMOVE TO CARD</span> : <span className="text-button">ADD TO CARD</span>}
  </button>
	)
}

export { ByInCart }