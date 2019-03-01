import React, { Component } from 'react';
import { connect } from 'react-redux';
import { displayPopularTags } from './../actions/index';
import './style.scss';

class PopularTags extends Component {
	componentDidMount(){
		this.props.dispatch(displayPopularTags());
	}

  render() {
    return (
      <div className="PopularTags">
        <h4>Popular Tags</h4>
      	{this.props.tags.map(tag=><div key={tag} className="tag">{tag}</div>)}
      </div>
    );
  }
}

function mapStateToProps(state){
	return {
		tags: state.tags
	}
}

export default connect(mapStateToProps)(PopularTags);