import React from 'react';
import PlayListItem from './PlayListItem'

const PlayList = (props) => {
  return (
    <div className="play-list">
      <h2>Look at what other people are listening to!:</h2>
      <PlayListItem />
    </div>
  )
}

export default PlayList;
