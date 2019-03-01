import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Banner from './components/Banner';
import Feed from './components/Feed';
import PopularTags from './components/PopularTags';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <div className="Wrapper">
        <div className="Main-section">
          <Feed />
          <PopularTags />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
