import React, { Component } from 'react';

export default class PlayListItem extends Component {
  render() {
    const { songInfo } = this.props;
    return (
      <div className="card">
        <div className="card-body">
          <ul>
            <li><strong>User:</strong> {songInfo.userName}</li>
            <li><strong>Artist/Band:</strong> {songInfo.songArtist}</li>
            <li><strong>Title:</strong> {songInfo.songTitle}</li>
            <li><strong>Notes:</strong> {songInfo.songNotes}</li>
          </ul>
        </div>
      </div>


    )
  }
}
