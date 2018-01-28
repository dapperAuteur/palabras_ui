import React, { Component } from 'react';
import FormFourLetterWord from './FourLetterWords/FormFourLetterWord';
import FormPrefixSuffixRoot from './PrefixSuffixRoots/FormPrefixSuffixRoot';
import FormVerbo from './Verbos/FormVerbo';

const Forms = (props) => (
  <div>
    <FormFourLetterWord onSave={ this.handleSave } />
    <FormPrefixSuffixRoot onSave={ this.handleSave } />
    <FormVerbo onSave={ this.handleSave } />
  </div>
)

export default Forms;
