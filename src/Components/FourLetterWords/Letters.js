import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Letters extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   letter: '',
    //   letters: [
    //     "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    //   ]
    // }
    this.handleLetter = this.handleLetter.bind(this);
  }
  handleLetter(){

  }

  render() {
    // const { letter, letters } = this.state ;
    const { letters } = this.props;
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
        <span style={ spanStyle }>{ letters }</span>
      </div>
    )
  }
}

Letters.propTypes = {
  letters: PropTypes.array.isRequired
}

Letters.defaultProps = {
  letters: [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ]
}

export default Letters;
