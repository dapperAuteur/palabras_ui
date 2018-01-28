import React, { Component } from 'react';
import shuffle from 'shuffle-array';
import * as authCalls from './Actions/index';
import * as apiCalls from './Actions/api';
import FormFourLetterWord from './Components/FourLetterWords/FormFourLetterWord';
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
    this.setState({ fourLetterWord: newPalabra });
    console.log(newPalabra);
  }

  async updatePalabra(p = "verbos/", pObj = { _id: "", spanish: "asdf" }) {
    let updatedPalabra = await apiCalls.updatePalabra(p, pObj);
    let params = p.slice(0, -1);
    const palabras = this.state.params.map(param => (param._id === updatedPalabra._id) ? { ...param, ...updatedPalabra } : param)
    this.setState({ palabras })
  }

  handleSave=(p, pObj) => {
    this.addPalabra(p, pObj);
    console.log(p, pObj);
    //route to new palabra after this.addPalabra is finished or form if errors
  }

  render() {
    return (
      <div className="App">
        <h1>Palabras</h1>
        <h2>Random Four Letter Word: { this.state.fourLetterWord.word }</h2>
        <h2>Random Prefix Root or Suffix: { this.state.prefixSuffixRoot.word }</h2>
        <h2>Random Spanish Verb: { this.state.verbo.spanish }</h2>
        <FormFourLetterWord onSave={ this.handleSave }/>
      </div>
    );
  }
}

export default App;
