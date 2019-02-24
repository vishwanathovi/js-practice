import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import Product from './Product';
import { handleCartAdd } from './../actions/index';

class Products extends Component {

	handleCartAdd = (product) => {
    this.props.dispatch(handleCartAdd(product))
  }

	render() {
		let {products} = this.props;

		return (
			<div className="Products">
				{ 
					products.map(product=>{
						return (<div className="Product" key={product.id} onClick={()=>this.handleCartAdd(product)}>
											<Product product={product}/>
										</div>) 
					})
				}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		products:state.filteredProducts
	}
}

export default connect(mapStateToProps)(Products);