import React, { useState } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

const ShoesForm = ({ auth }) => {
  return (
    <>
      {auth.isAdmin ? (
        <div className='wrapper-shoesform'>
          <h1 className='large text-dark'>add shoes to inventory</h1>

          <form>
            <div className='form-group'>
              <label htmlFor='firstname'>first name</label>
              <input
                className='form-control'
                type='text'
                name='firstname'
                // value={firstname}
                // onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='lastname'>last name</label>
              <input
                className='form-control'
                type='text'
                name='lastname'
                // value={lastname}
                // onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>email</label>
              <input
                className='form-control'
                type='email'
                name='email'
                // value={email}
                // onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>password</label>
              <input
                className='form-control'
                type='password'
                name='password'
                // value={password}
                // onChange={e => onChange(e)}
                minLength='6'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>confirm password</label>
              <input
                className='form-control'
                type='password'
                name='password2'
                // value={password2}
                // onChange={e => onChange(e)}
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
        </div>
      ) : null}
    </>
  );
};

ShoesForm.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(ShoesForm);
