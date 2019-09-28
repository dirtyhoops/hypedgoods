import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getOrders } from '../../../actions/order';
import PropTypes from 'prop-types';

import Spinner from '../../layout/Spinner/Spinner';

const OrdersAdminPage = ({ orders, getOrders }) => {
  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className='wrapper-ordersadminpage'>
      <div className='header-ordersadminpage'>
        <h1>All Orders</h1>
      </div>
      {orders ? (
        <div className='allorders-container'>
          {orders.map((order, index) => (
            <Link to={`/order/${order._id}`}>
              <p key={index}>
                {order._id} - {order.customerInfo.firstname}{' '}
                {order.customerInfo.lastname} - ${order.total} --> click for
                details
              </p>
            </Link>
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

OrdersAdminPage.propTypes = {
  getOrders: PropTypes.func.isRequired,
  orders: PropTypes.array.isRequired
};
const mapStateToProps = state => ({
  orders: state.order.orders
});

export default connect(
  mapStateToProps,
  { getOrders }
)(OrdersAdminPage);
