
import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import * as UIActionsCreator from '../../redux/actions/ui.js';

function mapStateToProps({ ui }) {
  return {
    sidebarOpen: ui.sidebarOpen,
    searchbarOpen: ui.searchbarOpen,
    onPostItem: ui.onPostItem,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    UIActions: bindActionCreators(UIActionsCreator, dispatch)
  }
}

class PrimaryNav extends React.Component {

  render () {

    let { onPostItem, sidebarOpen, searchbarOpen } = this.props
    let { toggleSidebar, toggleSearchbar, backToHome } = this

    return(
      <div className="PrimaryNav u-shadow">
        <div className="container">
          <div className="row">
            <div className="col-xs-3 PrimaryNav-button_nav_container text-center">
              { onPostItem ?
                  <button v-if="onPostItem" className="btn PrimaryNav-button_nav PrimaryNav-button" onClick={ backToHome.bind(this) }>
                    <i className="ion-arrow-left-c"></i>
                  </button>
                :
                  <button v-if="!onPostItem" className="btn PrimaryNav-button_nav PrimaryNav-button" onClick={ toggleSidebar.bind(this) }>
                    <i className={ sidebarOpen ? 'ion-close' : 'ion-navicon' }></i>
                  </button>
              }
            </div>
            <div className="col-xs-6 PrimaryNav-logo_container text-center">
              <h1 className="PrimaryNav-logo"><a href="#/">Simple PWA</a></h1>
            </div>
            <div className="col-xs-3 PrimaryNav-button_search_container text-center">
              { onPostItem === false ?
                <button className="btn PrimaryNav-button_search PrimaryNav-button" onClick={ toggleSearchbar.bind(this) }>
                  <i className={ searchbarOpen ? 'ion-close' : 'ion-ios-search-strong' }></i>
                </button>
              : null }
            </div>
          </div>
        </div>
    </div>
    )
  }


  toggleSearchbar() {
    this.props.UIActions.toggleSearchbar()
  }

  toggleSidebar() {
    this.props.UIActions.toggleSidebar()
  }

  backToHome() {
    window.history.back()
    this.props.UIActions.onNetralPage()
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(PrimaryNav);
