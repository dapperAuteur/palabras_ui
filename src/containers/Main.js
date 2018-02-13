import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import CreateFourLetterWord from './../components/Forms/CreateFourLetterWord';
import CreatePrefixSuffixRoot from '../components/Forms/CreatePrefixSuffixRoot';
import CreateVerbo from './../components/Forms/CreateVerbo';
import DetailsFourLetterWord from './../components/FourLetterWords/DetailsFourLetterWord';
import DetailsPrefixSuffixRoot from '../components/PrefixSuffixRoots/DetailsPrefixSuffixRoot';
import DetailsVerbo from './../components/Verbos/DetailsVerbo';
import UpdateFourLetterWord from './../components/Forms/UpdateFourLetterWord';
import UpdatePrefixSuffixRoot from '../components/Forms/UpdatePrefixSuffixRoot';
import UpdateVerbo from './../components/Forms/UpdateVerbo';

const routes = [
  {
    path: '/words/new/four-letter-word',
    component: CreateFourLetterWord,
    data: this.props
  },
  {
    path: '/words/new/prefix-suffix-root',
    component: CreatePrefixSuffixRoot,
    data: this.props
  },
  {
    path: '/words/new/verbo',
    component: CreateVerbo,
    data: this.props
  },
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
  },
  {
    path: '/words/update/four-letter-word',
    component: UpdateFourLetterWord,
    data: this.props
  },
  {
    path: '/words/update/prefix-suffix-root',
    component: UpdatePrefixSuffixRoot,
    data: this.props
  },
  {
    path: '/words/update/verbo',
    component: UpdateVerbo,
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
