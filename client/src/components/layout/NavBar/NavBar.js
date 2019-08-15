import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavbarToggleButton from './NavbarToggleButton';
import './NavBar.css';

const NavBar = props => {
  // var getCartItems = JSON.parse(localStorage.getItem('itemsArray'));

  return (
    <nav className='navbar_navigation'>
      <div className='logo'>
        <h2>
          <Link to='/'>HypedGoods</Link>
        </h2>
      </div>
      <ul className='nav-links'>
        <li>
          <Link to='/products/shoes'>shop sneakers</Link>
        </li>
        <li>
          <Link to='/products/shirts'>shop shirts</Link>
        </li>
      </ul>
      <ul className='right-nav-links'>
        <li className='account-nav-item'>
          <Link to='/account/login'>
            <i className='fa fa-user fa-lg' />
          </Link>
        </li>
        <li>
          <Link to='/cart'>
            <i className='fa fa-shopping-cart fa-lg' />
            {props.cartItemCount !== 0 && <span> {props.cartItemCount}</span>}
          </Link>
        </li>
      </ul>

      <NavbarToggleButton click={props.drawerClickHandler} />
    </nav>
  );
};

NavBar.propTypes = {
  cartItemCount: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  cartItemCount: state.cart.cartItemCount
});

export default connect(mapStateToProps)(NavBar);
