import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
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
    this.handleLoadRandomFourLetterWord = this.handleLoadRandomFourLetterWord.bind(this);
    this.handleLoadRandomPrefixSuffixRoot = this.handleLoadRandomPrefixSuffixRoot.bind(this);
    this.handleLoadRandomVerbo = this.handleLoadRandomVerbo.bind(this);
  }

  componentWillMount(){
    this.loadRandomPalabras();
    console.log(this.state);
    // if (this.state.fourLetterWord === {}) {
    // } else {
    //   this.handleLoadRandomFourLetterWord();
    // }
    // if (this.state.prefixSuffixRoot === {}) {
    //
    // } else {
    //   this.handleLoadRandomPrefixSuffixRoot();
    // }
    // if (this.state.verbo === {}) {
    //
    // } else {
    //   this.handleLoadRandomVerbo();
    //   console.log(this.state.verbo);
    // }
    console.log("component will mount");
    let user;

    // if (typeof(Storage) !== "undefined") {
    //   user = JSON.parse(localStorage.getItem("user"));
    //   if (user.hasOwnProperty('token')) {
    //     this.setState({
    //       user
    //     });
    //   }
    // }
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
    localStorage.setItem("fourLetterWords", JSON.stringify(fourLetterWords));
  }

  async handleLoadRandomFourLetterWord(){
    let fourLetterWords;
    if (this.state.fourLetterWords) {
      fourLetterWords = [...this.state.fourLetterWords];
    } else {
      this.handleLoadFourLetterWords();
      this.handleLoadRandomFourLetterWord();
    }
    let fourLetterWord = shuffle.pick(fourLetterWords, [{ 'copy': true }, { 'picks': 1 }]);

    this.setState({
      fourLetterWord
    })
    localStorage.setItem("fourLetterWord", JSON.stringify(fourLetterWord));
  }

  async handleLoadPrefixSuffixRoots(){
    let prefixSuffixRoots = await apiCalls.getPalabras("prefixSuffixRoots");

    this.setState({
      prefixSuffixRoots
    })
    localStorage.setItem("prefixSuffixRoots", JSON.stringify(prefixSuffixRoots));
  }

  async handleLoadRandomPrefixSuffixRoot(){
    let prefixSuffixRoots;
    if (this.state.prefixSuffixRoots) {
      prefixSuffixRoots = [...this.state.prefixSuffixRoots];
    } else {
      this.handleLoadPrefixSuffixRoots();
      this.handleLoadRandomPrefixSuffixRoot();
    }
    let prefixSuffixRoot = shuffle.pick(prefixSuffixRoots, [{ 'copy': true }, { 'picks': 1 }]);

    this.setState({
      prefixSuffixRoot
    });
    if (prefixSuffixRoot !== undefined) {
      localStorage.setItem("prefixSuffixRoot", JSON.stringify(prefixSuffixRoot));
    }
  }

  async handleLoadVerbos() {
    let verbos = await apiCalls.getPalabras("verbos");

    this.setState({
      verbos
    });
    localStorage.setItem("verbos", JSON.stringify(verbos));
  }

  async handleLoadRandomVerbo() {
    let verbos;
    if (this.state.verbos) {
      verbos = [...this.state.verbos];
    } else {
      this.handleLoadVerbos();
      this.handleLoadRandomVerbo();
    }
    let verbo = shuffle.pick(verbos, [{ 'copy': true }, { 'picks': 1 }]);

    this.setState({
      verbo
    })
    localStorage.setItem("verbo", JSON.stringify(verbo));
  }
// NOT WORKING
  async loadPalabra(p = "prefixSuffixRoots/", pId = "5a6d123f4f90e60fe36db2d3"){
    // let palabra = await apiCalls.getPalabra(p, pId);
    // let pal = p.slice(0, -1);
    // this.setState({ pal: palabra });
    // console.log(pal, palabra,this.state);
  }

  async handleAddPalabra(p = "verbos/", pObj = { spanish: "asdf" }){
    let newPalabra = await apiCalls.createPalabra(p, pObj);
    let params = p.slice(0, -1);
    switch (params) {
      case "fourLetterWords":
        this.setState({ fourLetterWord: newPalabra });
        break;
      case "prefixSuffixRoots":
        this.setState({ prefixSuffixRoot: newPalabra });
        break;
      case "verbos":
        this.setState({ verbo: newPalabra });
        break;
      default:

    }
    // this.setState({ fourLetterWord: newPalabra });
  }

  async handleUpdatePalabra(p = "verbos/", pObj) {
    let updatedPalabra = await apiCalls.updatePalabra(p, pObj);
    let params = p.slice(0, -1);
    const palabras = this.state[params].map(param => (param._id === updatedPalabra._id) ? { ...param, ...updatedPalabra } : param)
    switch (params) {
      case "fourLetterWords":
        this.setState({ fourLetterWord: updatedPalabra });
        break;
      case "prefixSuffixRoots":
        this.setState({ prefixSuffixRoot: updatedPalabra });
        break;
      case "verbos":
        this.setState({ verbo: updatedPalabra });
        break;
      default:

    }
    // this.setState({
    //   palabras,
    //   params: updatedPalabra
    //  });
     console.log(params, updatedPalabra, palabras);
    // localStorage.setItem("palabras", JSON.stringify(palabras));
  }

  handleSave=(p, pObj) => {
    if (pObj.hasOwnProperty('_id')) {
      this.handleUpdatePalabra(p, pObj);
    } else {
      this.handleAddPalabra(p, pObj);
    }
    this.handleRedirect(p, pObj);
    //route to new palabra after this.addPalabra is finished or form if errors
  }

  handleRedirect=(p, pObj) => {
    <Redirect push to="/" />
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
          onLoadRandomFourLetterWord={ this.handleLoadRandomFourLetterWord }
          onLoadRandomPrefixSuffixRoot={ this.handleLoadRandomPrefixSuffixRoot }
          onLoadRandomVerbo={ this.handleLoadRandomVerbo }
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
          onLoadRandomFourLetterWord={ this.handleLoadRandomFourLetterWord }
          onLoadRandomPrefixSuffixRoot={ this.handleLoadRandomPrefixSuffixRoot }
          onLoadRandomVerbo={ this.handleLoadRandomVerbo }
          />
      </div>
    );
  }
}

export default withRouter(App);
