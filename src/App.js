import React, { Component } from 'react';
import Char from './Char/Char';
import Validation from './Validation/Validation';
import './App.css';

class App extends Component {
  state = {
    userInput: ''
  };

  inputChangeHandler = (event) => {
    this.setState({ userInput: event.target.value });
  };

  removeCharHandler = (index) => {
    
    const aCharacters = this.state.userInput.split('');
    // Remove character from array
    aCharacters.splice(index, 1);
    // convert array to a string again to get the updated text
    const updatedText = aCharacters.join('');

    this.setState({ userInput: updatedText });
  };

  render() {
    const characters = this.state.userInput.split('').map((ch, index) => {
      return (
        <Char clicked={() =>this.removeCharHandler(index)} character={ch} key={index}/>
      );
    });

    return (
      <div className="App">
        <header>
          <h1>Second assignment</h1>
        </header>
        <input
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {characters}
      </div>
    );
  }
}

export default App;
