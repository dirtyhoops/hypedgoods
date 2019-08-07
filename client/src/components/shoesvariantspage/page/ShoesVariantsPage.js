import React, { useEffect, Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Redirect } from 'react-router-dom';

import {
  getShoesVariants,
  getShoe,
  addShoesVariants
} from '../../../actions/shoe';

import './ShoesVariantsPage.css';

const ShoesVariantsPage = ({
  getShoesVariants,
  getShoe,
  addShoesVariants,
  shoe: {
    selectedShoeVariants,
    selectedShoe,
    isAddingVariantSuccess,
    loadingSelectedShoes
  },
  match: {
    params: { shoes_id }
  }
}) => {
  useEffect(() => {
    getShoe(shoes_id);
    getShoesVariants(shoes_id);
  }, []);

  const [formData, setFormData] = useState({
    size: '',
    price: '',
    quantity: ''
  });

  const { size, price, quantity } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addShoesVariants({ formData }, shoes_id);
    setFormData('');
  };

  if (isAddingVariantSuccess) {
    getShoesVariants(shoes_id);
    return <Redirect to={`/products/shoes/${shoes_id}/variants`} />;
  }

  return (
    <div className='wrapper-shoesvariantspage'>
      {selectedShoe ? (
        <div>
          <p>Brand: {selectedShoe.brand}</p>
          <p>Name: {selectedShoe.name}</p>
          <p>
            Release Date:{' '}
            <Moment format='YYYY/MM/DD'>{selectedShoe.release_date}</Moment>
          </p>
          <p>Retail Price: ${selectedShoe.retail_price}</p>
          <p>Colorway: {selectedShoe.colorway}</p>
        </div>
      ) : null}
      <div>
        <table class='table'>
          <thead class='thead-dark'>
            <tr>
              <th scope='col'>Size</th>
              <th scope='col'>Price</th>
              <th scope='col'>Quantity</th>
              <th scope='col' />
            </tr>
          </thead>
          <tbody>
            {selectedShoeVariants
              ? selectedShoeVariants.map(variant => (
                  <tr>
                    <th scope='row'>{variant.size}</th>
                    <td>{variant.price}</td>
                    <td>{variant.quantity}</td>
                    <td>
                      <button className='btn btn-primary btn-sm'>Edit</button>
                      <button className='btn btn-danger btn-sm'>Delete</button>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
        <div>
          <form onSubmit={e => onSubmit(e)}>
            <div className='form-group'>
              <label htmlFor='size'>Size</label>
              <input
                className='form-control'
                type='text'
                name='size'
                value={size}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='price'>Price</label>
              <input
                className='form-control'
                type='text'
                name='price'
                value={price}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='quantity'>Quantity</label>
              <input
                className='form-control'
                type='text'
                name='quantity'
                value={quantity}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='add-variant-button'>
              <input
                type='submit'
                className='btn btn-dark btn-block'
                value='Add Size'
              />
            </div>
          </form>
        </div>
        {/* <button className='btn btn-success'>Add a Size</button> */}
      </div>
    </div>
  );
};

ShoesVariantsPage.propTypes = {
  shoes: PropTypes.object.isRequired,
  getShoesVariants: PropTypes.func.isRequired,
  getShoe: PropTypes.func.isRequired,
  addShoesVariants: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  shoe: state.shoe
});

export default connect(
  mapStateToProps,
  { getShoesVariants, getShoe, addShoesVariants }
)(ShoesVariantsPage);
