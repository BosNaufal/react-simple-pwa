
import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import * as postActionsCreator from '../../redux/actions/post.js';

import PostList from '../PostList/';

function mapDispatchToProps(dispatch) {
  return {
    postActions: bindActionCreators(postActionsCreator, dispatch)
  }
}

class HomePage extends React.Component {

  render() {
    return (
      <div>
        <PostList />
      </div>
    );
  }

  componentWillMount() {
    let { postActions } = this.props
    postActions.fetchList()
  }

}

export default connect(null, mapDispatchToProps)(HomePage);
