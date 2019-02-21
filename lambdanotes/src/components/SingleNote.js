import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class SingleNoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isEdit:false,
    note: [],
      title: '',
      textBody: '',
    };
  }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchNote(id);
    }



    fetchNote = id => {
      Axios
        .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
        .then(response => {
            this.setState(
            {note: response.data},
            console.log(response.data));
        })

        .catch(err => {
            this.setState({loading: false});
            console.log(err)
         });
    }


    render() {
        return (
        <div className="NoteFormContainer">
        <h1>Your Note:</h1>
        <div className="linkContainer">
         <Link className="button" to={`/note/edit/${this.props.match.params.id}`}>Edit</Link>
         <button onClick={() => 'delete function to be added'}> delete(broken for now, will lead to modal)</button>
       </div>
       <div className="noteContainer">
         <h3>{this.state.note.title}</h3>
         <p>{this.state.note.textBody}</p>  
       </div>
      </div>
    );
  }
}

export default SingleNoteView;