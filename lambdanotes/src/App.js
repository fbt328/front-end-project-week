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
  


  //   // add note
  //   addNote = (note) => {
     
  //    Axios
  //     .post('https://fe-notes.herokuapp.com/note/create', note)
  //     .then(response => console.log(response))
  //     .catch(err => console.log(err));
  //   }

  //   // delete note
  //   noteDelete = () => {
  //     Axios.delete('https://fe-notes.herokuapp.com/note/delete/${id}')
  //     .then (response => console.log(response))
  //     .catch (err => console.log(err));
  }
  
  
  render() {
    return (
      <div className="App">
        <header className='appContainer'>
          <div> 
            <NoteSubmitter addNote={this.addNote}/>
            {/* note submitter link should live on the side bar, when you click it, it takes you to new note scren */}
            <SideBar />
            {/* side bar needs to be the nav bar? */}
           <Route exact path='/'
              render={props => 
                <NoteContainer {...props} notes={this.state.notes}/>}
            />
            
            
            
               
            
          </div>
        </header>
      </div>
    );
  };
}

export default App;
