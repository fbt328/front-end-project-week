import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import NoteContainer from './components/NoteContainer'
import SideBar from './components/SideBar'
import Axios from 'axios';
import './App.css';
import NoteSubmitter from './components/NoteSubmitter';
import NoteEditing from './components/NoteEditing';
import SingleNote from './components/SingleNote';

class App extends Component {
   constructor() {
    super();
    this.state = {
      notes: [],
      title: '',
      textBody: '',
    };
  }
 
  componentDidMount() {

    // // get notes
    Axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then (response => {
        this.setState({notes: response.data});
      })
      .catch(err => {
        console.log(err);
    })
  }
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


    // add note
    // addNote = (note) => {
    //  Axios
    //   .post('https://fe-notes.herokuapp.com/note/create', note)
    //   .then(response => {
    //     this.setState({notes: response.data})
    //     console.log('here is the response', response)
    //   })
    //   .catch(err => console.log(err))
    // }


    // delete note
    noteDelete = (id) => {
      console.log(id)
      const notes = this.state.notes.slice()
      Axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then (response => {
        this.setState({notes: notes.filter(note => note._id !== id)
        })
        this.props.history.push(`/`)
        {/* this.props.history.push() to main view on note delete .then */}
        // if not the id of the note being deleted, then return the rest of the items as a new array
        console.log(response)
      })
      .catch (err => console.log(err));
  }

  // update note
  editNote = (id, updatingNote) => {
    Axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, updatingNote)
      .then ((response) => {
          this.props.refresh();
          this.props.history.push(`/note/${this.props.id}`)
      })
      .catch(err => console.log(err))
  }
  
  render() {
    return (
      <div className="App">
        <header className='appContainer'>
          <div> 
            <div className='homePage'> 

            <SideBar />
            {/* side bar needs to be the nav bar? */}

          
              <Route 
              exact path="/note/get/:id"
              render={props=>
              <SingleNote {...props} noteDelete={this.noteDelete}/> }
          />
          {/* takes you to view a single note */}

              <Route 
                exact path={`/note/edit/:id`}
                render={props=>
                <NoteEditing {...props} editNote={this.editNote} /> }
              />
          
              <Route 
                exact path='/note/create'
                render={props =>
                <NoteSubmitter {...props} addNote={this.addNote}/>}
              />
        
            {/* note submitter link should live on the side bar, when you click it, it takes you to new note screen */}
           
           
           
            <Route exact path='/'
              render={props => 
                <NoteContainer {...props} notes={this.state.notes}
                //  noteDelete={this.noteDelete} editNote={this.editNote} 
                 />}
            />
           </div>


            {/* single note view... route based on ID. also needs edit and delete. */}
            {/* <Route path='/note/:id'
              render={props =>
              <Note {...props} notes={this.state.notes} delete={this.noteDelete}/> }
              /> */}
                 {/* noteDelete={this.noteDelete} editNote={this.editNote} */}
            
          </div>
        </header>
      </div>
    );
  }
}


export default App;
