import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './ShoesForm.css';

const ShoesForm = ({ auth }) => {
  return (
    <>
      {auth.isAdmin ? (
        <div className='wrapper-shoesform'>
          <h1 className='large text-dark'>add shoes to inventory</h1>

          <form>
            <div className='firsthalfform'>
              <div className='form-group'>
                <label htmlFor='product_id'>product id</label>
                <input
                  className='form-control'
                  type='text'
                  name='product_id'
                  // value={firstname}
                  // onChange={e => onChange(e)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='brand'>brand</label>
                <input
                  className='form-control'
                  type='text'
                  name='brand'
                  // value={firstname}
                  // onChange={e => onChange(e)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='name'>name</label>
                <input
                  className='form-control'
                  type='text'
                  name='name'
                  // value={lastname}
                  // onChange={e => onChange(e)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='release_date'>release date</label>
                <input
                  className='form-control'
                  type='text'
                  name='release_date'
                  // value={email}
                  // onChange={e => onChange(e)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='retail_price'>retail price</label>
                <input
                  className='form-control'
                  type='text'
                  name='retail_price'
                  // value={firstname}
                  // onChange={e => onChange(e)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='color'>color</label>
                <input
                  className='form-control'
                  type='text'
                  name='color'
                  // value={firstname}
                  // onChange={e => onChange(e)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='categories'>categories</label>
                <input
                  className='form-control'
                  type='text'
                  name='categories'
                  // value={firstname}
                  // onChange={e => onChange(e)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='images'>images</label>
                <input
                  className='form-control'
                  type='text'
                  name='images'
                  // value={firstname}
                  // onChange={e => onChange(e)}
                />
              </div>
            </div>
            <div className='secondhalfform'>
              <div className='form-group'>
                <label htmlFor='categories'>categories</label>
                <input
                  className='form-control'
                  type='text'
                  name='categories'
                  // value={firstname}
                  // onChange={e => onChange(e)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='images'>images</label>
                <input
                  className='form-control'
                  type='text'
                  name='images'
                  // value={firstname}
                  // onChange={e => onChange(e)}
                />
              </div>
            </div>
            <div className='add-shoes-button'>
              <input
                type='submit'
                className='btn btn-dark btn-block'
                value='add shoes to inventory'
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
