export const HANDLE_SIZE_FILTER = 'HANDLE_SIZE_FILTER';
export const HANDLE_ORDER_CHANGE = 'HANDLE_ORDER_CHANGE';
export const UPDATE_AVAILABLE_SIZES = 'UPDATE_AVAILABLE_SIZES';
export const HANDLE_CART_ADD = 'HANDLE_CART_ADD';
export const TOGGLE_CART_DISPLAY = 'TOGGLE_CART_DISPLAY';
export const HANDLE_CART_REMOVE = 'HANDLE_CART_REMOVE';


export function UpdateAvailableSizes(){
	return {
		type: UPDATE_AVAILABLE_SIZES
	}
}

export function HandleSizeFilter2(size){ 
  return {
  	type: HANDLE_SIZE_FILTER,
  	size
  }
}

export function handleOrderChange(order){
	return {
		type: HANDLE_ORDER_CHANGE,
		order
	}
}

export function handleCartAdd(product){
	return {
		type: HANDLE_CART_ADD,
		product
	}
}

export function toggleCartDisplay(){
	return {
		type: TOGGLE_CART_DISPLAY
	}
}

export function handleCartRemove(id){
	return {
		type: HANDLE_CART_REMOVE,
		id
	}
}







