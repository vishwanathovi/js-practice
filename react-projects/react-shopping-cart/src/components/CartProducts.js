import React, { Component } from 'react';
import CartProduct from './CartProduct';

class CartProducts extends Component {
	render() {
		return (
			<div className="Products">
				{ 
					this.props.products.map(product=>{
						return (<div className="CartProduct" key={product.id}>
											<CartProduct product={product} onClick={this.props.onClick}/>
										</div>) 
					})
				}
			</div>
		);
	}
}

export default CartProducts;