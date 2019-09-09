import React, { useEffect, useState } from 'react';
import './CustomerInfo.css';

const CustomerInfo = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    street: '',
    apartmentunit: '',
    city: '',
    state: '',
    zipcode: '',
    country: 'United States'
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

  return (
    <div className='billing-container'>
      <div className='header-billing'>
        <h1>billing</h1>
      </div>
      <div className='billingaddress-container'>
        <div className='header-billingaddress'>
          <h1>billing address</h1>
        </div>
        <div className='bilingaddress-form-container'>
          <form className='billingaddress-form'>
            <div className='row'>
              <div className='col'>
                <div className='form-group'>
                  <label htmlFor='firstname'>first name *</label>
                  <input
                    className='form-control'
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
                    className='form-control'
                    type='text'
                    name='lastname'
                    value={lastname}
                    onChange={e => onChange(e)}
                    required
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
