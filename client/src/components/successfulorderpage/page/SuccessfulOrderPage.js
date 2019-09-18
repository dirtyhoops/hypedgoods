import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { processOrder } from '../../../actions/checkout';
import './SuccessfulOrderPage.css';

const SuccessfulOrderPage = ({ auth, checkout, processOrder }) => {
  const {
    customerInfo,
    subtotal,
    total,
    taxTotal,
    shipping,
    products,
    orderSuccess
  } = checkout;

  // customerInfo: { email, firstname, lastname, phone }

  // @Todo:
  // 1. make sure it redirects here, after the user hit 'Process Order'
  // 2. have all the actions calling here: (add the checkout information from redux to the order schema).
  // 3. add all the item from localStorage to products array inside checkout redux.
  // 4. once the adding order to schema is successful, clear the localStorage.
  // 5. have a 4 second spinner that says "order processing"
  // 6. after the 4 second, redirect to successful order page
  // 7. clear the checkout redux

  if (!orderSuccess) {
    return <Redirect to={'/'} />;
  }

  return (
    <div className='wrapper-successfulorderpage container'>
      <div className='header-successfulorderpage'>
        <h1>Thank you for your order!</h1>
      </div>
      <div className='table-successfulorder'>
        <table>
          {products.map((product, ind) => (
            <tr key={ind}>
              <td className='successfulorder-item-image'>
                <img src={product.image} />
              </td>
              <td>
                <p className='successfulorder-p-uppercase successfulorder-p-bolder'>
                  {product.brand}
                </p>
                <p className='successfulorder-p-capitalize'>{product.name}</p>
                <p className='successfulorder-p-capitalize'>
                  size {product.size} US
                </p>
                <p>
                  $
                  {product.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                </p>
              </td>
            </tr>
          ))}
          <tr>
            <td className='successfulorder-p-capitalize'>products total</td>
            <td>${subtotal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
          </tr>
          <tr>
            <td className='successfulorder-p-capitalize'>tax</td>
            <td>${taxTotal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
          </tr>
          <tr>
            <td className='successfulorder-p-capitalize'>shipping cost</td>
            <td>${shipping.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
          </tr>
          <tr>
            <td>total</td>
            <td>${total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

SuccessfulOrderPage.propTypes = {
  auth: PropTypes.object.isRequired,
  checkout: PropTypes.object.isRequired,
  processOrder: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  checkout: state.checkout
});

export default connect(
  mapStateToProps,
  { processOrder }
)(SuccessfulOrderPage);
