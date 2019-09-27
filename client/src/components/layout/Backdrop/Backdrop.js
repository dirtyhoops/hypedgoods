import React from 'react';
import { connect } from 'react-redux';
import { changeHamburger } from '../../../actions/cartAndFilter';

import './Backdrop.css';

const Backdrop = props => {
  const { hamburger, changeHamburger } = props;

  const onClickHandler = () => {
    props.click();
    changeHamburger(!hamburger);
  };

  return <div className='backdrop' onClick={() => onClickHandler()} />;
};

const mapStateToProps = state => ({
  hamburger: state.cartAndFilter.hamburger
});

export default connect(
  mapStateToProps,
  { changeHamburger }
)(Backdrop);
