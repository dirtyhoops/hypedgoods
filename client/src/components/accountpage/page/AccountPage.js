import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../../actions/auth';
import { Link } from 'react-router-dom';

import Spinner from '../../layout/Spinner/Spinner';
import AddAddressForm from '../../forms/AddAddressForm/AddAddressForm';

import './AccountPage.css';

// @Todo:
// 1. make the admin button looks better
// 2. add option to add shoes and shirts (1 button each for shoes and shirt)
const AccountPage = ({
  auth: { loading, user, isAdmin },
  logout,
  admin_check
}) => {
  const [toggleAddress, setToggleAddress] = useState(false);

  const onClickToggle = () => {
    setToggleAddress(!toggleAddress);
  };

  return (
    <div className='wrapper-account'>
      <div className='account-header'>
        <h1>my account</h1>
        <div className='account-header-buttons'>
          {isAdmin && (
            <Link to='/products/add/shoes'>
              <button className='btn btn-outline-success'>
                Admin ADD Shoes
              </button>
            </Link>
          )}
          <Link to='/'>
            <button
              onClick={logout}
              className='btn btn-outline-dark logout-button'
            >
              LOGOUT
            </button>
          </Link>
        </div>
      </div>
      {user ? (
        <>
          <div className='account-details'>
            <h4>ACCOUNT INFORMATION</h4>
            <p className='capitalize'>
              {user.firstname} {user.lastname}
            </p>
            <p>{user.email}</p>
            {user.address ? (
              <>
                <p className='capitalize'>
                  {user.address.street}, {user.address.city},{' '}
                  {user.address.state}. {user.address.zipcode}
                </p>
                <button className='btn btn-primary btn-sm'>edit address</button>
              </>
            ) : !toggleAddress ? (
              <button
                onClick={() => onClickToggle()}
                className='btn btn-primary btn-sm add-address-button'
              >
                add address
              </button>
            ) : (
              <button
                onClick={() => onClickToggle()}
                className='btn btn-secondary btn-sm cancel-address-button'
              >
                cancel
              </button>
            )}
            {toggleAddress ? <AddAddressForm /> : null}
          </div>

          <div className='recent-orders'>
            <h4>RECENT ORDERS</h4>
            <p>You haven't placed an order</p>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

AccountPage.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(AccountPage);
