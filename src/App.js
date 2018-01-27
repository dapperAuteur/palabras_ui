import React, { Component } from 'react';
import shuffle from 'shuffle-array';
import FourLetterWord from './Components/FourLetterWord';
import Verbo from './Components/Verbo';
import PrefixSuffixRoot from './Components/PrefixSuffixRoot';
import * as authCalls from './Actions/index';
import * as apiCalls from './Actions/api';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      fourLetterWord: {},
      fourLetterWords: [],
      game: {},
      prefixSuffixRoot: {},
      prefixSuffixRoots: [],
      verbo: {},
      verbos: [],
      user: {},
    }
  }

  componentWillMount(){
    this.loadWords();
  }

  async loadWords(){
    let verbos = await apiCalls.getWords("verbos");
    let prefixSuffixRoots = await apiCalls.getWords("prefixSuffixRoots");

    let verbo = shuffle.pick(verbos, [{ 'copy': true }, { 'picks': 1 }]);
    let prefixSuffixRoot = shuffle.pick(prefixSuffixRoots, [{ 'copy': true }, { 'picks': 1 }]);

    this.setState({
      prefixSuffixRoot: prefixSuffixRoot,
      prefixSuffixRoots: prefixSuffixRoots,
      verbos: verbos,
      verbo: verbo
    });
    console.log(verbo, verbos);
  }

  render() {
    return (
      <div className="App">
        <h2>Verbos</h2>
        <Verbo verbo={ this.state.verbo } />
        <PrefixSuffixRoot prefixSuffixRoot={ this.state.prefixSuffixRoot } />
        <FourLetterWord fourLetterWord={ this.state.fourLetterWord } />
      </div>
    );
  }
}

export default App;
