import React from 'react';

import './ShippingOptions.css';

const ShippingOptions = props => {
  const {
    firstname,
    lastname,
    email,
    street,
    apartmentunit,
    city,
    state,
    zipcode,
    country
  } = props.checkout.shippingAddress;

  const { changeForm } = props;

  return (
    <div className='shippingoption-container'>
      <div className='shipping-summary-table'>
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
            </tr>
            <tr>
              <td></td>
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
          </tbody>
        </table>
      </div>
      <div className='shipping-summary-options'>
        <div className='header-shippingoption'>
          <h1>shipping method</h1>
        </div>
        <form>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='radio'
              name='shippingoptionradios'
              id='shippingoptionradio1'
              value='option1'
              checked
            />
            <label className='form-check-label capitalize' for='exampleRadios1'>
              standard (3-7 Days)
            </label>
          </div>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='radio'
              name='shippingoptionradios'
              id='shippingoptionradio2'
              value='option2'
            />
            <label className='form-check-label capitalize' for='exampleRadios2'>
              next day shipping
            </label>
          </div>
        </form>
      </div>
      <div className='shipping-summary-buttons'>
        <div className='shipping-summary-button-left'>
          <button
            onClick={() => {
              changeForm('shippingform');
            }}
          >
            &#60; Return to shipping address
          </button>
        </div>
        <div className='shipping-summary-button-right'>
          <button
            className='btn btn-primary'
            onClick={() => {
              changeForm('billingform');
            }}
          >
            Continue to payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShippingOptions;
