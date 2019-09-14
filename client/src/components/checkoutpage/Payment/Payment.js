import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BillingAddressForm from '../BillingAddressForm/BillingAddressForm';

import './Payment.css';

const Payment = props => {
  const {
    changeForm,
    saveBillingAddress,
    checkout: {
      shippingAddress: {
        firstname,
        lastname,
        street,
        apartmentunit,
        city,
        state,
        country,
        zipcode
      },
      shipping
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
    changeForm('shippingform');
  };

  // Just a toggler between radio options.
  const onChangeHandler = () => {
    if (!isSameAddress) {
      setDoneBillingAddress(false);
    }

    // Toggles it
    setIsSameAddress(!isSameAddress);
  };

  const changeDoneBilling = () => {
    setDoneBillingAddress(true);
    setIsGoodToProccess(true);
  };

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
                {firstname} {lastname}
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='capitalize'>
                {street}, {city}, {state} {zipcode}, {country}
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
              checked={isSameAddress == true}
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
              checked={isSameAddress == false}
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
          <Link to={'/ordersummary'}>
            <button
              className='btn btn-primary'
              onClick={() => {
                onProcessHandler();
              }}
              disabled={!isGoodToProccess && !isSameAddress}
            >
              Process order
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Payment;
