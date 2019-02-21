import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';

import SideBar from './containers/Layout/SideBar';
import DisplayBar from './containers/Layout/DisplayBar';

import Header from './components/Header';
import SearchBox from './components/SearchBox';



class App extends Component {
  render() {
    return (

      <Router>
        <div>

          <div>
            <Header />
            <SearchBox />
          </div>

          <div className="row">
            <SideBar/>
            <DisplayBar/>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
