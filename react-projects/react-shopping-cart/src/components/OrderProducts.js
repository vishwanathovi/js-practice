import React, { Component } from 'react';
import { connect } from 'react-redux';
import { orderAsync } from './../actions/index';

class OrderProducts extends Component {

  HandleOrderChange = (event) => {
    this.props.dispatch(orderAsync(event.target.value))
  }

	render() {
		return (
	      <div className="product-order">
          Order By:
          <select className="order-select" onChange={this.HandleOrderChange}>
            <option value="">Select</option>
            <option value="lh">Low to High</option>
            <option value="hl">High to Low</option>
          </select>
        </div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		sizes:state.availableSizes
	}
}

export default connect(mapStateToProps)(OrderProducts);