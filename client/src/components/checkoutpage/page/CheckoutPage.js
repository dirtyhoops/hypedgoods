import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  saveShippingAddress,
  saveCustomerInfo,
  saveSubtotal,
  changeForm,
  saveShippingPrice,
  enableButton,
  saveBillingAddress,
  saveTaxTotal,
  saveTotal,
  saveProduct,
  processOrder
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
  saveBillingAddress,
  saveTaxTotal,
  saveTotal,
  saveProduct,
  processOrder
}) => {
  // @TODO:
  // 1. make the itemsummary a table instead of div
  // 2. make a local state that keeps track of the order summary(total)
  var getCartItems = JSON.parse(localStorage.getItem('itemsArray'));

  return (
    <div className='wrapper-checkoutpage'>
      {getCartItems? (
        <>
          <CustomerInfo
            auth={auth}
            checkout={checkout}
            saveShippingAddress={saveShippingAddress}
            saveCustomerInfo={saveCustomerInfo}
            changeForm={changeForm}
            saveShippingPrice={saveShippingPrice}
            enableButton={enableButton}
            saveBillingAddress={saveBillingAddress}
            saveTaxTotal={saveTaxTotal}
            saveTotal={saveTotal}
            processOrder={processOrder}
          />
          <OrderSummary
            saveSubtotal={saveSubtotal}
            saveProduct={saveProduct}
            checkout={checkout}
          />
        </>
      ) : (
        <div className='cart-empty-box'>
          <p>Your cart is empty</p>
          <Link to='/products/shoes'>
            <button className='btn btn-dark'>Continue Shopping</button>
          </Link>
        </div>
      )}
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
  saveBillingAddress: PropTypes.func.isRequired,
  saveTotal: PropTypes.func.isRequired,
  saveTaxTotal: PropTypes.func.isRequired,
  saveProduct: PropTypes.func.isRequired,
  processOrder: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  checkout: state.checkout
});

export default connect(mapStateToProps, {
  saveShippingAddress,
  saveCustomerInfo,
  saveSubtotal,
  changeForm,
  saveShippingPrice,
  enableButton,
  saveBillingAddress,
  saveTaxTotal,
  saveTotal,
  saveProduct,
  processOrder
})(CheckoutPage);
