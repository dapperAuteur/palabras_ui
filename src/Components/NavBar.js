import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  const { user, onLogout, onShowLoginForm, onShowSignUpForm } = props;

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
            </span>
            <span className="random-word">
              <button className='btn  btn-default'>Words</button>
              <Link
               to={ '/words/four-letter-word' }
               id="fourLetterWords"
               className="menu-item">
               Four Letter Word
              </Link>
              <Link
               to={ '/words/prefix-suffix-root' }
               id="prefixSuffixRoots"
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
