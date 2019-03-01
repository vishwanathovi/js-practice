import React, { Component } from 'react';
import RightTop from './RightTop';

class Header extends Component {
  render() {
    return (
      <div className="Header">
      <div className="Wrapper">
        <div className="Logo">Conduit</div>
        <RightTop />
        </div>
      </div>
    );
  }
}

export default Header;
