import React from 'react';
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
            <span>Palabras</span>
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
