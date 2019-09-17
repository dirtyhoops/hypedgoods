import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { processOrder } from '../../../actions/checkout';

const OrderProcessing = ({ auth, checkout, processOrder }) => {
  // useEffect(() => {
  //   processOrder({ email, firstname, lastname, taxTotal, shipping, total });
  // }, []);
  const {
    customerInfo: { email, firstname, lastname, phone },
    subtotal,
    total,
    taxTotal,
    shipping
  } = checkout;
  // @Todo:
  // 1. make sure it redirects here, after the user hit 'Process Order'
  // 2. have all the actions calling here: (add the checkout information from redux to the order schema).
  // 3. add all the item from localStorage to products array inside checkout redux.
  // 4. once the adding order to schema is successful, clear the localStorage.
  // 5. have a 4 second spinner that says "order processing"
  // 6. after the 4 second, redirect to successful order page
  return (
    <div>
      <p>
        {email} {lastname} {firstname} {phone} total: {total}, taxtotal:{' '}
        {taxTotal}
      </p>
    </div>
  );
};

OrderProcessing.propTypes = {
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
)(OrderProcessing);
