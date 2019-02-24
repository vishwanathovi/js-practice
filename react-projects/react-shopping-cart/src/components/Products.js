import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Product from './Product';

class Products extends Component {
	render() {
		return (
			<div className="Products">
				{ 
					this.props.products.map(product=>{
						return (<div className="Product" key={product.id} onClick={()=>this.props.onClick(product)}>
											<Product product={product}/>
										</div>) 
					})
				}
			</div>
		);
	}
}

export default Products;