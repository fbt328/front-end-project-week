import React from 'react';
// import { Link } from 'react-router-dom';

const Note = props => {
    return (
        <span className='mappedNote'>
            {/* <Link to={`/note/edit/${props.id}`}>
                <button
                onClick={() => props.editNote(props.id)}>edit</button>
            </Link>

             <button onClick={() => props.noteDelete(props.id)}>delete</button> */}
            <h3>Title: {props.title} </h3>
            <p>Text Body: {props.textBody}</p>
           
        </span>
    );
};
export default Note;