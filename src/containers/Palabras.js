import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from '../reducers';
import App from './App';

const state = {
  fourLetterWord: {},
  fourLetterWords: [],
  game: {},
  games: [],
  prefixSuffixRoot: {},
  prefixSuffixRoots: [],
  user: {},
  users: [],
  verbo: {},
  verbos: []
}

const store = createStore(reducer, state);

const Palabras = () => (
  <Provider store={ store }>
    <App />
  </Provider>
);

export default Palabras;
