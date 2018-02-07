import React, { Component } from 'react';
import shuffle from 'shuffle-array';
import GameVerbo from './../components/Verbos/GameVerbo';
import GameStatus from './../components/Games/GameStatus';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    console.log(this.props);
  }

  render() {
    const {
      props
    } = this.props;
    console.log(props);

    return (
      <div className="Main">
        <GameVerbo verbo={ props.verbo } verbos={ props.verbos } />
        <GameStatus />
      </div>
    )
  }
}

export default Main;
