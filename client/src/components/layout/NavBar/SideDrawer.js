// import React from 'react';
import './NavBar.css';
import NavbarToggleButton from './NavbarToggleButton';

// const SideDrawer = props => (
//   <nav className='side-drawer'>
//     <ul>
//       <li>
//         <a href='/'>Shop Men's</a>
//       </li>
//       <li>
//         <a href='/'>Shop Women's</a>
//       </li>
//     </ul>
//   </nav>
// );

// export default SideDrawer;

import React from 'react';

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
            <a href='/'>SHOP SNEAKERS</a>
          </li>
          <li>
            <a href='/'>SHOP MEN'S SHIRT</a>
          </li>
          <li>
            <a href='/'>SHOP WOMEN'S SHIRT</a>
          </li>
          <li>
            <a href='/'>Login/Sign Up</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideDrawer;
