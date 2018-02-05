import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authCalls from './../actions/authApi';
import * as apiCalls from './../actions/api';
import AuthForm from './../components/Forms/AuthForm';
import DetailsFourLetterWord from './../components/FourLetterWords/DetailsFourLetterWord';

class Main extends Component {
  constructor(props) {
    super(props);
    // this.handleAuth = this.handleAuth.bind(this);
    // this.handleLogOut = this.handleLogOut.bind(this);
  }

  componentDidMount(){
    this.props.loadRandomPalabras();
    this.props.loadUser();
    console.log(this.props);
  }

  async handleAuth(user) {
    console.log(user);
    let currentUser;
    if (user.username !== "") {
      console.log(user.username);
      currentUser = await authCalls.signUp(user);
      console.log(currentUser);
    } else {
      console.log("signIn");
      currentUser = await authCalls.signIn(user);
      console.log(currentUser);
    }
    this.setState({
      user: currentUser
    })
  }

  render() {
    const {
      fourLetterWord,
      onAuth,
      user
    } = this.props;
    return (
      <div>
        <AuthForm className="hero" onAuth={ this.handleAuth } />
        <DetailsFourLetterWord fourLetterWord={ fourLetterWord } />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  fourLetterWord: state.fourLetterWord,
  user: state.user
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadRandomPalabras() { return dispatch(apiCalls.fetchRandomPalabras()); }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
