import React, { useState } from 'react';
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

  // For the new billing address form
  const [formDataBilling, setFormDataBilling] = useState({
    firstnameBilling: '',
    lastnameBilling: '',
    streetBilling: '',
    apartmentunitBilling: '',
    cityBilling: '',
    stateBilling: '',
    zipcodeBilling: '',
    countryBilling: 'United State'
  });

  const {
    firstnameBilling,
    lastnameBilling,
    streetBilling,
    apartmentunitBilling,
    cityBilling,
    stateBilling,
    zipcodeBilling,
    countryBilling
  } = formDataBilling;

  const onChangeBilling = e => {
    setFormDataBilling({ ...formDataBilling, [e.target.name]: e.target.value });
  };

  // This saves the billing address, ADD PROCESSING ORDER
  const onProcessHandler = () => {
    if (isSameAddress) {
      saveBillingAddress(props.checkout.shippingAddress);
    } else {
      saveBillingAddress(formDataBilling);
    }

    // if not, get the formdata
  };

  // Just a toggler between radio options.
  const onChangeHandler = () => {
    setIsSameAddress(!isSameAddress);
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
      {!isSameAddress ? (
        <div className='billingaddress-container'>
          <div className='header-billingaddress'>
            <h1>new billing address</h1>
          </div>
          <div className='billingaddress-form-container'>
            <form className='billingaddress-form'>
              <div className='row'>
                <div className='col'>
                  <div className='form-group'>
                    <label htmlFor='firstname'>first name *</label>
                    <input
                      className='form-control capitalize'
                      type='text'
                      name='firstnameBilling'
                      value={firstnameBilling}
                      onChange={e => onChangeBilling(e)}
                      required
                    />
                  </div>
                </div>
                <div className='col'>
                  <div className='form-group'>
                    <label htmlFor='lastname'>last name *</label>
                    <input
                      className='form-control capitalize'
                      type='text'
                      name='lastnameBilling'
                      value={lastnameBilling}
                      onChange={e => onChangeBilling(e)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <div className='form-group'>
                    <label htmlFor='street'>street *</label>
                    <input
                      className='form-control capitalize'
                      type='text'
                      name='streetBilling'
                      value={streetBilling}
                      onChange={e => onChangeBilling(e)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <div className='form-group'>
                    <label htmlFor='apartmentunit capitalize'>
                      apartment, suite, unit, buildint, floor, etc.
                    </label>
                    <input
                      className='form-control'
                      type='text'
                      name='apartmentunitBilling'
                      value={apartmentunitBilling}
                      onChange={e => onChangeBilling(e)}
                    />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <div className='form-group'>
                    <label htmlFor='city'>city *</label>
                    <input
                      className='form-control  capitalize'
                      type='text'
                      name='cityBilling'
                      value={cityBilling}
                      onChange={e => onChangeBilling(e)}
                      required
                    />
                  </div>
                </div>
                <div className='col'>
                  <div className='form-group capitalize'>
                    <label htmlFor='state'>state/province *</label>
                    <select
                      className='form-control'
                      name='stateBilling'
                      value={stateBilling}
                      onChange={e => onChangeBilling(e)}
                      required
                    >
                      <option value='' defaultValue>
                        Select state or region
                      </option>
                      <option value='AL'>Alabama</option>
                      <option value='AK'>Alaska</option>
                      <option value='AZ'>Arizona</option>
                      <option value='AR'>Arkansas</option>
                      <option value='CA'>California</option>
                      <option value='CO'>Colorado</option>
                      <option value='CT'>Connecticut</option>
                      <option value='DE'>Delaware</option>
                      <option value='DC'>District Of Columbia</option>
                      <option value='FL'>Florida</option>
                      <option value='GA'>Georgia</option>
                      <option value='HI'>Hawaii</option>
                      <option value='ID'>Idaho</option>
                      <option value='IL'>Illinois</option>
                      <option value='IN'>Indiana</option>
                      <option value='IA'>Iowa</option>
                      <option value='KS'>Kansas</option>
                      <option value='KY'>Kentucky</option>
                      <option value='LA'>Louisiana</option>
                      <option value='ME'>Maine</option>
                      <option value='MD'>Maryland</option>
                      <option value='MA'>Massachusetts</option>
                      <option value='MI'>Michigan</option>
                      <option value='MN'>Minnesota</option>
                      <option value='MS'>Mississippi</option>
                      <option value='MO'>Missouri</option>
                      <option value='MT'>Montana</option>
                      <option value='NE'>Nebraska</option>
                      <option value='NV'>Nevada</option>
                      <option value='NH'>New Hampshire</option>
                      <option value='NJ'>New Jersey</option>
                      <option value='NM'>New Mexico</option>
                      <option value='NY'>New York</option>
                      <option value='NC'>North Carolina</option>
                      <option value='ND'>North Dakota</option>
                      <option value='OH'>Ohio</option>
                      <option value='OK'>Oklahoma</option>
                      <option value='OR'>Oregon</option>
                      <option value='PA'>Pennsylvania</option>
                      <option value='RI'>Rhode Island</option>
                      <option value='SC'>South Carolina</option>
                      <option value='SD'>South Dakota</option>
                      <option value='TN'>Tennessee</option>
                      <option value='TX'>Texas</option>
                      <option value='UT'>Utah</option>
                      <option value='VT'>Vermont</option>
                      <option value='VA'>Virginia</option>
                      <option value='WA'>Washington</option>
                      <option value='WV'>West Virginia</option>
                      <option value='WI'>Wisconsin</option>
                      <option value='WY'>Wyoming</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <div className='form-group'>
                    <label htmlFor='zipcode'>zipcode *</label>
                    <input
                      className='form-control'
                      type='text'
                      name='zipcodeBilling'
                      value={zipcodeBilling}
                      onChange={e => onChangeBilling(e)}
                      required
                    />
                  </div>
                </div>
                <div className='col'>
                  <div className='form-group capitalize'>
                    <label htmlFor='country'>country or region *</label>
                    <select
                      className='form-control'
                      name='countryBilling'
                      value={countryBilling}
                      onChange={e => onChangeBilling(e)}
                      required
                    >
                      <option value='United States' defaultValue>
                        United States
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
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
            disabled={!isGoodToProccess}
          >
            Process order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
