import React, { Component } from 'react';
import { connect } from 'react-redux';
import { displayArticles } from './../actions/index';
import Article from './article/Article';

class Feed extends Component {
	componentDidMount(){
		this.props.dispatch(displayArticles());
	}

  render() {
    return (
      <div className="Feed">
      	{
      		this.props.articles.map(article=><Article key={article.slug} data={article}/>) 
      	}
      </div>
    );
  }
}

function mapStateToProps(state){
	return {
		articles: state.articles
	}
}

export default connect(mapStateToProps)(Feed);
