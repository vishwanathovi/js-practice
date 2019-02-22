import React, { Component } from 'react';

class Products extends Component {
	render() {
		return (
			<div className="Product-inner">
				<img className="product-img" src={"./products/"+ this.props.product.sku + "_1.jpg"} alt="product-primary"/>
				<div className="product-name">{this.props.product.title}</div>
				<div className="product-price">{this.props.product.price}</div>
				<div className="product-installments">{this.props.product.installments}</div>
				<button>Add to Cart</button>
			</div>
		);
	}
}

export default Products;