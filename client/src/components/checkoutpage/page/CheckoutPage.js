import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  saveShippingAddress,
  saveCustomerInfo,
  saveSubtotal,
  changeForm,
  saveShippingPrice,
  enableButton,
  saveBillingAddress
} from '../../../actions/checkout';
import OrderSummary from '../OrderSummary/OrderSummary';
import CustomerInfo from '../CustomerInfo/CustomerInfo';

import './CheckoutPage.css';

const CheckoutPage = ({
  auth,
  checkout,
  saveShippingAddress,
  saveCustomerInfo,
  saveSubtotal,
  changeForm,
  saveShippingPrice,
  enableButton,
  saveBillingAddress
}) => {
  // @TODO:
  // 1. make the itemsummary a table instead of div
  // 2. make a local state that keeps track of the order summary(total)

  return (
    <div className='wrapper-checkoutpage container'>
      <CustomerInfo
        auth={auth}
        checkout={checkout}
        saveShippingAddress={saveShippingAddress}
        saveCustomerInfo={saveCustomerInfo}
        changeForm={changeForm}
        saveShippingPrice={saveShippingPrice}
        enableButton={enableButton}
        saveBillingAddress={saveBillingAddress}
      />
      <OrderSummary saveSubtotal={saveSubtotal} checkout={checkout} />
    </div>
  );
};

CheckoutPage.propTypes = {
  auth: PropTypes.object.isRequired,
  saveShippingAddress: PropTypes.func.isRequired,
  saveCustomerInfo: PropTypes.func.isRequired,
  saveSubtotal: PropTypes.func.isRequired,
  changeForm: PropTypes.func.isRequired,
  saveShippingPrice: PropTypes.func.isRequired,
  enableButton: PropTypes.func.isRequired,
  saveBillingAddress: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  checkout: state.checkout
});

export default connect(
  mapStateToProps,
  {
    saveShippingAddress,
    saveCustomerInfo,
    saveSubtotal,
    changeForm,
    saveShippingPrice,
    enableButton,
    saveBillingAddress
  }
)(CheckoutPage);
