import React, { Component } from 'react';
import Size from './Size';

class Sizes extends Component {
	render() {
		return (
			<div className="Sizes">
				{ 
					this.props.sizes.map(size=>{
						return (<div className="Size" key={size}>
											<Size size={size} onClick={()=>{this.props.onClick(size)}}/>
										</div>) 
					})
				}
			</div>
		);
	}
}

export default Sizes;