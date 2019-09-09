import React, { useState, useEffect } from 'react';

import OrderSummary from '../OrderSummary/OrderSummary';
import CustomerInfo from '../CustomerInfo/CustomerInfo';

import './CheckoutPage.css';

const CheckoutPage = () => {
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
      <CustomerInfo />
      <OrderSummary orderSubTotal={orderSubTotal} />
    </div>
  );
};

export default CheckoutPage;
