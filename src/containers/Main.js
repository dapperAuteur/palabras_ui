import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
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
        <Switch>
          <GameVerbo verbo={ props.verbo } verbos={ props.verbos } />
          <GameStatus />
        </Switch>
      </div>
    )
  }
}

export default withRouter(Main);
