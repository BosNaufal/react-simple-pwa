
import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as UIActionsCreators from '../../redux/actions/ui.js';

function mapStateToProps({ post }) {
  return {
    posts: post.list
  }
}

function mapDispatchToProps(dispatch) {
  return {
    UIActions: bindActionCreators(UIActionsCreators, dispatch)
  }
}

class PostItem extends React.Component {

  constructor() {
    super();
    this.state = {
      post: {}
    }
  }

  render () {
    let { post } = this.state

    return(
      <div className="PostItem">
        <div className="PostItem-cover"><img src={ post.cover } /></div>
        <div className="PostItem-inner">
          <div className="container">
            <h2 className="PostItem-title">{ post.title }</h2>
            <div className="PostItem-body">
              <p>{ post.content }</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  componentWillMount() {
    let { posts, UIActions } = this.props
    let current = posts.find((post) => post.id == this.props.params.id)
    this.setState({
      post: current
    })
    UIActions.onPostItem()
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);
