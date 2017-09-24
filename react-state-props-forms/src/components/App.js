import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/bootstrap.min.css';

import NavBar from './NavBar'
import PlayList from './PlayList'
import PlayListForm from './PlayListForm'

export default class App extends Component {
  constructor(){
    super();
    this.state={
      songs: []
    }
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <PlayListForm />
        <PlayList />    
      </div>
    );
  }
}
