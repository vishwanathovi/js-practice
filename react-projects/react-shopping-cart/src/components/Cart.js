import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartProducts from './CartProducts';
import { handleCartAdd, 
         handleCartRemove
      } from './../actions/index';

class Cart extends Component {
	constructor(props){
		super(props);
		this.state = {
			isCartOpen: false
		}
	}

	toggleCartDisplay = () => {
		this.setState({
			isCartOpen: !this.state.isCartOpen
		})
	}

	handleCartRemove = (id) => {
    this.props.dispatch(handleCartRemove(id))
  }

	render() {
		let {cartProducts} = this.props;
		let isCartOpen = this.state.isCartOpen;
		let totalItemsInCart = cartProducts.reduce((acc,item)=>acc+=item.quantity,0)

		return (
				<div className={`cart-main ${isCartOpen? '': 'hide'}`}>
          <div className="cart-icon" onClick={this.toggleCartDisplay}>
            {
              !isCartOpen? (
              <div>
                <i className="fas fa-cart-plus"></i>
                <div className="cart-count-icon">{totalItemsInCart}</div>
              </div>
              ): <i className="fas fa-times"></i>
            }
          </div>
          <div className="cart-section">
            <div className="cart-section-icon">
              Cart
              <span className="cart-section-icon-inner">
                <i className="fas fa-cart-plus"></i>
                <div className="cart-count-icon2">{totalItemsInCart}</div>
              </span>
            </div>
            <div className="cart-products">
            { 
              cartProducts.length? <CartProducts products={cartProducts} onClick={this.handleCartRemove}/>:
              <div className="cart-product-placeholder">
              Please add some products into the Cart <br/>: )</div>
            }
            </div>
            <div className="cart-checkout">
              <button className="cart-checkout-btn">Checkout</button>
            </div>
          </div>
        </div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		cartProducts: state.cartProducts,
	}
}

export default connect(mapStateToProps)(Cart);













