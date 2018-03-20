import React from 'react';
import { Link } from 'react-router-dom';

const DetailsFourLetterWord = (props) => {
  const fourLetterWord = props.data.props.fourLetterWord;
  const onDelete = props.data.onDelete;
  const onLoadRandomFourLetterWord = props.data.onLoadRandomFourLetterWord;
  console.log(fourLetterWord, props);

  return (
    <div>
      <h1>Details of Random Four Letter Word: { fourLetterWord.word }</h1>
      <h3>Tier: { fourLetterWord.tier }</h3>
      <h3>Definition: { fourLetterWord.definition }</h3>
        <button
          onClick={ onLoadRandomFourLetterWord }
          className="btn btn-default">
          Next Four Letter Word
        </button>
        <button
          onClick={ onDelete }
          className="btn btn-danger">
          Delete Four Letter Word
        </button>
        { fourLetterWord.word === '' ?
          null
          :
          <Link
            to={ '/words/update/four-letter-word' }
            id="UpdateFourLetterWord"
            className="btn btn-default">
            EDIT
          </Link>
        }
    </div>
  )
}

export default DetailsFourLetterWord;
