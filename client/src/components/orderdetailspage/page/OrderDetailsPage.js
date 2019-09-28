import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getOrder } from '../../../actions/order';
import PropTypes from 'prop-types';

const OrderDetailsPage = ({
  selectedOrder,
  getOrder,
  match: {
    params: { id }
  }
}) => {
  useEffect(() => {
    getOrder(id);
  }, []);
  return (
    <div className='wrapper-orderdetailspage'>
      <p>order detail</p>
      {selectedOrder ? (
        <div>
          <p>selectedOrder ID: {selectedOrder._id}</p>
          <p>
            customer info: {selectedOrder.customerInfo.firstname}{' '}
            {selectedOrder.customerInfo.lastname}
          </p>
        </div>
      ) : (
        <p> invalid order id, make this a better message later on</p>
      )}
    </div>
  );
};

OrderDetailsPage.propTypes = {
  selectedOrder: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  selectedOrder: state.order.selectedOrder
});

export default connect(
  mapStateToProps,
  { getOrder }
)(OrderDetailsPage);
