import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import './App.css';
import Products from './components/Products';
import Product from './components/Product';
import Sizes from './components/Sizes';
import CartProducts from './components/CartProducts';
import HandleSizeFilter2 from './actions/index';
// import tpd from './helperFunctions.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: products.products,
      availableSizes: [],
      filteredProducts: products.products,
      selectedFilter: [],
      orderValue: '',
      cartProducts: [],
      cartDisplay: false
    }
  }

  componentDidMount() {
    this.updateFilterList();
  }

  updateFilterList = () => {
    let products = [...this.state.products];
    let sizes = products.reduce((acc,item)=>{
      return acc.concat(item.availableSizes);       
    },[]).filter((item,index,array)=>array.indexOf(item)===index);
    this.setState({
      availableSizes: sizes
    })
  }

  HandleSizeFilter = (size) => { 
    this.props.dispatch(HandleSizeFilter2(size))
    // let sizes = [...this.state.selectedFilter];
    // let sizeIndex = this.state.selectedFilter.indexOf(size);

    // sizeIndex===-1? sizes.push(size): sizes.splice(sizeIndex,1);
    
    // this.updateFilterProducts(sizes);
    // Currently passing filtered sizes from here. Still needs to be discussed
  }

  updateFilterProducts = (sizes = this.state.selectedFilter) =>{
    let products = [...this.state.products];
    if (sizes.length!==0){
      products = products.filter(item=>{
        return item.availableSizes.some(size=>sizes.includes(size))
      })
    }

    let orderValue = document.querySelector('.order-select').value;

    if (orderValue === 'lh' ){
      products.sort((p1,p2)=>p1.price-p2.price)
    } else if (orderValue === 'hl'){
      products.sort((p1,p2)=>p2.price-p1.price)
    }


    this.setState({
        filteredProducts: products,
        selectedFilter: sizes,
        orderValue: orderValue
    })
  }

  handleCartAdd = (product) => {
    let cartProducts = [...this.state.cartProducts];
    let productIndex = cartProducts.findIndex(item=>item.id===product.id); 

    if (productIndex===-1){
        product.quantity = 1;
        cartProducts.push(product)
    } else {
        cartProducts[productIndex].quantity++;
    }

    this.setState({
      cartProducts: cartProducts
    })
  }

  toggleCartDisplay = () => {
    this.setState({
      cartDisplay: !this.state.cartDisplay
    })
  }

  handleCartRemove = (id) => {
    let cartProducts = [...this.state.cartProducts];
    cartProducts = cartProducts.filter(item=>item.id!==id);
    this.setState({
      cartProducts: cartProducts
    })
  }

  render() {
    const { products, filteredProducts } = this.props;
    console.log(products, 'inside app.js');
    let productsLength = this.state.filteredProducts.length;
    let totalItemsInCart = this.state.cartProducts.reduce((acc,item)=>acc+=item.quantity,0)

    return (
      <div className="App">
        <div className="left-main">
            <Sizes sizes={this.state.availableSizes} onClick={this.HandleSizeFilter}/>
        </div>  
        <div className="right-main">
          <div className="right-top">
            <div className="products-selected">{productsLength || 'No'} Product{productsLength>1? 's':''} selected</div>
            <div className="product-order">
              Order By: 
              <select className="order-select" onChange={()=>{this.updateFilterProducts()}}>
                <option value="">Select</option>
                <option value="lh">Low to High</option>
                <option value="hl">High to Low</option>
              </select>
            </div>
          </div>
         <Products products={filteredProducts} onClick={this.handleCartAdd}/>
        </div>
        <div className={`cart-main ${this.state.cartDisplay? '': 'hide'}`}>
          <div className="cart-icon" onClick={this.toggleCartDisplay}>
            <i className="fas fa-cart-plus"></i>
            <div className="cart-count-icon">{totalItemsInCart}</div>
          </div>
          <div className="cart-section">
            <div className="cart-section-icon">
              Cart
              <i className="fas fa-cart-plus"></i>
            </div>
            <div className="cart-products">
              <CartProducts products={this.state.cartProducts} onClick={this.handleCartRemove}/>
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
    filteredProducts: state.filteredProducts
  }
}

export default connect(mapStateToProps)(App);


var products = {
  "products": [
    {
      "id": 12,
      "sku": 12064273040195392,
      "title": "Cat Tee Black T-Shirt",
      "description": "4 MSL",
      "availableSizes": ["S", "XS"],
      "style": "Black with custom print",
      "price": 10.9,
      "installments": 9,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },

    {
      "id": 13,
      "sku": 51498472915966366,
      "title": "Dark Thug Blue-Navy T-Shirt",
      "description": "",
      "availableSizes": ["M"],
      "style": "Front print and paisley print",
      "price": 29.45,
      "installments": 5,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },

    {
      "id": 14,
      "sku": 10686354557628303,
      "title": "Sphynx Tie Dye Wine T-Shirt",
      "description": "GPX Poly 1",
      "availableSizes": ["X", "L", "XL"],
      "style": "Front tie dye print",
      "price": 9.0,
      "installments": 3,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },

    {
      "id": 15,
      "sku": 11033926921508487,
      "title": "Skuul",
      "description": "Treino 2014",
      "availableSizes": ["X", "L", "XL", "XXL"],
      "style": "Black T-Shirt with front print",
      "price": 14.0,
      "installments": 5,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },

    {
      "id": 11,
      "sku": 39876704341265606,
      "title": "Wine Skul T-Shirt",
      "description": "",
      "availableSizes": ["X", "L"],
      "style": "Wine",
      "price": 13.25,
      "installments": 3,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },

    {
      "id": 16,
      "sku": 10412368723880253,
      "title": "Short Sleeve T-Shirt",
      "description": "",
      "availableSizes": ["XS", "X", "L", "ML", "XL"],
      "style": "Grey",
      "price": 75.0,
      "installments": 5,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },

    {
      "id": 0,
      "sku": 8552515751438644,
      "title": "Cat Tee Black T-Shirt",
      "description": "14/15 s/nº",
      "availableSizes": ["X", "L", "XL", "XXL"],
      "style": "Branco com listras pretas",
      "price": 10.9,
      "installments": 9,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },

    {
      "id": 1,
      "sku": 18644119330491312,
      "title": "Sphynx Tie Dye Grey T-Shirt",
      "description": "14/15 s/nº",
      "availableSizes": ["X", "L", "XL", "XXL"],
      "style": "Preta com listras brancas",
      "price": 10.9,
      "installments": 9,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },

    {
      "id": 2,
      "sku": 11854078013954528,
      "title": "Danger Knife Grey",
      "description": "14/15 s/nº",
      "availableSizes": ["X", "L"],
      "style": "Branco com listras pretas",
      "price": 14.9,
      "installments": 7,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },

    {
      "id": 3,
      "sku": 876661122392077,
      "title": "White DGK Script Tee",
      "description": "2014 s/nº",
      "availableSizes": ["X", "L"],
      "style": "Preto com listras brancas",
      "price": 14.9,
      "installments": 7,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },

    {
      "id": 4,
      "sku": 9197907543445677,
      "title": "Born On The Streets",
      "description": "14/15 s/nº - Jogador",
      "availableSizes": ["XL"],
      "style": "Branco com listras pretas",
      "price": 25.9,
      "installments": 12,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": false
    },

    {
      "id": 5,
      "sku": 10547961582846888,
      "title": "Tso 3D Short Sleeve T-Shirt A",
      "description": "14/15 + Camiseta 1º Mundial",
      "availableSizes": ["X", "L", "XL"],
      "style": "Preto",
      "price": 10.9,
      "installments": 9,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": false
    },

    {
      "id": 6,
      "sku": 6090484789343891,
      "title": "Man Tie Dye Cinza Grey T-Shirt",
      "description": "Goleiro 13/14",
      "availableSizes": ["XL", "XXL"],
      "style": "Branco",
      "price": 49.9,
      "installments": 0,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },

    {
      "id": 7,
      "sku": 18532669286405342,
      "title": "Crazy Monkey Black T-Shirt",
      "description": "1977 Infantil",
      "availableSizes": ["S"],
      "style": "Preto com listras brancas",
      "price": 22.5,
      "installments": 4,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },

    {
      "id": 8,
      "sku": 5619496040738316,
      "title": "Tso 3D Black T-Shirt",
      "description": "",
      "availableSizes": ["XL"],
      "style": "Azul escuro",
      "price": 18.7,
      "installments": 4,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": false
    },

    {
      "id": 9,
      "sku": 11600983276356165,
      "title": "Crazy Monkey Grey",
      "description": "",
      "availableSizes": ["L", "XL"],
      "style": "",
      "price": 134.9,
      "installments": 5,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },

    {
      "id": 10,
      "sku": 27250082398145995,
      "title": "On The Streets Black T-Shirt",
      "description": "",
      "availableSizes": ["L", "XL"],
      "style": "",
      "price": 49.0,
      "installments": 9,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    }
  ]
}
