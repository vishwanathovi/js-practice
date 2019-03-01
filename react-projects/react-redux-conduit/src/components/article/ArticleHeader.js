import React, { Component } from 'react';
import Favorite from './Favorite';

class ArticleHeader extends Component {
  render() {
    return (
      <div className="ArticleHeader">
      	<div className="info-section">
      		<div className="username"> <i class="far fa-user"></i> {this.props.data.author.username}</div>
      		<div className="created-at">{this.props.data.createdAt}</div>
      	</div>
      	<Favorite favoritesCount={this.props.data.favoritesCount} />
      </div>
    );
  }
}

export default ArticleHeader;