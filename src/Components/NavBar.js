import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  const {
    user,
    onCreateGame,
    onLoadRandomPalabra,
    onLogout,
    onShowLoginForm,
    onShowSignUpForm
  } = props;

  return (
    <nav className='navbar navbar-default'>
      <div className='container-fluid'>
        <div id="palabras-dropdown1">
          <Link
            to={ '/' }
            className="btn btn-default">
            Palabras
          </Link>
          <div id="palabras-content2">
            <Link
              to={ '/words/find-palabra'}
              className="btn btn-default">
              Find Palabra
            </Link>
            <Link
              to={{
                pathname: '/games/four-letter-word',
                hash: '#fourLetterWords',
                state: { p: 'fourLetterWords/' }
              }}
              onClick={ onCreateGame }
              className="btn btn-default"
              >
              FourLetterWordGame
            </Link>
          </div>
        </div>
        <div id="palabras-dropdown3">
          <Link
            to={ '/' }
            className="btn btn-default">
            Word Lists
          </Link>
          <div id="palabras-content4">
            <Link
             to={{
               pathname: '/words/four-letter-word',
               hash: '#fourLetterWords',
               state: { p: 'fourLetterWords/' }
             }}
             className="menu-item btn btn-default">
             Four Letter Word
            </Link>
            <Link
             to={{
               pathname: '/words/prefix-suffix-root',
               hash: '#prefixSuffixRoots',
               state: { p: 'prefixSuffixRoots/' }
             }}
             className="menu-item btn btn-default">
             Prefix Suffix Root
           </Link>
           <Link
             to={{
               pathname: '/words/verbo',
               hash: '#verbos',
               state: { p: 'verbos/' }
             }}
             className="menu-item btn btn-default">
             Verbo
           </Link>
          </div>
        </div>
        <div className="user-token">
          { user.token ?
            <ul className='nav navbar-nav navbar-right'>
              <li><button className='btn  btn-default'>{ user.username }</button></li>
              <li><button className='btn  btn-default'><img src={ user.profileImageUrl } alt='user'/></button></li>
              <li onClick={ onLogout }><button>Log out</button></li>
            </ul> :
            <ul className='nav navbar-nav navbar-right'>
              <li><button onClick={ onShowSignUpForm } className='btn  btn-default'>Sign up</button></li>
              <li><button onClick={ onShowLoginForm } className='btn  btn-default'>Sign in</button></li>
            </ul>
          }
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
