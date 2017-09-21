import React from 'react';

const PlayListItem = (props) => {
  return (
    <div className="playlist-item card col-sm-12 col-md-4">
      {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
      <div className="card-body">
        <ul>
          <li>User</li>
          <li>Artist/Band</li>
          <li>Title</li>
          <li>Notes</li>
        </ul>
      </div>
    </div>


  )
}

export default PlayListItem;
