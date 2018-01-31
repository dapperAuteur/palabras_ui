import React, { Component } from 'react';

class Letter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letter: [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
      ]
    }
  }

  render() {
    const { letter } = this.state ;
    const style = {
      height: '200px',
      width: '100px',
      marginLeft: '200px',
      backgroundColor: 'blue'
    }
    const spanStyle = {
      fontSize: '100px',
      // fontFamily: "Rubik Mono One, sans-serif",
      // fontFamily: "Graduate, cursive",
      fontFamily: "Patua One, cursive",
    }
    return (
      <div style={ style }>
        <span style={ spanStyle }>{ letter[0] }</span>
      </div>
    )
  }
}

export default Letter;
