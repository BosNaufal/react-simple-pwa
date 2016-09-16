
import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import * as UIActionsCreator from '../../redux/actions/ui.js';

function mapStateToProps({ ui, post }) {
  return {
    sidebarOpen: ui.sidebarOpen,
    categories: post.categories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    UIActions: bindActionCreators(UIActionsCreator, dispatch)
  }
}

class Sidebar extends React.Component {

  render () {

    let { sidebarOpen, categories } = this.props
    let { toggleSidebar, filterPost } = this

    return(
      <div className="Sidebar-container">
        <aside className={"Sidebar u-shadow " + ( sidebarOpen ? 'Sidebar--open' : '') }>
          <h4 className="Sidebar-title">Categories</h4>
          <ul className="list-unstyled Sidebar-menu">
            <li><a href="#" onClick={ filterPost.bind(this,'') }>All</a></li>

            { categories.length > 0 ? categories.map((category, i) => {
              return (
                <li key={ i }>
                  <a href="#" onClick={ filterPost.bind(this,category) }>{ category }</a>
                </li>
              )
            })
            : null }

          </ul>
        </aside>
        <div className={ "Sidebar-overlay " + ( sidebarOpen ? 'Sidebar-overlay--open' : '' ) } onClick={ toggleSidebar.bind(this) }></div>
      </div>
    )
  }

  toggleSidebar() {
    this.props.UIActions.toggleSidebar()
  }

  filterPost(query,e) {
    e.preventDefault()
    this.props.UIActions.updateQuery(query)
    this.toggleSidebar()
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
