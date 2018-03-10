import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  const {
    user,
    onCreateGame,
    onLoadRandomFourLetterWord,
    onLoadRandomPrefixSuffixRoot,
    onLoadRandomVerbo,
    onLogout,
    onShowLoginForm,
    onShowSignUpForm
  } = props;

  return (
    <nav className='navbar navbar-default'>
      <div className='container-fluid'>
        <div className='navbar-header'>
            <span className="words">
              <Link
                to={ '/' }
                className="">
                Palabras
              </Link>
              <button
                onClick={ onCreateGame }
                className='btn btn-default'
                >
                New Game
              </button>
            </span>
            <span className="random-word">
              <button className='btn  btn-default'>Words</button>
              <Link
               to={ '/words/four-letter-word' }
               id="FourLetterWords"
               className="menu-item">
               Four Letter Word
              </Link>
              <Link
               to={ '/words/prefix-suffix-root' }
               innerRef={ onLoadRandomPrefixSuffixRoot }
               id="PrefixSuffixRoots"
               className="menu-item">
               Prefix Suffix Root
             </Link>
             <Link
               to={ '/words/verbo' }
               id="Verbos"
               className="menu-item">
               Verbo
             </Link>
            </span>
            <span className="create-word">
              <button className='btn  btn-default'>Create</button>
              <Link
               to={ '/words/new/four-letter-word' }
               id="newFourLetterWords"
               className="menu-item">
               Create Four Letter Word
              </Link>
              <Link
               to={ '/words/new/prefix-suffix-root' }
               id="newPrefixSuffixRoots"
               className="menu-item">
               Create Prefix Suffix Root
             </Link>
             <Link
               to={ '/words/new/verbo' }
               id="newVerbos"
               className="menu-item">
               Create Verbo
             </Link>
            </span>
            <span className="games">
              <button className='btn  btn-default'>Games</button>
              <Link
                to={ '/games/four-letter-words' }
                id="fourLetterWordGames"
                className="menu-item">
                Four Letter Word Games
              </Link>
              <Link
                to={ 'games/prefix-suffix-roots' }
                id="prefixSuffixRootGames"
                className="menu-item">
                Prefix Suffix Root Games
              </Link>
              <Link
                to={ 'games/verbos' }
                id="verboGames"
                className="menu-item">
                Verbo Games
              </Link>
            </span>
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
