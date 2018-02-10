import React from 'react';

const DetailsPrefixSuffixRoot = (props) => {
  // let { prefixSuffixRoot } = { ...props };
  const prefixSuffixRoot = props.data.props.prefixSuffixRoot;

  return (
    <div>
      <h1>Random Prefix Root or Suffix: { prefixSuffixRoot.word }</h1>
      <h3>Type: { prefixSuffixRoot.type }</h3>
      <h3>Meaning: { prefixSuffixRoot.meaning }</h3>
      <h3>Examples: { prefixSuffixRoot.examples }</h3>
    </div>
  )
}

export default DetailsPrefixSuffixRoot;
