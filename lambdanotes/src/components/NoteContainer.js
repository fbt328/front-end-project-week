import React, { Component } from 'react'
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
            <div className='NoteContainer'>
            {this.props.notes.map(note => {
                return (
                    <Note
                    title={note.title}
                    textBody={note.textBody}
                    tags={note.tags}
                    key={note._id}
                    id={note._id}
                    noteDelete={this.props.noteDelete}
                    editNote={this.props.editNote}
                    />
                   
                );
            })}
            
            </div>
        )
    }

}
export default NoteContainer;