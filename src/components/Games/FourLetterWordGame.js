import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Letter from '../FourLetterWords/Letter';
import './Game.css';

class FourLetterWordGame extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="game">
        <Letter />
        <Letter />
        <Letter />
        <Letter />
      </div>
    )
  }
}

export default FourLetterWordGame;
