import React from 'react';
import './NavBar.css';

const NavBar = (props) => {
  const { user, onLogout, profileImageUrl } = props;
  console.log(props);
  console.log(user);

  return (
    <nav className='navbar navbar-default'>
      <div className='container-fluid'>
        <div className='navbar-header'>
            <span>Palabras</span>
        </div>
        { user ?
          <ul className='nav navbar-nav navbar-right'>
            <li><a>{ user.username }</a></li>
            <li><a><img src={ profileImageUrl } alt='user'/></a></li>
          </ul> :
          <ul className='nav navbar-nav navbar-right'>
            <li><a>Sign up</a></li>
            <li><a>Sign in</a></li>
          </ul>
        }
      </div>
    </nav>
  );

  // return (
  //   <nav className='navbar navbar-default'>
  //     <div className='container-fluid'>
  //       <div className='navbar-header'>
  //         // <Link to='/' className='navbar-brand'>
  //           // <img src={ Logo } alt='Palabras Home'/>
  //           <span>Palabras</span>
  //         // </Link>
  //       </div>
  //       { currentUser ?
  //         <ul className='nav navbar-nav navbar-right'>
  //           <li><a><img src={ profileImageUrl } alt='user'/></a></li>
  //           <li><Link to={ `/users/${currentUser.userId}/games/new` }>New Game</Link></li>
  //           <li><Link to='/signout' onClick={ onLogout }>Log out</Link></li>
  //         </ul> :
  //         <ul className='nav navbar-nav navbar-right'>
  //           <li><Link to='/signup'>Sign up</Link></li>
  //           <li><Link to='/signin'>Sign in</Link></li>
  //         </ul>
  //       }
  //     </div>
  //   </nav>
  // );
}

export default NavBar;
