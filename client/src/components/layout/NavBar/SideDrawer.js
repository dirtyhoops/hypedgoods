import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeHamburger } from '../../../actions/cartAndFilter';

import './NavBar.css';

const SideDrawer = props => {
  const { hamburger, changeHamburger } = props;
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }

  const onClickHandler = () => {
    props.drawerClickHandler();
    changeHamburger(!hamburger);
  };

  return (
    <div className={drawerClasses}>
      {/* <div className='drawer-toggleButton' onClick={props.drawerClickHandler}>
        <i className='fa fa-window-close' />
      </div> */}
      <div className='nav-links-mobile'>
        <ul onClick={() => onClickHandler()}>
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

const mapStateToProps = state => ({
  hamburger: state.cartAndFilter.hamburger
});

export default connect(
  mapStateToProps,
  { changeHamburger }
)(SideDrawer);
