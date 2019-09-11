import React from 'react';

import './ShippingOptions.css';

const ShippingOptions = props => {
  const {
    firstname,
    lastname,
    email,
    phone,
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
      <div className='header-shippingoption'>
        <h1>shipping options</h1>
      </div>
      <div className='shipping-summary'>
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
        {/* <p>
          Shipping to: {street}, {city}, {state} {zipcode}, {country}
        </p> */}
      </div>
    </div>
  );
};

export default ShippingOptions;
