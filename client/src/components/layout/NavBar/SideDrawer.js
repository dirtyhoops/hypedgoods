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
      {/* <div className='drawer-toggleButton' onClick={props.drawerClickHandler}>
        <i className='fa fa-window-close' />
      </div> */}
      <div className='nav-links-mobile'>
        <ul onClick={props.drawerClickHandler}>
          <li className='first'>
            <Link to='/products/shoes'>new releases</Link>
          </li>
          <li>
            <Link to='/products/shoes'>brands</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideDrawer;
