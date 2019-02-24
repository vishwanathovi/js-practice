import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Product extends Component {
	render() {
		let {product} = this.props;
		let dollars = Math.floor(product.price);
		let cents = String((product.price - Math.floor(product.price)).toFixed(2)).slice(2);
		let installmentCost = (product.price/product.installments).toFixed(2)

		return (
			<div className="Product-inner">
				{
					product.isFreeShipping? <div className="free-shipping">Free shipping</div> : '' 
				}
				<img className="product-img" src={"./products/"+ product.sku + "_1.jpg"} alt="product-primary"/>
				<div className="product-name">{product.title}</div>
				<div className="product-price">
					<small>$</small>
					<span className="product-dollars">{dollars}</span>
					.<span className="product-cents">{cents}</span>
				</div>
				<div className="product-installments">Or {product.installments} x ${installmentCost}</div>
				<button>Add to Cart</button>
			</div>
		);
	}
}

export default Product;