import React, { Component } from 'react';

class Favorite extends Component {
  render() {
    return (
      <div className="Favorite">
      <i class="far fa-heart"></i>
      	{this.props.favoritesCount}
      </div>
    );
  }
}

export default Favorite;