import React, { Component } from 'react';
import shuffle from 'shuffle-array';
import * as apiCalls from './../actions/api';
import * as authCalls from './../actions/authApi';
import AuthForm from './../components/Forms/AuthForm';
import Main from './Main';
import NavBar from './../components/NavBar';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      fourLetterWord: {},
      fourLetterWords: [],
      game: {},
      games: [],
      prefixSuffixRoot: {},
      prefixSuffixRoots: [],
      user: {},
      users: [],
      verbo: {},
      verbos: []
    }
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  componentWillMount(){
    let user;
    this.loadRandomPalabras();
    if (typeof(Storage) !== "undefined") {
      user = JSON.parse(localStorage.getItem("user"));
      if (user.hasOwnProperty('token')) {
        this.setState({
          user
        });
      }
    }
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
      user: currentUser
    })
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem("user", JSON.stringify(currentUser));
    } else {
      console.log("no local storage");
    }


  }

  handleLogOut(){
    this.setState({
      user: {}
    });
  }

  render() {
    return (
      <div className="App">
        <NavBar className="NavBar" user={ this.state.user } onLogout={ this.handleLogOut }/>
        <AuthForm onAuth={ this.handleAuth } />
        <Main props={ this.state }/>
      </div>
    );
  }
}

export default App;
