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
    this.loadRandomPalabras();
  }

  async loadRandomPalabras(){
    let fourLetterWords = await apiCalls.getPalabras("fourLetterWords");
    let prefixSuffixRoots = await apiCalls.getPalabras("prefixSuffixRoots");
    let verbos = await apiCalls.getPalabras("verbos");


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

  async loadPalabra(p = "prefixSuffixRoots/", pId = "5a6d123f4f90e60fe36db2d3"){
    let palabra = await apiCalls.getPalabra(p, pId);
  }

  async addPalabra(p = "verbos/", pObj = { spanish: "asdf" }){
    let newPalabra = await apiCalls.createPalabra(p, pObj);
  }

  async updatePalabra(p = "verbos/", pObj = { _id: "", spanish: "asdf" }) {
    let updatedPalabra = await apiCalls.updatePalabra(p, pObj);
    let params = p.slice(0, -1);
    const palabras = this.state.params.map(param => (param._id === updatedPalabra._id) ? { ...param, ...updatedPalabra } : param)
    this.setState({ palabras })
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
