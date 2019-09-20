import React from 'react';
import ShippingAddressForm from '../ShippingAddressForm/ShippingAddressForm';
import ShippingOptions from '../ShippingOptions/ShippingOptions';
import Payment from '../Payment/Payment';
import './CustomerInfo.css';

const CustomerInfo = props => {
  const {
    auth,
    checkout,
    saveShippingAddress,
    saveCustomerInfo,
    saveShippingPrice,
    changeForm,
    enableButton,
    saveBillingAddress,
    saveTaxTotal,
    saveTotal,
    processOrder
  } = props;

  const { currentForm } = checkout;
  return (
    <div className='customerinfo-container'>
      <div className='header-customerinfo'>
        <h1>customer information</h1>
      </div>
      <div className='checkout-crumbs'>
        <p>
          <span>cart</span> >{' '}
          <span className={currentForm === 'shippingform' && 'crumbs-bold'}>
            information
          </span>{' '}
          >{' '}
          <span className={currentForm === 'shippingoption' && 'crumbs-bold'}>
            shipping
          </span>{' '}
          >{' '}
          <span className={currentForm === 'billingform' && 'crumbs-bold'}>
            payment
          </span>
        </p>
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
        <ShippingOptions
          checkout={checkout}
          changeForm={changeForm}
          saveShippingPrice={saveShippingPrice}
          saveTaxTotal={saveTaxTotal}
          saveTotal={saveTotal}
          enableButton={enableButton}
          saveBillingAddress={saveBillingAddress}
        />
      )}
      {checkout.currentForm === 'billingform' && (
        <Payment
          auth={auth}
          changeForm={changeForm}
          checkout={checkout}
          saveBillingAddress={saveBillingAddress}
          processOrder={processOrder}
        />
      )}
    </div>
  );
};

export default CustomerInfo;
