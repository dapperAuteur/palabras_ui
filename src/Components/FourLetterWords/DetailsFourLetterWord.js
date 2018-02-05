import React from 'react';
import { connect } from 'react-redux';

const DetailsFourLetterWord = (props) => {
  let { fourLetterWord } = { ...props };

  return (
    <div>
      <h1>Random Four Letter Word: { fourLetterWord.word }</h1>
      <h3>Tier: { fourLetterWord.tier }</h3>
      <h3>Definition: { fourLetterWord.definition }</h3>
    </div>
  )
}

const mapStateToProps = state => ({
  fourLetterWord: state.fourLetterWord
})

export default connect(mapStateToProps, null)(DetailsFourLetterWord);
