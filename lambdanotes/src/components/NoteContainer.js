import React, { Component } from 'react'
import axios from 'axios';
import Note from './Note';

class NoteContainer extends Component {
    constructor() {
        super();
        this.state = {
            notes: [],
        };
    }
    componentDidMount = () => {
        axios.get('https://fe-notes.herokuapp.com/note/get/all')
        .then (response => {
          this.setState({notes: response.data});
        })
        .catch(err => {
          console.log(err);
        })
      };

    render() {
        return (
            <div className='NoteContainer'>
            {this.state.notes.map(note => {
                return (
                    <Note
                    title={note.title}
                    textBody={note.textBody}
                    tags={note.tags}
                    key={note.id}
                    />
                );
            })}
            
            </div>
        )
    }

}
export default NoteContainer;