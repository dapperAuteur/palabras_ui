import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import FourLetterWordGame from './../components/Games/FourLetterWordGame';
import GameVerbo from './../components/Verbos/GameVerbo';
import GameStatus from './../components/Games/GameStatus';

const routes = [
  {
    path: '/games/four-letter-words',
    component: FourLetterWordGame
  },
  {
    path: '/games/verbos',
    component: GameVerbo,
    data: this.props
  }
]

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
    console.log(this.props);

    return (
      <div className="Main">
        <Switch>
          { routes.map(({ path, component: C, data }) => (
            <Route
              path={ path }
              render={ (props) => <C { ...props} data={ this.props } /> }
              />
          ))}


          <GameStatus />
        </Switch>
      </div>
    )
  }
}

export default withRouter(Main);
