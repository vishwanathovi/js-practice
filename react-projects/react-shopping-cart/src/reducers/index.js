import {products} from './../static/products';

import {
	HANDLE_SIZE_FILTER,
	HANDLE_ORDER_CHANGE,
	UPDATE_AVAILABLE_SIZES,
	HANDLE_CART_ADD,
	HANDLE_CART_REMOVE,
  DISPLAY_PRODUCTS
} from './../actions'

const initState = {
    products: products.products,
    availableSizes: [],
    filteredProducts: products.products,
    selectedFilter: [],
    orderValue: '',
    cartProducts: [],
    cartDisplay: false
}

export default function rootReducer(state = initState, action) {
	switch (action.type) {
		case HANDLE_SIZE_FILTER: {
			let sizes = [...state.selectedFilter];
    	let sizeIndex = state.selectedFilter.indexOf(action.size);

    	sizeIndex===-1? sizes.push(action.size): sizes.splice(sizeIndex,1);
      
	    return{
	    	...state,
	    	selectedFilter: sizes
	    }
		} 

		case HANDLE_ORDER_CHANGE: {

			// let products = [...state.filteredProducts];
			let orderValue = action.order;

	    // if (orderValue === 'lh' ){
	    //   products.sort((p1,p2)=>p1.price-p2.price)
	    // } else if (orderValue === 'hl'){
	    //   products.sort((p1,p2)=>p2.price-p1.price)
	    // }

	    return{
	    	...state,
	    	// filteredProducts: products,
	    	orderValue: orderValue
	    }
		}
    case DISPLAY_PRODUCTS: {

      let products = [...state.products];
      let sizes = state.selectedFilter;
      let orderValue = state.orderValue;
      if (sizes.length!==0){
        products = products.filter(item=>{
          return item.availableSizes.some(size=>sizes.includes(size))
        })
      }

      if (orderValue === 'lh' ){
        products.sort((p1,p2)=>p1.price-p2.price)
      } else if (orderValue === 'hl'){
        products.sort((p1,p2)=>p2.price-p1.price)
      }

      return {
        ...state,
        filteredProducts: products
      }
    }

		case UPDATE_AVAILABLE_SIZES: {
			let products = [...state.products];
	    let sizes = products.reduce((acc,item)=>{
	      return acc.concat(item.availableSizes);       
	    },[]).filter((item,index,array)=>array.indexOf(item)===index);
	    
	    return {
	    	...state,
	    	availableSizes: sizes
	    }
		}
		case HANDLE_CART_ADD: {
			let product = action.product;
			let cartProducts = [...state.cartProducts];
	    let productIndex = cartProducts.findIndex(item=>item.id===product.id); 

	    if (productIndex===-1){
	        product.quantity = 1;
	        cartProducts.push(product)
	    } else {
	        cartProducts[productIndex].quantity++;
	    }

	    return {
	    	...state,
	    	cartProducts
	    }
		}

		case HANDLE_CART_REMOVE: {
			let cartProducts = [...state.cartProducts];
	    cartProducts = cartProducts.filter(item=>item.id!==action.id);
	    return {
	    	...state,
	    	cartProducts
	    }
		}
		default:
			return state;
	}
}

