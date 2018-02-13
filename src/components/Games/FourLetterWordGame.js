import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Letters from './Letters';
import './Game.css';

class FourLetterWordGame extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="game">
        <Letters />
      </div>
    )
  }
}

export default FourLetterWordGame;
