import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Letter extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   letter: '',
    //   letters: [
    //     "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    //   ]
    // }
    this.handleLetterUp1 = this.handleLetterUp1.bind(this);
  }
  handleLetterUp1(){

  }

  render() {
    // const { letter, letters } = this.state ;
    const { letter, letters } = this.props;
    const style = {
      display: 'flex',
      justifyContent: 'space-around',
      height: '100px',
      width: '100px',
      marginLeft: '200px',
      backgroundColor: 'lightGrey',
    }
    const spanStyle = {
      alignSelf: 'center',
      fontSize: '100px',
      // fontFamily: "Rubik Mono One, sans-serif",
      // fontFamily: "Graduate, cursive",
      fontFamily: "Patua One, cursive",
    }
    return (
      <div style={ style }>
        <span style={ spanStyle }>{ letter }</span>
      </div>
    )
  }
}

Letter.propTypes = {
  letter: PropTypes.string.isRequired,
  letters: PropTypes.array.isRequired
}

Letter.defaultProps = {
  letter: "A",
  letters: [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ]
}

export default Letter;