import React from 'react';
import { Link } from 'react-router-dom';

const Note = props => {
    return (
        <div className='aNote'>
            <Link to={`/editnote/${props.id}`}>
                <button
                onClick={() => props.editNote(props.id)}>edit</button>
            </Link>

            <button onClick={() => props.noteDelete(props.id)}>delete</button>
            <h3>Title: {props.title} </h3>
            <p>Text Body: {props.textBody}</p>
           
        </div>
    );
};

export default Note;