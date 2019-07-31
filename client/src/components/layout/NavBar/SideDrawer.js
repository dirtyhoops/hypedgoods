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
        <i className='fa fa-window-close' />
      </div>
      <div className='nav-links-mobile'>
        <ul>
          <li className='first'>
            <Link to='/products/shoes'>shop sneakers</Link>
          </li>
          <li>
            <Link to='/products/shirts/men'>shop men's shirts</Link>
          </li>
          <li>
            <Link to='/products/shirts/women'>shop women's shirts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideDrawer;
