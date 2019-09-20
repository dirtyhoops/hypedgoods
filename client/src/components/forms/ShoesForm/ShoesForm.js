import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { addProductShoes } from '../../../actions/shoe';

import './ShoesForm.css';

const ShoesForm = ({
  auth: { isAdmin },
  shoe: { isAddingShoesSuccessful },
  addProductShoes
}) => {
  const [formData, setFormData] = useState({
    brand: '',
    name: '',
    release_date: '',
    retail_price: '',
    colorway: '',
    colors: '',
    model: '',
    images: ''
  });

  const {
    brand,
    name,
    release_date,
    retail_price,
    colorway,
    colors,
    model,
    images
  } = formData;

  // Changes the value of the target every keystroke
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addProductShoes({ formData });
  };

  if (isAddingShoesSuccessful) {
    return <Redirect to='/products/shoes' />;
  }

  return (
    <>
      {isAdmin ? (
        <div className='wrapper-shoesform'>
          <h1 className='large text-dark'>add shoes to inventory</h1>

          <form onSubmit={e => onSubmit(e)}>
            <div className='form-group'>
              <label htmlFor='brand'>brand</label>
              <input
                className='form-control'
                type='text'
                name='brand'
                value={brand}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='name'>name</label>
              <input
                className='form-control'
                type='text'
                name='name'
                value={name}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='release_date'>release date</label>
              <input
                className='form-control'
                type='text'
                name='release_date'
                value={release_date}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='retail_price'>retail price</label>
              <input
                className='form-control'
                type='text'
                name='retail_price'
                value={retail_price}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='colorway'>colorway</label>
              <input
                className='form-control'
                type='text'
                name='colorway'
                value={colorway}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='colors'>colors</label>
              <input
                className='form-control'
                type='text'
                name='colors'
                value={colors}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='model'>model</label>
              <input
                className='form-control'
                type='text'
                name='model'
                value={model}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='images'>images</label>
              <textarea
                className='form-control'
                rows='3'
                name='images'
                value={images}
                onChange={e => onChange(e)}
              />
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
  auth: PropTypes.object.isRequired,
  addProductShoes: PropTypes.func.isRequired,
  shoe: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  shoe: state.shoe
});

export default connect(
  mapStateToProps,
  { addProductShoes }
)(ShoesForm);
