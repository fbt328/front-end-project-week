import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Note from './Note';



class NoteContainer extends Component {
    constructor() {
        super();
        this.state = {
            notes: [],
        };
    }
  
    render() {
        return (
            <span className='NoteContainer'>
            {this.props.notes.map(note => {
                return (
                    <Link className='linkNote' key={note._id} to={`/note/get/${note._id}`}>
                    <Note
                    title={note.title}
                    textBody={note.textBody}
                    
                    id={note._id}
                    // noteDelete={this.props.noteDelete}
                    // editNote={this.props.editNote}
                    />
                    </Link>
                );
            })}
            
            </span>
        )
    }

}
export default NoteContainer;