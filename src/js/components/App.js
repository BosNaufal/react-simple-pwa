
import React from 'react';

import PrimaryNav from './PrimaryNav/';
import Searchbar from './Searchbar/';
import Sidebar from './Sidebar/';
import MyFooter from './MyFooter/';

import '../../sass/main.sass'

class App extends React.Component {

  render() {

    let { children } = this.props

    return (
      <div>
        <PrimaryNav />
        <Sidebar />
        <Searchbar />
        <div className="MainWrapper">
          { children }
        </div>
        <MyFooter />
      </div>
    );
  }

}

export default App;
