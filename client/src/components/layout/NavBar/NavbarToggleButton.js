import React, { useState } from 'react';
import { connect } from 'react-redux';
import { changeHamburger } from '../../../actions/cartAndFilter';

import './hamburger.css';

const NavbarToggleButton = props => {
  const { changeHamburger, hamburger } = props;
  const onClickHandler = () => {
    props.click();
    changeHamburger(!hamburger);
  };
  return (
    <div className='nav-burger'>
      {hamburger ? (
        <button
          className='hamburger hamburger--collapse'
          type='button'
          onClick={() => onClickHandler()}
        >
          <span className='hamburger-box'>
            <span className='hamburger-inner'></span>
          </span>
        </button>
      ) : (
        <button
          class='hamburger hamburger--collapse is-active'
          type='button'
          onClick={() => onClickHandler()}
        >
          <span class='hamburger-box'>
            <span class='hamburger-inner'></span>
          </span>
        </button>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  hamburger: state.cartAndFilter.hamburger
});

export default connect(
  mapStateToProps,
  { changeHamburger }
)(NavbarToggleButton);
