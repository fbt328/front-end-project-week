import React, { Component } from 'react';
import Axios from 'axios';

class NoteEditing extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isEdit:false,
    noteForEditing: {},
      updatedTitle: '',
      updatedTextBody: '',
    };
  }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchNote(id);
    }

    // InputHandler = (e) => {
    //     this.setState({
    //         updatedTitle: e.target.value,
    //         updatedTextBody: e.target.value,
    //     });
    // }


    handleInputChange = e => {
        this.setState({ 
        [e.target.name]: e.target.value });
    };
  
    TitleInputHandler = (e) => {
        this.setState({
            updatedTitle: e.target.value
        });
    }

    TextBodyInputHandler = (e) => {
        this.setState({
            updatedTextBody: e.target.value,
            
            
        });
    }

    fetchNote = id => {
      Axios
        .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
        .then(response => {
            this.setState(
            {noteForEditing: response.data},
            console.log(response.data));
        })

        .catch(err => {
            this.setState({loading: false});
            console.log(err)
         });
    }


    editNote = e => {
        e.preventDefault();
        Axios
            .put(`https://fe-notes.herokuapp.com/note/edit/${this.props.match.params.id}`, {
                title: this.state.updatedTitle,
                textBody: this.state.updatedTextBody,
            })
            .then ((response) => {
                this.props.refresh();
                this.props.history.push(`/note/${this.props.match.params.id}`)
            })
            .catch (err => console.log(err))
    }

    render() {
        return (
        <div className="NoteFormContainer">
        <h1>Edit Your Note:</h1>
        <form onSubmit={this.editNote}>
                <p><input
                onChange={this.TitleInputHandler}
                placeholder="Note Title"
                defaultValue={this.state.noteForEditing.title}
                name="title"
            /></p>

            <p><input
                onChange={this.TextBodyInputHandler}
                placeholder="Note Content"
                defaultValue={this.state.noteForEditing.textBody}
                name="textBody"
            /></p>
          
            <button type="saveNoteButton">Save Your Changes</button>
        </form>
      </div>
    );
  }
}

export default NoteEditing;