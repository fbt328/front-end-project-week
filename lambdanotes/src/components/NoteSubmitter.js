import React, { Component } from 'react';
import Axios from 'axios';

class NoteSubmitter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: {},
      title: '',
      textBody: '',
      tag: ''
    };
  }
 
  addNote = e => {
    // const newNote = this.state.notes
    e.preventDefault();
    Axios.post('https://fe-notes.herokuapp.com/note/create', {
        title: this.state.title, 
        textBody: this.state.textBody })
    .then (() => {
      // this.setState({
      //   newNote: something here })
        this.props.history.push(`/`)
    })
    .catch (err => console.log(err))
  }

  handleInputChange = e => {
    this.setState({ 
      [e.target.name]: e.target.value });
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


// current "known issue":
// when I save a note, I must click back to view list, and then refresh the list in order to see my new note.
// will attempt to fix later.