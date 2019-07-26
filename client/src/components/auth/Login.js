import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  // it changes the value of the target every keystroke
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className='wrapper-login'>
      <h1>Login</h1>
      <form onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <label for='email'>Email</label>
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
          <label for='password'>Password</label>
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
        <div className='login-button'>
          <input
            type='submit'
            className='btn btn-dark btn-block'
            value='Login'
          />
        </div>
      </form>
      <p>
        Don't have an account?{' '}
        <Link to='/account/register'>Create an account</Link>
      </p>
    </div>
  );
};

export default Login;
