import React, { Component } from 'react';


export default class PlayListForm extends Component {
  constructor(){
    super();
    this.state={
      userName: "",
      songTitle: "",
      songName: "",
      songNotes: ""
    }
  }

  _handleChange = (event) => {
      let inputName = event.target.name
      this.setState({
         [inputName] : event.target.value
      })
   }

  //adds information from form to list of displayed songs
  addToList = (e) => {
      e.preventDefault();
      this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-tiny.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
  }

  render() {
    return (
      <div className="play-list">
        <form className="form-group">
          <h2>What are you listening to?</h2>
          <input className="form-control"
            name="userName"
            value={this.state.userName}
            type="text"
            placeholder="Username:"
            onChange={this._handleChange}
          />
          <input className="form-control"
            name="songArtist"
            value={this.state.songArtist}
            type="text"
            placeholder="Artist/Band:"
            onChange={this._handleChange}
          />
          <input className="form-control"
            name="songTitle"
            value={this.state.songTitle}
            type="text"
            placeholder="Song title:"
            onChange={this._handleChange}
          />
          <input className="form-control"
            name="songNotes"
            value={this.state.songNotes}
            type="textarea" size="30"
            placeholder="Notes about song:"
            onChange={this._handleChange}
          />
          <button className="btn btn-primary btn-lg" type="submit" onClick={this.addToList}>Submit!</button>
        </form>
      </div>
    )
  }
}
