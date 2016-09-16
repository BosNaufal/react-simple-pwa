
import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as UIActionsCreators from '../../redux/actions/ui.js';

import LoadingState from './LoadingState.js';

function mapStateToProps({ post, ui }) {
  return {
    searchQuery: ui.searchQuery,
    items: post.list
  }
}

function mapDispatchToProps(dispatch) {
  return {
    UIActions: bindActionCreators(UIActionsCreators, dispatch)
  }
}

class PostList extends React.Component {

  render () {
    let { items } = this.props
    let { filteredPost } = this

    return(
      <div className="PostList">
        <div className="container">

          { items.length === 0 ? [1,2,3].map((i) => {
              return <LoadingState key={ i } />
            })
          : null }

          { items.length > 0 ? filteredPost.call(this).map((item, i) => {
              return(
                <div className="PostList-item" key={ i } >
                  <div className="PostList-item_thumbnail">
                    <img src={ item.cover } />
                    <a className="PostList-item_label" onClick={ this.filterPost.bind(this,item.category) } >{ item.category }</a>
                  </div>
                  <div className="PostList-item_body">
                    <h2 className="PostList-item_title">
                      <a href={ '#/post/' + item.id }>{ item.title }</a>
                    </h2>
                  </div>
                </div>
              )
            })
          : null }

        </div>
      </div>
    )
  }

  filterPost(category, e) {
    e.preventDefault()
    let { UIActions } = this.props
    UIActions.updateQuery(category)
  }

  filteredPost() {
    let { items, searchQuery } = this.props
    let filtered = []
    items.find((item) => {
      let keys = Object.keys(item)
      let found;

      keys.forEach((key) => {
        let valueToCheck = item[key].toString()
        let checking = valueToCheck.search(new RegExp(searchQuery,'ig'))
        if(checking !== -1) found = true
      })
      if (found) filtered.push(item)
    })
    return filtered
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
