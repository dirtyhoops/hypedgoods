import React from 'react';

import './Payment.css';

const Payment = props => {
  const {
    changeForm,
    checkout: {
      shippingAddress: {
        firstname,
        lastname,
        email,
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
        </div>
      </div>

      {/* // GOING TO CHANGE THIS TO "SAME AS SHIPPING ADDRESS" OR "USE A DIFFERENT BILLING ADDRESS" */}
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
              // checked={shippingPrice == 9}
              // onChange={() => onChangeHandler(20)}
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
              // checked={shippingPrice == 20}
              // onChange={() => onChangeHandler(20)}
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
          <button className='btn btn-primary'>Process order</button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
