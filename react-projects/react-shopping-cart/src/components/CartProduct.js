import React, { Component } from 'react';

class CartProduct extends Component {
	render() {
		return (
			<div className="CartProduct-inner">
				<div className="cartRemove" onClick={()=>this.props.onClick(this.props.product.id)}><i className="fas fa-times"></i></div>
				<img className="cart-product-img" src={"./products/"+ this.props.product.sku + "_1.jpg"} alt="product-primary"/>
				<div className="cart-product-details">
					<div className="cart-product-name">{this.props.product.title}</div>
					<div className="cart-product-size"></div>
					<div className="cart-product-quantity">Quantity: {this.props.product.quantity}</div>	
				</div>
				<div className="product-price">{this.props.product.price}</div>
			</div>
		);
	}
}

export default CartProduct;