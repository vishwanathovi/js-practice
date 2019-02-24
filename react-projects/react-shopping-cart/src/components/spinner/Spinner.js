import React, { Component } from 'react';
import './style.scss';

export default class Spinner extends Component{
	render(){
		return(
			  <div className="spinner lds-ring">
			    <div />
			  </div>
		)
	}
}