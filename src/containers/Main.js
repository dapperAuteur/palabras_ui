import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import DetailsFourLetterWord from './../components/FourLetterWords/DetailsFourLetterWord';
import DetailsVerbo from './../components/Verbos/DetailsVerbo';
import DetailsPrefixSuffixRoot from '../components/PrefixSuffixRoots/DetailsPrefixSuffixRoot';

const routes = [
  {
    path: '/words/four-letter-word',
    component: DetailsFourLetterWord,
    data: this.props
  },
  {
    path: '/words/verbo',
    component: DetailsVerbo,
    data: this.props
  },
  {
    path: '/words/prefix-suffix-root',
    component: DetailsPrefixSuffixRoot,
    data: this.props
  }
]

class Main extends Component {
  
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
