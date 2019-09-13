import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './ShippingAddressForm.css';

const ShippingAddressForm = props => {
  const { auth, saveShippingAddress, saveCustomerInfo, checkout } = props;
  const { shippingAddress } = checkout;

  const [formData, setFormData] = useState({
    firstname: auth.user
      ? checkout.shippingAddress
        ? `${checkout.shippingAddress.firstname}`
        : `${auth.user.firstname}`
      : '',
    lastname: auth.user
      ? checkout.shippingAddress
        ? `${checkout.shippingAddress.lastname}`
        : `${auth.user.lastname}`
      : '',
    email: auth.user ? `${auth.user.email}` : '',
    phone: checkout.customerInfo
      ? checkout.customerInfo.phone
        ? `${checkout.customerInfo.phone}`
        : ''
      : '',
    street: auth.user
      ? checkout.shippingAddress
        ? `${checkout.shippingAddress.street}`
        : auth.user.address
        ? `${auth.user.address.street}`
        : ''
      : '',

    apartmentunit: auth.user
      ? checkout.shippingAddress
        ? `${checkout.shippingAddress.apartmentunit}`
        : auth.user.address
        ? `${auth.user.address.apartmentunit}`
        : ''
      : '',
    city: auth.user
      ? checkout.shippingAddress
        ? `${checkout.shippingAddress.city}`
        : auth.user.address
        ? `${auth.user.address.city}`
        : ''
      : '',
    state: auth.user
      ? checkout.shippingAddress
        ? `${checkout.shippingAddress.state}`
        : auth.user.address
        ? `${auth.user.address.state}`
        : ''
      : '',
    zipcode: auth.user
      ? checkout.shippingAddress
        ? `${checkout.shippingAddress.zipcode}`
        : auth.user.address
        ? `${auth.user.address.zipcode}`
        : ''
      : '',
    country: auth.user
      ? checkout.shippingAddress
        ? `${checkout.shippingAddress.country}`
        : auth.user.address
        ? `${auth.user.address.country}`
        : 'United State'
      : 'United State'
  });

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
  } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    saveShippingAddress(formData);
    saveCustomerInfo(firstname, lastname, email, phone);
  };
  return (
    <div className='shippingaddress-container'>
      <div className='header-shippingaddress'>
        <h1>Shipping address</h1>
        {!auth.isAuthenticated ? (
          <Link to={'/account/login'}>
            <button className='billingaddresssignin-button'>
              register or sign in for faster checkout
            </button>
          </Link>
        ) : null}
      </div>
      <div className='shippingaddress-form-container'>
        <form className='shippingaddress-form' onSubmit={e => onSubmit(e)}>
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
                <label htmlFor='email'>Email Address *</label>
                <input
                  className='form-control'
                  type='text'
                  name='email'
                  value={email}
                  onChange={e => onChange(e)}
                  required
                />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className='form-group'>
                <label htmlFor='phone'>phone number *</label>
                <input
                  className='form-control capitalize'
                  type='text'
                  name='phone'
                  value={phone}
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
                value='Continue to shipping'
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShippingAddressForm;
