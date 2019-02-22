import React, { Component } from 'react';
import Product from './Product';

class Products extends Component {
	render() {
		return (
			<div className="Products">
				{ 
					this.props.products.map(product=>{
						return (<div className="Product" key={product.id}>
											<Product product={product}/>
										</div>) 
					})
				}
			</div>
		);
	}
}

export default Products;