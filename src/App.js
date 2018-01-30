import React, { Component } from 'react';
import shuffle from 'shuffle-array';
import * as authCalls from './Actions/authApi';
import * as apiCalls from './Actions/api';
import DetailsUser from './Components/Users/DetailsUser';
import AuthForm from './Components/Forms/AuthForm';
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
      users: []
    }
    this.handleAuth = this.handleAuth.bind(this);
  }

  componentWillMount(){
    this.loadRandomPalabras();
    this.loadUser();
    console.log(this.state);
  }

  async loadUser(){
    console.log("load users");
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
    console.log(p, pId);
    // let palabra = await apiCalls.getPalabra(p, pId);
    // let pal = p.slice(0, -1);
    // this.setState({ `${pal}`: palabra })
  }

  async addPalabra(p = "verbos/", pObj = { spanish: "asdf" }){
    let newPalabra = await apiCalls.createPalabra(p, pObj);
    this.setState({ fourLetterWord: newPalabra });
    console.log(newPalabra);
  }

//line 62 may be broken
  async updatePalabra(p = "verbos/", pObj = { _id: "", spanish: "asdf" }) {
    let updatedPalabra = await apiCalls.updatePalabra(p, pObj);
    let params = p.slice(0, -1);
    const palabras = this.state[params].map(param => (param._id === updatedPalabra._id) ? { ...param, ...updatedPalabra } : param)
    this.setState({ palabras })
  }

  handleSave=(p, pObj) => {
    this.addPalabra(p, pObj);
    console.log(p, pObj);
    //route to new palabra after this.addPalabra is finished or form if errors
  }

  async handleAuth(user) {
    console.log(user);
    let currentUser;
    if (user.username !== "") {
      console.log(user.username);
      currentUser = await authCalls.signUp(user);
      console.log(currentUser);

      console.log(this.state);
    } else {
      console.log("signIn");
      currentUser = await authCalls.signIn(user);
      console.log(currentUser);

      console.log(this.state);
    }
    console.log(this.state);
    this.setState({
      user
    })


  }

  render() {
    return (
      <div className="App">
        <h1>Palabras</h1>
        <h2>Random Four Letter Word: { this.state.fourLetterWord.word }</h2>
        <h2>Random Prefix Root or Suffix: { this.state.prefixSuffixRoot.word }</h2>
        <h2>Random Spanish Verb: { this.state.verbo.spanish }</h2>
        <DetailsUser user={ this.state.user }/>
        <AuthForm onAuth={ this.handleAuth }/>
      </div>
    );
  }
}

export default App;
