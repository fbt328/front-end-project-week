import React from 'react';


const Note = props => {
    return (
        <div className='aNote'>
            <button>edit(doesn't work yet)</button>
            <button onClick={() => props.noteDelete(props.id)}>delete</button>
            <h3>Title: {props.title} </h3>
            <p>Text Body: {props.textBody}</p>
            <p> tags: {props.tags} </p>
           
        </div>
    );
};

export default Note;