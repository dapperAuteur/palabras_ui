import React from 'react';

const Palabra = (props) => {
  let { palabra } = { ...props };
  palabra.spanish = "ayudar";
  return (
    <h1>Random Spanish Verb: { palabra.spanish }</h1>
  )
}

export default Palabra;
