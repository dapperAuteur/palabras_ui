import React, { Component } from 'react';
import CreateFourLetterWord from './CreateFourLetterWord';
import CreatePrefixSuffixRoot from './CreatePrefixSuffixRoot';
import CreateVerbo from './CreateVerbo';

const Forms = (props) => (
  <div>
    <CreateFourLetterWord onSave={ this.handleSave } />
    <CreatePrefixSuffixRoot onSave={ this.handleSave } />
    <CreateVerbo onSave={ this.handleSave } />
  </div>
)

export default Forms;
