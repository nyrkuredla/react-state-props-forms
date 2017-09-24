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
    fetch('https://tiny-tiny.herokuapp.com/collections/playlisting').then(results => {
          return results.json();
        }).then(data => {
          this.setState({songs: data});
        })
  }

  //function to update playlist when user pushes "update list" button
  fetchData = (e) => {
      e.preventDefault();
      fetch('https://tiny-tiny.herokuapp.com/collections/playlisting').then(results => {
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
      <h2 className="header">Here's what other people are listening to...</h2>
      <button className="col col-med-2 align-self-center update button btn btn-secondary btn-link" type="update" onClick={this.fetchData}>Update list</button>
      {this.state.songs.map((songInfo) => {
        return <div className="row">
          <div className="playlist-item col-sm-12 col-md-6">
            <PlayListItem
              key={songInfo._id}
              songInfo={songInfo}
            />
          </div>
        </div>
      })}
    </div>
  )
  }
}
