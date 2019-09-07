import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import './AddAddressForm.css';

const EditAddressForm = props => {
  const { address, addAddress, onClickToggle } = props;
  const [formData, setFormData] = useState({
    street: `${address.street}`,
    apartmentunit: address.apartmentunit ? `${address.apartmentunit}` : '',
    city: `${address.city}`,
    state: `${address.state}`,
    zipcode: `${address.zipcode}`,
    country: `${address.country}`
  });

  const [isAddSuccess, setIsAddSuccess] = useState(false);
  const { street, apartmentunit, city, state, zipcode, country } = formData;

  // this changes the value of the target every keystroke
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    addAddress({ formData });
    setIsAddSuccess(true);
    onClickToggle();
  };

  // // This triggers after a user successfully added or edit the address
  if (isAddSuccess) {
    return <Redirect to='/account' />;
  }

  return (
    <div className='wrapper-addressform'>
      <h3>edit address</h3>
      <form className='addressform' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <label htmlFor='street'>street address *</label>
          <input
            className='form-control'
            type='text'
            name='street'
            value={street}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='apartmentunit'>
            apartment, suite, unit, building, floot, etc.
          </label>
          <input
            className='form-control'
            type='text'
            name='apartmentunit'
            value={apartmentunit}
            onChange={e => onChange(e)}
          />
        </div>
        <div class='form-group'>
          <label htmlFor='country'>country or region *</label>
          <select
            className='form-control'
            name='country'
            value={country}
            onChange={e => onChange(e)}
            required
          >
            <option value='United States' selected>
              United States
            </option>
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='city'>city *</label>
          <input
            className='form-control'
            type='text'
            name='city'
            value={city}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div class='form-group'>
          <label htmlFor='state'>state/province *</label>
          <select
            className='form-control'
            name='state'
            value={state}
            onChange={e => onChange(e)}
            required
          >
            <option value='' selected>
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
        <div className='form-group'>
          <label htmlFor='zipcode'>zip/postal code *</label>
          <input
            className='form-control'
            type='text'
            name='zipcode'
            value={zipcode}
            onChange={e => onChange(e)}
            required
          />
        </div>

        <input
          type='submit'
          className='btn btn-primary btn-sm'
          value='Save Changes'
        />
      </form>
    </div>
  );
};

export default EditAddressForm;
