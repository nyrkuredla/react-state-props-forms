import React from 'react';

const PlayListForm = (props) => {
  return (
    <div className="play-list">
      <form className="form-group">
        <h2>What are you listening to?</h2>
        <input className="form-control"
          name="username"
          // value={this.state.username}
          type="text"
          placeholder="Username:"
          // onChange={this._handleChange}
        />
        <input className="form-control"
          name="artist"
          // value={this.state.artist}
          type="text"
          placeholder="Artist/Band:"
          // onChange={this._handleChange}
        />
        <input className="form-control"
          name="song"
          // value={this.state.song}
          type="text"
          placeholder="Song title:"
          // onChange={this._handleChange}
        />
        <input className="form-control"
          name="notes"
          // value={this.state.notes}
          type="textarea" size="30"
          placeholder="Notes about song:"
          // onChange={this._handleChange}
        />
        <button className="btn btn-primary btn-lg" type="submit" onSubmit={this._handleSubmit}>Submit!</button>
      </form>
    </div>
  )
}

export default PlayListForm;
