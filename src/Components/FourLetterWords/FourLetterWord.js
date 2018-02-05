import React from 'react';
import { connect } from 'react-redux';

const FourLetterWord = (props) => {
  let { fourLetterWord } = { ...props };

  return (
    <h1>Random Four Letter Word: { fourLetterWord.word }</h1>
  )
}

const mapStateToProps = state => {
  fourLetterWord: state.fourLetterWord
}

export default connect(mapStateToProps, null)(FourLetterWord);
