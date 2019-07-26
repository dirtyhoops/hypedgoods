import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';

import './Login.css';

const Register = props => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    password2: ''
  });

  const { firstname, lastname, email, password, password2 } = formData;

  // it changes the value of the target every keystroke
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      props.setAlert('Passwords do not match', 'danger');
      console.log('Passwords do not match');
    } else {
      console.log(formData);
    }
  };

  return (
    <div className='wrapper-register'>
      <h1 className='large text-dark'>create an account</h1>

      <form onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <label for='firstname'>first name</label>
          <input
            className='form-control'
            type='text'
            name='firstname'
            value={firstname}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <label for='lastname'>last name</label>
          <input
            className='form-control'
            type='text'
            name='lastname'
            value={lastname}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <label for='email'>email</label>
          <input
            className='form-control'
            type='email'
            name='email'
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <label for='password'>password</label>
          <input
            className='form-control'
            type='password'
            name='password'
            value={password}
            onChange={e => onChange(e)}
            minLength='6'
            required
          />
        </div>
        <div className='form-group'>
          <label for='password'>confirm password</label>
          <input
            className='form-control'
            type='password'
            name='password2'
            value={password2}
            onChange={e => onChange(e)}
            minLength='6'
          />
        </div>
        <div className='register-button'>
          <input
            type='submit'
            className='btn btn-dark btn-block'
            value='Register'
          />
        </div>
      </form>
      <p>
        Already have an account? <Link to='/account/login'>Sign In</Link>
      </p>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired
};

export default connect(
  null,
  { setAlert }
)(Register);
