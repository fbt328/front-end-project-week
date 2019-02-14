import React, { Component } from 'react';
import Axios from 'axios';

class NoteSubmitter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      textBody: '',
      tag: ''
    };
  }
 
  addNote = e => {
    e.preventDefault();
    Axios.post('https://fe-notes.herokuapp.com/note/create', {
        title: this.state.title, 
        textBody: this.state.textBody })
    .then (() => {
      this.setState({
        title: '',
        textBody: '',
        tag: ''})
    })
    .catch (err => console.log(err))
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="NoteFormContainer">
      <h1>Create New Note:</h1>
        <form onSubmit={this.addNote}>
          <p><input
            onChange={this.handleInputChange}
            placeholder="Note Title"
            value={this.state.title}
            name="title"
          /></p>

         <p><input
            onChange={this.handleInputChange}
            placeholder="Note Content"
            value={this.state.textBody}
            name="textBody"
          /></p>
          
          <button type="saveNoteButton">Save</button>
        </form>
      </div>
    );
  }
}

export default NoteSubmitter;
