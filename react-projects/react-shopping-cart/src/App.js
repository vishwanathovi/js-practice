import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import './App.css';
import Products from './components/Products';
import Sizes from './components/Sizes';
import OrderProducts from './components/OrderProducts';
import Cart from './components/Cart';
import CartProducts from './components/CartProducts';
// import Spinner from './components/spinner/Spinner';
import { UpdateAvailableSizes } from './actions/index';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(UpdateAvailableSizes()); // Directly calling the dispatch. Not in sync with the pattern used across app
  }

  render() {
    const { filteredProducts } = this.props;
    let productsLength = filteredProducts.length;

    return (
      <div className="App">
        <div className="left-main">
            <div className="size-header">Sizes:</div> 
            <Sizes />
        </div>  
        <div className="right-main">
          <div className="right-top">
            <div className="products-selected">{productsLength || 'No'} Product{productsLength>1? 's':''} selected</div>
            <OrderProducts />
          </div>
        {/* <Spinner /> */}
         <Products />
        </div>
        <Cart />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filteredProducts: state.filteredProducts
  }
}

export default connect(mapStateToProps)(App);
