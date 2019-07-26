import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const SideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }

  return (
    <div className={drawerClasses}>
      <div className='drawer-toggleButton' onClick={props.drawerClickHandler}>
        <i class='fa fa-window-close' />
      </div>
      <div className='nav-links-mobile'>
        <ul>
          <li className='first'>
            <Link to='/sneakers'>shop sneakers</Link>
          </li>
          <li>
            <Link to='/shirts/men'>shop men's shirt</Link>
          </li>
          <li>
            <Link to='/shirts/women'>shop women's shirt</Link>
          </li>
          <li>
            <a href='/account/login'>Login/Sign Up</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideDrawer;
