import React, { Component } from 'react';

class Size extends Component {
	constructor(props){
		super(props);
		this.state = {
			selected: false
		}
	}

	handleClick(){
		this.setState({
			selected: !this.state.selected
		})
		this.props.onClick();
	}

	render() {
		return (
			<div className={`Size-inner ${this.state.selected? 'selected': ''}`} onClick={()=>{this.handleClick()}}>
				{this.props.size}
			</div>
		);
	}
}

export default Size;
