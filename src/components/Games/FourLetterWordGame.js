import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Game.css';

class FourLetterWordGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      p: 'games/',
      game: {},
      letter0: '',
      letter1: '',
      letter2: '',
      letter3: '',
      letters: [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
      ],
      // attempts,
      // bulls,
      // cows,
      // guesses,
      // userId,
      // score,
      // winning_word,
      // won,
      // word_to_consider_for_library
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){

  }
  handleSubmit(e){
    e.preventDefault();
  }

  render() {
    const { letter0, letter1,letter2, letter3, letters } = this.state;
    // const { letters } = this.props;

    return (
      <div className='word-form-container'>
        <form className='form-letters' onSubmit={ this.handleSubmit }>
          <span className='form-letter'>
            <label htmlFor='letter0'>0</label>
            <select
              id='letter0'
              className='letterSpan'
              key='letter0'
              name='letter0'
              value={ letter0 }
              onChange={ this.handleChange }>
              { letters.map((( letter, i ) => (
                <option key={ i } value={ letter }>{ letter }</option>
              )))}
            </select>
          </span>
          <span className='form-letter'>
            <label htmlFor='letter1'>1</label>
            <select
              id='letter1'
              className='letterSpan'
              key='letter1'
              name='letter1'
              value={ letter1 }
              onChange={ this.handleChange }>
              { letters.map((( letter, i ) => (
                <option key={ i } value={ letter }>{ letter }</option>
              )))}
            </select>
          </span>
          <span className='form-letter'>
            <label htmlFor='letter2'>2</label>
            <select
              id='letter2'
              className='letterSpan'
              key='letter2'
              name='letter2'
              value={ letter2 }
              onChange={ this.handleChange }>
              { letters.map((( letter, i ) => (
                <option key={ i } value={ letter }>{ letter }</option>
              )))}
            </select>
          </span>
          <span className='form-letter'>
            <label htmlFor='letter3'>3</label>
            <select
              id='letter3'
              className='letterSpan'
              key='letter3'
              name='letter3'
              value={ letter3 }
              onChange={ this.handleChange }>
              { letters.map((( letter, i ) => (
                <option key={ i } value={ letter }>{ letter }</option>
              )))}
            </select>
          </span>
          <button
            type="submit"
            className="buttons"
            style={{ alignSelf: 'flex-end', marginRight: 0 }}
          >
            SUBMIT
          </button>
        </form>
      </div>
    )
  }
}

FourLetterWordGame.propTypes = {
  _id: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
  game: PropTypes.shape({
    attempts: PropTypes.number,
    bulls: PropTypes.number,
    cows: PropTypes.number,
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired,
    userId: PropTypes.string.isRequired,
    score: PropTypes.number,
    winning_word: PropTypes.shape({
      0: PropTypes.string.isRequired,
      1: PropTypes.string.isRequired,
      2: PropTypes.string.isRequired,
      3: PropTypes.string.isRequired
    }),
    won: PropTypes.bool,
    word_to_consider_for_library: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  letter0: PropTypes.string.isRequired,
  letter1: PropTypes.string.isRequired,
  letter2: PropTypes.string.isRequired,
  letter3: PropTypes.string.isRequired,
  letters: PropTypes.arrayOf(PropTypes.string).isRequired,
  // attempts: PropTypes.number,
  // bulls: PropTypes.number,
  // cows: PropTypes.number,
  // guesses: PropTypes.arrayOf(PropTypes.string).isRequired,
  // userId: PropTypes.string.isRequired,
  // score: PropTypes.number,
  // winning_word: PropTypes.shape({
  //   0: PropTypes.string.isRequired,
  //   1: PropTypes.string.isRequired,
  //   2: PropTypes.string.isRequired,
  //   3: PropTypes.string.isRequired
  // }),
  // won: PropTypes.bool,
  // word_to_consider_for_library: PropTypes.arrayOf(PropTypes.string).isRequired
}

FourLetterWordGame.defaultProps = {
  onSave() {},
  _id: '',
  p: 'games/',
  game: PropTypes.shape({
    attempts: 0,
    bulls: 0,
    cows: 0,
    guesses: [],
    userId: '',
    score: 0,
    winning_word: {},
    won: false,
    word_to_consider_for_library: []
  }),
  letter0: 'F',
  letter1: 'A',
  letter2: 'R',
  letter3: 'T',
  letters: [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ],
  // attempts: 0,
  // bulls: 0,
  // cows: 0,
  // guesses: [],
  // userId: '',
  // score: 0,
  // winning_word: {},
  // won: false,
  // word_to_consider_for_library: []
}

export default FourLetterWordGame;
