import React, { Component } from 'react';
import Size from './Size';
import { connect } from 'react-redux';
import { filterAsync } from './../actions/index';

class Sizes extends Component {

	HandleSizeFilter = (size) => { 
    this.props.dispatch(filterAsync(size));
  }

	render() {
		let {sizes} = this.props;
		return (
			<div className="Sizes">
				{ 
					this.props.sizes.map(size=>{
						return (<div className="Size" key={size}>
											<Size size={size} onClick={()=>{this.HandleSizeFilter(size)}}/>
										</div>) 
					})
				}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		sizes:state.availableSizes
	}
}

export default connect(mapStateToProps)(Sizes);