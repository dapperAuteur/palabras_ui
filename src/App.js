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
    this.loadRandomWords();
  }

  async loadRandomWords(){
    let fourLetterWords = await apiCalls.getWords("fourLetterWords");
    let prefixSuffixRoots = await apiCalls.getWords("prefixSuffixRoots");
    let verbos = await apiCalls.getWords("verbos");


    let fourLetterWord = shuffle.pick(fourLetterWords, [{ 'copy': true }, { 'picks': 1 }]);
    let prefixSuffixRoot = shuffle.pick(prefixSuffixRoots, [{ 'copy': true }, { 'picks': 1 }]);
    let verbo = shuffle.pick(verbos, [{ 'copy': true }, { 'picks': 1 }]);

    this.setState({
      fourLetterWord,
      fourLetterWords,
      prefixSuffixRoot,
      prefixSuffixRoots,
      verbos: verbos,
      verbo: verbo
    });
  }

  async loadPalabra(p = "prefixSuffixRoots", p_id = "5a6d123f4f90e60fe36db2d3"){
    let palabra = await apiCalls.getPalabra(p, p_id);
    console.log(palabra);
  }



  render() {
    this.loadPalabra();
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
