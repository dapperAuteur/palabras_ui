import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
      showLoginForm: false,
      showSignUpForm: false,
      user: {},
      users: [],
      verbo: {},
      verbos: []
    }
    this.handleSave = this.handleSave.bind(this);
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleLoadFourLetterWords = this.handleLoadFourLetterWords.bind(this);
    this.handleLoadPrefixSuffixRoots = this.handleLoadPrefixSuffixRoots.bind(this);
    this.handleLoadVerbos = this.handleLoadVerbos.bind(this);
    this.handleLoadRandomFourLetterWords = this.handleLoadRandomFourLetterWords.bind(this);
    this.handleLoadRandomPrefixSuffixRoots = this.handleLoadRandomPrefixSuffixRoots.bind(this);
    this.handleLoadRandomVerbos = this.handleLoadRandomVerbos.bind(this);
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
  }

  async loadUser(){
  }

  async loadRandomPalabras(){

    this.handleLoadFourLetterWords();
    this.handleLoadPrefixSuffixRoots();
    this.handleLoadVerbos();

  }

  async handleLoadFourLetterWords () {
    let fourLetterWords = await apiCalls.getPalabras("fourLetterWords");

    this.setState({
      fourLetterWords
    })
  }

  async handleLoadRandomFourLetterWords(){
    let fourLetterWords;
    if (this.state.fourLetterWords) {
      fourLetterWords = [...this.state.fourLetterWords];
    } else {
      this.handleLoadFourLetterWords();
      this.handleLoadRandomFourLetterWords();
    }

    let fourLetterWord = shuffle.pick(fourLetterWords, [{ 'copy': true }, { 'picks': 1 }]);

    this.setState({
      fourLetterWord
    })
  }

  async handleLoadPrefixSuffixRoots(){
    let prefixSuffixRoots = await apiCalls.getPalabras("prefixSuffixRoots");

    this.setState({
      prefixSuffixRoots
    })
  }

  async handleLoadRandomPrefixSuffixRoots(){
    let prefixSuffixRoots;
    if (this.state.prefixSuffixRoots) {
      prefixSuffixRoots = [...this.state.prefixSuffixRoots];
    } else {
      this.handleLoadPrefixSuffixRoots();
      this.handleLoadRandomPrefixSuffixRoots();
    }
    let prefixSuffixRoot = shuffle.pick(prefixSuffixRoots, [{ 'copy': true }, { 'picks': 1 }]);

    this.setState({
      prefixSuffixRoot
    });
  }

  async handleLoadVerbos() {
    let verbos = await apiCalls.getPalabras("verbos");

    this.setState({
      verbos
    })
  }

  async handleLoadRandomVerbos() {
    let verbos;
    if (this.state.verbos) {
      verbos = [...this.state.verbos];
    } else {
      this.handleLoadVerbos();
      this.handleLoadRandomVerbos();
    }
    let verbo = shuffle.pick(verbos, [{ 'copy': true }, { 'picks': 1 }]);

    this.setState({
      verbo
    })
  }

  async loadPalabra(p = "prefixSuffixRoots/", pId = "5a6d123f4f90e60fe36db2d3"){
    // let palabra = await apiCalls.getPalabra(p, pId);
    // let pal = p.slice(0, -1);
    // this.setState({ `${pal}`: palabra })
  }

  async handleAddPalabra(p = "verbos/", pObj = { spanish: "asdf" }){
    let newPalabra = await apiCalls.createPalabra(p, pObj);
    this.setState({ fourLetterWord: newPalabra });
    console.log(newPalabra);
  }

  async handleUpdatePalabra(p = "verbos/", pObj) {
    console.log(p, pObj);
    let updatedPalabra = await apiCalls.updatePalabra(p, pObj);
    let params = p.slice(0, -1);
    const palabras = this.state[params].map(param => (param._id === updatedPalabra._id) ? { ...param, ...updatedPalabra } : param)
    this.setState({ palabras });
    console.log(updatedPalabra, palabras);
  }

  handleSave=(p, pObj) => {
    // if pObj has _id property call update, otherwise call add
    if (pObj.hasOwnProperty('_id')) {
      console.log(pObj._id);
      console.log(pObj);
      this.handleUpdatePalabra(p, pObj);
    } else {
      console.log("no _id");
      this.handleAddPalabra(p, pObj);
    }
    console.log(p, pObj);
    //route to new palabra after this.addPalabra is finished or form if errors
  }

  async handleAuth(user) {
    let currentUser;
    if (user.username !== "") {
      currentUser = await authCalls.signUp(user);
    } else {
      currentUser = await authCalls.signIn(user);
    }
    this.setState({
      showLoginForm: false,
      showSignUpForm: false,
      user: currentUser
    })
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem("user", JSON.stringify(currentUser));
    } else {
      console.log("no local storage");
    }


  }

  handleLogOut(){
    let user = {};
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem("user", JSON.stringify(user));
    }
    this.setState({
      user: {}
    });
  }

  render() {
    const { showLoginForm, showSignUpForm, user } = this.state;
    return (
      <div className="App">
        <NavBar
          className="NavBar"
          user={ user }
          onLogout={ this.handleLogOut }
          onShowLoginForm={ () => this.setState({
            showLoginForm: true,
            showSignUpForm: false
          }) }
          onShowSignUpForm={ () => this.setState({
            showLoginForm: false,
            showSignUpForm: true
          }) }
          />
        { showLoginForm || showSignUpForm ?
          <AuthForm
            onAuth={ this.handleAuth }
            onClose={ () => this.setState({
              showLoginForm: false,
              showSignUpForm: false
            })}
            onShowLoginForm={ () => this.setState({
              showLoginForm: true,
              showSignUpForm: false
            })}
            onShowSignUpForm={ () => this.setState({
              showLoginForm: false,
              showSignUpForm: true
            })}
            showLoginForm={ showLoginForm }
            showSignUpForm={ showSignUpForm }
            /> :
            null
        }
        <Main
          props={ this.state }
          onSave={ this.handleSave }
          onLoadRandomFourLetterWords={ this.handleLoadRandomFourLetterWords }
          onLoadRandomPrefixSuffixRoots={ this.handleLoadRandomPrefixSuffixRoots }
          onLoadRandomVerbos={ this.handleLoadRandomVerbos }
          />
      </div>
    );
  }
}

export default withRouter(App);
