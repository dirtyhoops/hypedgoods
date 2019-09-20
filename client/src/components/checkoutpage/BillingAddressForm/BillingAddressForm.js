import React, { useState } from 'react';

import './BillingAddressForm.css';

const BillingAddressForm = props => {
  const { saveBillingAddress, changeDoneBilling } = props;

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    street: '',
    apartmentunit: '',
    city: '',
    state: '',
    zipcode: '',
    country: 'United State'
  });

  const {
    firstname,
    lastname,
    street,
    apartmentunit,
    city,
    state,
    zipcode,
    country
  } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    saveBillingAddress(formData);
    changeDoneBilling();
  };

  return (
    <div className='billingaddress-container'>
      <div className='header-billingaddress'>
        <h1>new billing address</h1>
      </div>
      <div className='billingaddress-form-container'>
        <form className='billingaddress-form' onSubmit={e => onSubmit(e)}>
          <div className='row'>
            <div className='col'>
              <div className='form-group'>
                <label htmlFor='firstname'>first name *</label>
                <input
                  className='form-control capitalize'
                  type='text'
                  name='firstname'
                  value={firstname}
                  onChange={e => onChange(e)}
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
                  name='lastname'
                  value={lastname}
                  onChange={e => onChange(e)}
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
                  name='street'
                  value={street}
                  onChange={e => onChange(e)}
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
                  name='apartmentunit'
                  value={apartmentunit}
                  onChange={e => onChange(e)}
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
                  name='city'
                  value={city}
                  onChange={e => onChange(e)}
                  required
                />
              </div>
            </div>
            <div className='col'>
              <div className='form-group capitalize'>
                <label htmlFor='state'>state/province *</label>
                <select
                  className='form-control'
                  name='state'
                  value={state}
                  onChange={e => onChange(e)}
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
                  name='zipcode'
                  value={zipcode}
                  onChange={e => onChange(e)}
                  required
                />
              </div>
            </div>
            <div className='col'>
              <div className='form-group capitalize'>
                <label htmlFor='country'>country or region *</label>
                <select
                  className='form-control'
                  name='country'
                  value={country}
                  onChange={e => onChange(e)}
                  required
                >
                  <option value='United States' defaultValue>
                    United States
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className='row continuetoshipping-button'>
            <div className='col'>
              <input
                type='submit'
                className='btn btn-primary btn-sm'
                value='Use address'
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BillingAddressForm;
