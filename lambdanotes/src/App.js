import React, { Component } from 'react';
import NoteContainer from './components/NoteContainer'



import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <NoteContainer />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
