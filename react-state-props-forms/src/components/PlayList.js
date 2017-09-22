import React, { Component } from 'react';
import PlayListItem from './PlayListItem'

export default class PlayList extends Component {
  constructor(){
    super();
    this.state={
      songs: []
    }
  }

  componentDidMount() {
    fetch('http://tiny-tiny.herokuapp.com/collections/playlisting').then(results => {
          return results.json();
        }).then(data => {
          this.setState({songs: data});
        })
  }

  //function to update playlist when user pushes "update list" button
  fetchData = (e) => {
      e.preventDefault();
      fetch('http://tiny-tiny.herokuapp.com/collections/playlisting').then(results => {
        return results.json();
      }).then(data => {
        console.log(data)
        this.setState({songs: data});
      })
    }

  render() {
    // console.log(this.props)
    console.log("state", this.state.songs)
  return (
    <div className="play-list">
      <h2>Look at what other people are listening to!:</h2>
      <button className="btn btn-primary btn-lg" type="update" onClick={this.fetchData}>Update list</button>
      {this.state.songs.map((songInfo) => {
        return <PlayListItem
          key={songInfo._id}
          songInfo={songInfo}
          />
      })}
    </div>
  )
  }
}
