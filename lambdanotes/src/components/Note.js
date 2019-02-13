import React from 'react';

const Note = props => {
    return (
        <div className='aNote'>
            <h3>Title: {props.title} </h3>
            <p>Text Body: {props.textBody}</p>
            <p> tags: {props.tags} </p>
        </div>
    );
};


export default Note;