import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import CreateFourLetterWord from './../components/Forms/CreateFourLetterWord';
import CreatePrefixSuffixRoot from '../components/Forms/CreatePrefixSuffixRoot';
import CreateVerbo from './../components/Forms/CreateVerbo';
import FindPalabra from '../components/Palabras/FindPalabra';
import DetailsPalabras from '../components/Palabras/DetailsPalabras';
import UpdateFourLetterWord from './../components/Forms/UpdateFourLetterWord';
import UpdatePrefixSuffixRoot from '../components/Forms/UpdatePrefixSuffixRoot';
import UpdateVerbo from './../components/Forms/UpdateVerbo';
import FourLetterWordGame from '../components/Games/FourLetterWordGame';

const routes = [
  {
    path: '/words/new/four-letter-word',
    component: CreateFourLetterWord
  },
  {
    path: '/words/new/prefix-suffix-root',
    component: CreatePrefixSuffixRoot
  },
  {
    path: '/words/new/verbo',
    component: CreateVerbo
  },
  {
    path: '/words/four-letter-word',
    component: DetailsPalabras
  },
  {
    path: '/words/verbo',
    component: DetailsPalabras
  },
  {
    path: '/words/random-palabras',
    component: DetailsPalabras
  },
  {
    path: '/words/prefix-suffix-root',
    component: DetailsPalabras
  },
  {
    path: '/words/find-palabra',
    component: FindPalabra
  },
  {
    path: '/games/four-letter-word',
    component: FourLetterWordGame
  },
  {
    path: '/words/update/four-letter-word',
    component: UpdateFourLetterWord
  },
  {
    path: '/words/update/prefix-suffix-root',
    component: UpdatePrefixSuffixRoot
  },
  {
    path: '/words/update/verbo',
    component: UpdateVerbo
  }
]

class Main extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    console.log(this.props);
  }

  render() {

    return (
      <div className="Main">
        <Switch>
          { routes.map(({ path, component: C, data }) => (
            <Route
              key= { C }
              path={ path }
              render={ (props) => <C { ...props} data={ this.props } /> }
              />
          ))}
        </Switch>
      </div>
    )
  }
}

export default withRouter(Main);
