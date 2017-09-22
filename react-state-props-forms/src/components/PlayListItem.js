import React, { Component } from 'react';

export default class PlayListItem extends Component {
  render() {
    const { songInfo } = this.props;
    return (
      <div className="playlist-item card col-sm-12 col-md-4">
        {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
        <div className="card-body">
          <ul>
            <li>User: {songInfo.userName}</li>
            <li>Artist/Band: {songInfo.songArtist}</li>
            <li>Title: {songInfo.songTitle}</li>
            <li>Notes: {songInfo.songNotes}</li>
          </ul>
        </div>
      </div>


    )
  }
}
