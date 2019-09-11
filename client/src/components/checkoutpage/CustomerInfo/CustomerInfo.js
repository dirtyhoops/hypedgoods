import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ShippingAddressForm from '../ShippingAddressForm/ShippingAddressForm';
import BillingAddressForm from '../BillingAddressForm/BillingAddressForm';
import ShippingOptions from '../ShippingOptions/ShippingOptions';
import './CustomerInfo.css';

const CustomerInfo = props => {
  const {
    auth,
    checkout,
    saveShippingAddress,
    saveCustomerInfo,
    changeForm
  } = props;

  // @Todo:
  // 2. have a toggler to display/hide the right component (billing and shipping)

  // 1. just gotta have a state that holds the main state for shipping address, billing addres, and card info, and item summary
  // 2. make a function where it passes all the shipping, address, and item summary to the checkoutpage
  return (
    <div className='customerinfo-container'>
      <div className='header-customerinfo'>
        <h1>customer information</h1>
      </div>
      <div className='checkout-crumbs'>
        <p>cart > information > shipping > payment</p>
      </div>
      {checkout.currentForm === 'shippingform' && (
        <ShippingAddressForm
          auth={auth}
          saveShippingAddress={saveShippingAddress}
          saveCustomerInfo={saveCustomerInfo}
          checkout={checkout}
        />
      )}
      {checkout.currentForm === 'shippingoption' && (
        <ShippingOptions checkout={checkout} changeForm={changeForm} />
      )}
      {checkout.currentForm === 'billingform' && (
        <BillingAddressForm auth={auth} checkout={checkout} />
      )}
    </div>
  );
};

export default CustomerInfo;
