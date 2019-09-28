import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout, addAddress } from '../../../actions/auth';
import { Link } from 'react-router-dom';

import Spinner from '../../layout/Spinner/Spinner';
import AddAddressForm from '../../forms/AddressForm/AddAddressForm';
import EditAddressForm from '../../forms/AddressForm/EditAddressForm';

import './AccountPage.css';

const AccountPage = ({
  auth: { user, isAdmin, isAddingAddressSuccess },
  logout,
  addAddress
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
            <>
              <Link to='/products/add/shoes'>
                <button className='btn btn-outline-success'>
                  Admin ADD Shoes
                </button>
              </Link>
              <Link to='/orders/admin'>
                <button className='btn btn-outline-primary'>
                  Admin ALL Orders
                </button>
              </Link>
            </>
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
                  {user.address.street}{' '}
                  {user.address.apartmentunit
                    ? user.address.apartmentunit
                    : null}
                  , {user.address.city}, {user.address.state}.{' '}
                  {user.address.zipcode}
                </p>
              </>
            ) : null}
            {/* the buttons that shows depends on the condition, if the user have an address, 
              it shows the 'edit button', otherwise it shows 'add button', if the form is 
              displayed, it shows 'cancel' button */}
            {user.address ? (
              !toggleAddress ? (
                <button
                  onClick={() => onClickToggle()}
                  className='btn btn-primary btn-sm edit-address-button'
                >
                  edit address
                </button>
              ) : (
                <button
                  onClick={() => onClickToggle()}
                  className='btn btn-secondary btn-sm cancel-address-button'
                >
                  cancel
                </button>
              )
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
            {/* display the form if the toggle is true, if user have an address, it
            shows the edit form, otherwise it shows add form */}
            {toggleAddress ? (
              user.address ? (
                <EditAddressForm
                  address={user.address}
                  addAddress={addAddress}
                  onClickToggle={onClickToggle}
                />
              ) : (
                <AddAddressForm
                  addAddress={addAddress}
                  onClickToggle={onClickToggle}
                />
              )
            ) : null}
          </div>

          {/* {user.address ? (
              
              <>
                <p className='capitalize'>
                  {user.address.street}, {user.address.city},{' '}
                  {user.address.state}. {user.address.zipcode}
                </p>
                {!toggleAddress ? (
                  <button
                    onClick={() => onClickToggle()}
                    className='btn btn-primary btn-sm'
                  >
                    edit address
                  </button>
                ) : (
                  <button
                    onClick={() => onClickToggle()}
                    className='btn btn-secondary btn-sm cancel-address-button'
                  >
                    cancel
                  </button>
                )}
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
            {toggleAddress ? (
              user.address ? (
                <EditAddressForm
                  address={user.address}
                  addAddress={addAddress}
                  isAddingAddressSuccess={isAddingAddressSuccess}
                />
              ) : (
                <AddAddressForm
                  addAddress={addAddress}
                  isAddingAddressSuccess={isAddingAddressSuccess}
                />
              )
            ) : null}
          </div> */}

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
  addAddress: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout, addAddress }
)(AccountPage);
