import React, { useState, useEffect } from 'react';

import './ShippingOptions.css';

const ShippingOptions = props => {
  useEffect(() => {
    saveShippingPrice(shippingPrice);
  }, []);

  const {
    changeForm,
    saveShippingPrice,
    enableButton,
    checkout: {
      shippingAddress: {
        firstname,
        lastname,
        email,
        street,
        apartmentunit,
        city,
        state,
        zipcode,
        country
      },
      shipping,
      disableButton
    }
  } = props;

  // const {
  //   firstname,
  //   lastname,
  //   email,
  //   street,
  //   apartmentunit,
  //   city,
  //   state,
  //   zipcode,
  //   country
  // } = props.checkout.shippingAddress;

  // const { changeForm, saveShippingPrice } = props;

  const [shippingPrice, setShippingPrice] = useState(shipping);

  const onChangeHandler = shipPrice => {
    setShippingPrice(shipPrice);
    saveShippingPrice(shipPrice);
    enableButton();
  };

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
              1 day shipping ($20.00)
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
            disabled={disableButton}
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
