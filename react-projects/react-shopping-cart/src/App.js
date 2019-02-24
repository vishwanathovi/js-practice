import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import './App.css';
import Products from './components/Products';
// import Product from './components/Product';
import Sizes from './components/Sizes';
import CartProducts from './components/CartProducts';
import Spinner from './components/spinner/Spinner';
import {HandleSizeFilter2,
        handleOrderChange,
        UpdateAvailableSizes,
        handleCartAdd, 
        toggleCartDisplay,
        handleCartRemove,
        filterAsync,
        orderAsync
      } from './actions/index';
// import {fixFormat} from './services/helperFunctions.js';

class App extends Component {
  componentDidMount() {
    this.updateFilterList();
  }

  updateFilterList = () => {
    this.props.dispatch(UpdateAvailableSizes());
  }

  HandleSizeFilter = (size) => { 
    this.props.dispatch(filterAsync(size));
  }

  HandleOrderChange = (event) => {
    this.props.dispatch(orderAsync(event.target.value))
  }

  handleCartAdd = (product) => {
    this.props.dispatch(handleCartAdd(product))
  }

  toggleCartDisplay = () => {
    this.props.dispatch(toggleCartDisplay())
  }

  handleCartRemove = (id) => {
    this.props.dispatch(handleCartRemove(id))
  }

  render() {
    const { filteredProducts, availableSizes, cartProducts,cartDisplay } = this.props;
    let productsLength = filteredProducts.length;
    let totalItemsInCart = cartProducts.reduce((acc,item)=>acc+=item.quantity,0)

    return (
      <div className="App">
        <div className="left-main">
            <div className="size-header">Sizes:</div> 
            <Sizes sizes={availableSizes} onClick={this.HandleSizeFilter}/>
        </div>  
        <div className="right-main">
          <div className="right-top">
            <div className="products-selected">{productsLength || 'No'} Product{productsLength>1? 's':''} selected</div>
            <div className="product-order">
              Order By:
              <select className="order-select" onChange={this.HandleOrderChange}>
                <option value="">Select</option>
                <option value="lh">Low to High</option>
                <option value="hl">High to Low</option>
              </select>
            </div>
          </div>
        {/* <Spinner /> */}
         <Products products={filteredProducts} onClick={this.handleCartAdd}/>
        </div>
        <div className={`cart-main ${cartDisplay? '': 'hide'}`}>

        <div className="cart-icon" onClick={this.toggleCartDisplay}>
          {
            !cartDisplay? (
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    filteredProducts: state.filteredProducts,
    availableSizes: state.availableSizes,
    cartProducts: state.cartProducts,
    cartDisplay: state.cartDisplay
  }
}

export default connect(mapStateToProps)(App);
