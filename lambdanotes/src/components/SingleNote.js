import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Modal from './Modal';
class SingleNote extends Component {
  state = {
    note: [],
      title: '',
      textBody: '',
      show: false
  }




  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    })
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {    
  //   note: [],
  //   title: '',
  //   textBody: '',
  //   show: !this.state.show
  //     }
  //   }
    

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
          {/* <button> onClick={() => props.noteDelete(props.id)} delete(broken for now, will lead to modal)</button>  */}
       </div>
       <div className="noteContainer">
       <input type='button'
          onClick={this.showModal}
          value='delete note'
        />
       <Modal onClose={this.showModal} show={this.state.show} id={this.props.match.params.id} noteDelete={this.props.noteDelete}>
       Are you sure you want to delete your note?
         <p>(this cannot be undone)</p>
       </Modal>
         <h3>{this.state.note.title}</h3>
         <p>{this.state.note.textBody}</p>  
       </div>
      </div>
    );
  }
}

export default SingleNote;