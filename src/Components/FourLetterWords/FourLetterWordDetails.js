import React from 'react';

const FourLetterWord = (props) => {
  let { fourLetterWord } = { ...props };

  return (
    <div>
      <h1>Random Four Letter Word: { fourLetterWord.word }</h1>
      <h3>Tier: { fourLetterWord.tier }</h3>
      <h3>Definition: { fourLetterWord.definition }</h3>
    </div>
  )
}

export default FourLetterWord;
