import React, { Component } from 'react';
import FourLetterWord from './Components/FourLetterWord';
import Palabra from './Components/Palabra';
import PrefixRootSuffix from './Components/PrefixRootSuffix';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      fourLetterWord: {},
      game: {},
      palabra: {},
      prefixRootSuffix: {},
      user: {}
    }
  }
  render() {
    return (
      <div className="App">
        <h2>Palabras</h2>
        <Palabra palabra={ this.state.palabra }/>
        <PrefixRootSuffix prefixRootSuffix={ this.state.prefixRootSuffix } />
        <FourLetterWord fourLetterWord={ this.state.fourLetterWord }/>
      </div>
    );
  }
}

export default App;
