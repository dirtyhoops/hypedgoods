import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import BillingAddressForm from '../BillingAddressForm/BillingAddressForm';

import store from '../../../store';
import { updateCartItemCount } from '../../../actions/cartAndFilter';

import './Payment.css';

const Payment = props => {
  const {
    changeForm,
    saveBillingAddress,
    processOrder,
    checkout: {
      shippingAddress,
      billingAddress,
      customerInfo,
      products,
      shipping,
      subtotal,
      taxTotal,
      total,
      orderSuccess
    }
  } = props;

  const [isSameAddress, setIsSameAddress] = useState(true);
  const [isGoodToProccess, setIsGoodToProccess] = useState(false);
  const [doneBillingAddress, setDoneBillingAddress] = useState(false);

  // This saves the billing address, ADD PROCESSING ORDER
  const onProcessHandler = () => {
    if (isSameAddress) {
      saveBillingAddress(props.checkout.shippingAddress);
    }

    processOrder({
      customerInfo,
      subtotal,
      taxTotal,
      shipping,
      total,
      shippingAddress,
      billingAddress,
      products
    });

    // CLEAR THE LOCALSTORAGE HERE BECAUSE ONCE PAYMENT IS PROCESSED WE HAVE NO NEED FOR THE CART ITEMS
    // localStorage.removeItem('itemsArray');
  };

  // Just a toggler between radio options.
  const onChangeHandler = () => {
    if (!isSameAddress) {
      setDoneBillingAddress(false);
      saveBillingAddress(props.checkout.shippingAddress);
    }

    // Toggles it
    setIsSameAddress(!isSameAddress);
  };

  const changeDoneBilling = () => {
    setDoneBillingAddress(true);
    setIsGoodToProccess(true);
  };

  if (orderSuccess) {
    // Clears the itemsArray that has all the products in the cart from the localStorage
    localStorage.removeItem('itemsArray');

    // Change the cart item count to 0
    store.dispatch(updateCartItemCount(0));

    return <Redirect to={'/ordersummary'} />;
  }

  return (
    <div className='payment-container'>
      <div className='payment-table'>
        <div className='header-shippingoption'>
          <h1>shipping information</h1>
        </div>
        <table className='table-payment'>
          <tbody>
            <tr>
              <td className='table-payment-firstcol'>Ship to:</td>
              <td className='capitalize'>
                {shippingAddress.firstname} {shippingAddress.lastname}
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='capitalize'>
                {shippingAddress.street}{' '}
                {shippingAddress.apartmentunit
                  ? shippingAddress.apartmentunit
                  : null}
                , {shippingAddress.city}, {shippingAddress.state}{' '}
                {shippingAddress.zipcode}, {shippingAddress.country}
              </td>

              <td>
                <button
                  className='table-payment-button'
                  onClick={() => {
                    changeForm('shippingform');
                  }}
                >
                  change
                </button>
              </td>
            </tr>
            <tr className='tr-border-top-payment'>
              <td>Method: </td>
              <td>
                {shipping === 9
                  ? 'Standard (3-7 days) - $ 9.00'
                  : '1 day shipping - $20.00 '}
              </td>
              <td>
                <button
                  className='table-payment-button'
                  onClick={() => {
                    changeForm('shippingoption');
                  }}
                >
                  change
                </button>
              </td>
            </tr>
            {/* // ADD ONE MORE TR FOR SHIPPING METHOD */}
          </tbody>
        </table>
      </div>

      {/* PAYMENT COMPONENT ---- CHANGE THE CSS LATER */}
      <div className='billing-address-option'>
        <div className='header-billing-address'>
          <h1>payment</h1>
          <p className='payment-small-text'>
            Since this is a fictional website, everything is free, you don't
            have to put your credit card number. Please still process your order
            to see your order summary.
          </p>
        </div>
      </div>
      {/* BILLING ADDRESS PART */}
      <div className='billing-address-option'>
        <div className='header-billing-address'>
          <h1>billing address</h1>
        </div>
        <form>
          {/* // <div className='form-check' onClick={() => onChangeHandler(9)}> */}
          <div className='form-check'>
            <input
              className='form-check-input'
              type='radio'
              name='billingoptionradios'
              id='billingoptionradio1'
              value='option1'
              checked={isSameAddress === true}
              onChange={() => onChangeHandler()}
            />
            <label
              className='form-check-label capitalize'
              htmlFor='billingoptionradio1'
            >
              Same as shipping address
            </label>
          </div>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='radio'
              name='billingoptionradios'
              id='billingoptionradio2'
              value='option2'
              checked={isSameAddress === false}
              onChange={() => onChangeHandler()}
            />
            <label
              className='form-check-label capitalize'
              htmlFor='billingoptionradio2'
            >
              Use a different billing address
            </label>
          </div>
        </form>
      </div>

      {/* FOR NEW BILLING ADDRESS */}
      {!isSameAddress & !doneBillingAddress ? (
        <BillingAddressForm
          saveBillingAddress={saveBillingAddress}
          changeDoneBilling={changeDoneBilling}
        />
      ) : null}

      <div className='payment-buttons'>
        <div className='payment-button-left'>
          <button
            onClick={() => {
              changeForm('shippingoption');
            }}
          >
            &#60; Return to shipping
          </button>
        </div>
        <div className='payment-button-right'>
          <button
            className='btn btn-primary'
            onClick={() => {
              onProcessHandler();
            }}
            disabled={!isGoodToProccess && !isSameAddress}
          >
            Process order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
