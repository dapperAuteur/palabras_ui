import React from 'react';
import { Link } from 'react-router-dom';

const DetailsPrefixSuffixRoot = (props) => {
  const prefixSuffixRoot = props.data.props.prefixSuffixRoot;
  const onLoadRandomPrefixSuffixRoots = props.data.onLoadRandomPrefixSuffixRoots;

  return (
    <div>
      <h1>Details of Random Prefix Root or Suffix: { prefixSuffixRoot.word }</h1>
      <h3>Type: { prefixSuffixRoot.type }</h3>
      <h3>Meaning: { prefixSuffixRoot.meaning }</h3>
      <h3>Examples: { prefixSuffixRoot.examples }</h3>
        <button
          onClick={ onLoadRandomPrefixSuffixRoots }
          className="btn btn-default">
          Next Prefix Suffix or Root
        </button>
        { prefixSuffixRoot.word === '' ?
          null
          :
          <Link
            to={ '/words/update/prefix-suffix-root' }
            id="UpdatePrefixSuffixRoot"
            className="btn btn-default">
            EDIT
          </Link>
        }
    </div>
  )
}

export default DetailsPrefixSuffixRoot;
