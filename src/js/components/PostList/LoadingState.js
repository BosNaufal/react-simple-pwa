
import React, { PropTypes } from 'react'

class LoadingState extends React.Component {

  render () {
    return(
      <div className="PostList-item PostList-item--loading">
        <div className="PostList-item_thumbnail">
          <img src="./src/assets/img/blank-thumbnail.png" />
        </div>
        <div className="PostList-item_body">
          <div className="PostList-block_line_title"></div>
          <div className="PostList-block_line"></div>
          <div className="PostList-block_line"></div>
          <div className="PostList-block_line"></div>
        </div>
      </div>
    )
  }

}

export default LoadingState;
