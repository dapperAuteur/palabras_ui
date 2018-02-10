import React from 'react';

const DetailsFourLetterWord = (props) => {
  // let { fourLetterWord } = { ...props };
  const fourLetterWord = props.data.props.fourLetterWord;

  return (
    <div>
      <h1>Random Four Letter Word: { fourLetterWord.word }</h1>
      <h3>Tier: { fourLetterWord.tier }</h3>
      <h3>Definition: { fourLetterWord.definition }</h3>
    </div>
  )
}

export default DetailsFourLetterWord;
