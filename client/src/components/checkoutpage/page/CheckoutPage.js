import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import OrderSummary from '../OrderSummary/OrderSummary';
import CustomerInfo from '../CustomerInfo/CustomerInfo';

import './CheckoutPage.css';

const CheckoutPage = ({ auth }) => {
  useEffect(() => {
    getSubtotal();
  }, []);

  // Gets the cart items from localstorage
  var getCartItems = JSON.parse(localStorage.getItem('itemsArray'));

  const [orderSubTotal, setOrderSubTotal] = useState(0);

  // Gets the subtotal of the order(no shipping, no tax)
  const getSubtotal = () => {
    var subTotal = 0;
    getCartItems.map(item => (subTotal += item.shoe_price));
    setOrderSubTotal(subTotal);
  };

  // @TODO:
  // 1. make the itemsummary a table instead of div
  // 2. make a local state that keeps track of the order summary(total)

  return (
    <div className='wrapper-checkoutpage container'>
      <CustomerInfo auth={auth} />
      <OrderSummary orderSubTotal={orderSubTotal} />
    </div>
  );
};

CheckoutPage.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(CheckoutPage);
