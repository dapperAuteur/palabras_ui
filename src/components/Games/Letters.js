import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Letter.css';

class Letters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letter0: '',
      letter1: '',
      letter2: '',
      letter3: '',
      letters: [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
      ]
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleLetter = this.handleLetter.bind(this);
  }
  handleChange(e){
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }
  handleLetter(){

  }

  render() {
    const { letter0, letter1,letter2, letter3, letters } = this.state;
    // const { letters } = this.props;

    return (
      <div className='word-form-container'>
        <form className='form-letters' onSubmit={ this.handleSubmit }>
          <div className='form-letter'>
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
          </div>
          <div className='form-letter'>
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
          </div>
          <div className='form-letter'>
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
          </div>
          <div className='form-letter'>
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
          </div>
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

Letters.propTypes = {
  letter0: PropTypes.string.isRequired,
  letter1: PropTypes.string.isRequired,
  letter2: PropTypes.string.isRequired,
  letter3: PropTypes.string.isRequired,
  letters: PropTypes.array.isRequired
}

Letters.defaultProps = {
  letter0: 'F',
  letter1: 'A',
  letter2: 'R',
  letter3: 'T',
  letters: [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ]
}

export default Letters;
