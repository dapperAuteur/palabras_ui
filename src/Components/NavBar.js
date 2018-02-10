import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  const { user, onLogout, onShowLoginForm, onShowSignUpForm } = props;
  console.log(props);
  console.log(user);
  console.log(onLogout);

  return (
    <nav className='navbar navbar-default'>
      <div className='container-fluid'>
        <div className='navbar-header'>
            <span><Link
                    to={ '/' }>
                    Palabras Games
                  </Link>
            </span>
            <span className="games">
              <a id="fourLetterWords"
                 className="menu-item"
                 >
                 <Link
                   to={ '/words/four-letter-word' }>
                   Four Letter Word
                 </Link>
              </a>
              <a id="prefixSuffixRoots"
                 className="menu-item"
                 >
                 <Link
                   to={ '/words/prefix-suffix-root' }>
                   Prefix Suffix Root
                 </Link>
              </a>
              <a id="Verbos"
                 className="menu-item"
                 >
                 <Link to={ '/words/verbo' }>
                   Verbo
                 </Link>
              </a>
            </span>
        </div>
        { user.token ?
          <ul className='nav navbar-nav navbar-right'>
            <li><a>{ user.username }</a></li>
            <li><a><img src={ user.profileImageUrl } alt='user'/></a></li>
            <li onClick={ onLogout }><button>Log out</button></li>
          </ul> :
          <ul className='nav navbar-nav navbar-right'>
            <li onClick={ onShowSignUpForm }><button className='btn  btn-default'>Sign up</button></li>
            <li onClick={ onShowLoginForm }><button className='btn  btn-default'>Sign in</button></li>
          </ul>
        }
      </div>
    </nav>
  );
}

export default NavBar;
