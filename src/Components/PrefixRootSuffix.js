import React from 'react';

const PrefixRootSuffix = (props) => {
  let { prefixRootSuffix } = { ...props };
  prefixRootSuffix.word = "a-, an-";
  return (
    <h1>Random Prefix Root or Suffix: { prefixRootSuffix.word }</h1>
  )
}

export default PrefixRootSuffix;
