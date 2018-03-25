import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DetailsPalabras extends Component {
  constructor(props) {
    super(props);
    const { fourLetterWord, prefixSuffixRoot, verbo } = props.data;
    // load next random word
    const { p } = props.location.hash;
    const { onLoadRandomPalabra } = props.data;
    console.log(props);
    console.log(p);
    console.log(onLoadRandomPalabra);
    // console.log(fourLetterWord, prefixSuffixRoot, verbo);
    this.state = {
      fourLetterWord,
      lists: ['Choose A List', 'fourLetterWords/', 'prefixSuffixRoots/', 'verbos/'],
      onLoadRandomPalabra,
      p,
      prefixSuffixRoot,
      verbo
    }
    // this.onLoadRandomPalabra = this.onLoadRandomPalabra.bind(this);
  }
  componentDidMount(){
    let pathname = this.props.location.pathname;
    console.log(pathname);
    console.log(this.props);
  }
  render(){
    const { fourLetterWord, onLoadRandomPalabra, lists, p, prefixSuffixRoot, verbo } = this.state;
    console.log(p);
    console.log(this.state);
    return(
      <div>
        <h1>Random Palabra</h1>
        { p }
        <button
          onClick={ onLoadRandomPalabra }>
          Random Palabra
        </button>
      </div>
    )
  }
}

export default DetailsPalabras;
