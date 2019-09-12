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
        <table className='table-shipping-summary'>
          <tbody>
            <tr>
              <td className='table-shipping-summary-firstcol'>Ship to:</td>
              <td className='capitalize'>
                {firstname} {lastname}
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='capitalize'>
                {street}, {city}, {state} {zipcode}, {country}
              </td>

              <td className='table-shipping-summary-lastrow'>
                <button
                  onClick={() => {
                    changeForm('shippingform');
                  }}
                >
                  change
                </button>
              </td>
            </tr>
            <tr>
              <td>Method: </td>
              <td>
                {shipping === 9
                  ? 'Standard (3-7 days) - $ 9.00'
                  : '1 day shipping - $20.00 '}
              </td>
              <td className='table-shipping-summary-lastrow'>
                <button
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
      {/* // GOING TO CHANGE THIS TO "SAME AS SHIPPING ADDRESS" OR "USE A DIFFERENT BILLING ADDRESS" */}
      {/* <div className='shipping-summary-options'>
        <div className='header-shippingoption'>
          <h1>shipping method</h1>
        </div>
        <form>
          <div className='form-check' onClick={() => onChangeHandler(9)}>
            <input
              className='form-check-input'
              type='radio'
              name='shippingoptionradios'
              id='shippingoptionradio1'
              value='option1'
              checked={shippingPrice == 9}
              onChange={() => onChangeHandler(20)}
            />
            <label
              className='form-check-label capitalize'
              htmlFor='shippingoptionradio1'
            >
              standard (3-7 Days) ($9.00)
            </label>
          </div>
          <div className='form-check' onClick={() => onChangeHandler(20)}>
            <input
              className='form-check-input'
              type='radio'
              name='shippingoptionradios'
              id='shippingoptionradio2'
              value='option2'
              checked={shippingPrice == 20}
              onChange={() => onChangeHandler(20)}
            />
            <label
              className='form-check-label capitalize'
              htmlFor='shippingoptionradio2'
            >
              next day shipping ($20.00)
            </label>
          </div>
        </form>
      </div> */}
      <div className='shipping-summary-buttons'>
        <div className='shipping-summary-button-left'>
          <button
            onClick={() => {
              changeForm('shippingoption');
            }}
          >
            &#60; Return to shipping
          </button>
        </div>
        <div className='shipping-summary-button-right'>
          <button className='btn btn-primary'>Process order</button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
