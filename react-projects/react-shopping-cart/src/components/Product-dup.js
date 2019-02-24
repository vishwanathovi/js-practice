import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Product extends Component {
	render() {
		return (

			<div className="Product-inner">
			<Router>
				<Route 
          path="/products/:id"
          render={props=><Product product={this.state.filteredProducts[0]} {...props} components={Product}/>}
        />
			</Router>
				<img className="product-img" src={"./products/"+ this.props.product.sku + "_1.jpg"} alt="product-primary"/>
				<div className="product-name">{this.props.product.title}</div>
				<div className="product-price">{this.props.product.price}</div>
				<div className="product-installments">{this.props.product.installments}</div>
				<button>Add to Cart</button>
			</div>
		);
	}
}

export default Product;