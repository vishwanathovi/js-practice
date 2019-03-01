import React, { Component } from 'react';
import ArticleHeader from './ArticleHeader';
import './style.scss';


class Article extends Component {
  render() {
    return (
      <div className="Article">
      	<ArticleHeader data={this.props.data} />
      	<div className="Article-title">{this.props.data.title}</div>
      	<div className="Article-description">{this.props.data.description}</div>
      </div>
    );
  }
}

export default Article;