import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
  // @Todo
  // 1. check if the user is logged in, if logged in, display Account Icon for /customer/account and 'Logout', if not logged in, display 'register' 'login'
  return (
    <nav>
      <div className='logo'>
        <h2>
          <Link to='/'>HypedGoods</Link>
        </h2>
      </div>
      <ul className='nav-links'>
        <li>
          <Link to='/sneakers'>shop sneakers</Link>
        </li>
        <li>
          <Link to='/shirts'>shop shirts</Link>
        </li>
      </ul>
      <ul className='right-nav-links'>
        <li>
          <Link to='/account/login'>
            <i className='fa fa-user fa-lg' />
          </Link>
        </li>
        <li>
          <Link to='/cart'>
            <i className='fa fa-shopping-cart fa-lg' />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
