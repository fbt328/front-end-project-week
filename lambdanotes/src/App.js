import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import NoteContainer from './components/NoteContainer'
import SideBar from './components/SideBar'
import Axios from 'axios';
import './App.css';
import NoteSubmitter from './components/NoteSubmitter';

class App extends Component {
   constructor() {
    super();
    this.state = {
      notes: [],
      title: '',
      textBody: '',
      tag: ''
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
      Axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then (response =>{
        this.setState({notes: this.state.notes.filter(note => note._id !== id)
        })
        // if not the id then return array
        console.log(response)
      })
      .catch (err => console.log(err));
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  
  render() {
    return (
      <div className="App">
        <header className='appContainer'>
          <div> 
           <Route path='/note/create'
              render={props =>
                 <NoteSubmitter {...props} addNote={this.addNote}/>}
            />
            {/* note submitter link should live on the side bar, when you click it, it takes you to new note screen */}
           
           
            <SideBar />
            {/* side bar needs to be the nav bar? */}
           
            
            <Route exact path='/'
              render={props => 
                <NoteContainer {...props} notes={this.state.notes} noteDelete={this.noteDelete} />}
            />

           
           
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
