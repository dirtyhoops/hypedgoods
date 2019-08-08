import React, { useEffect, Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Redirect, Link } from 'react-router-dom';
import Spinner from '../../layout/Spinner/Spinner';

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
  shoe: { selectedShoeVariants, selectedShoe, isAddingVariantSuccess },
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

  const [toggleVariantForm, setToggleVariantForm] = useState(false);

  const { size, price, quantity } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addShoesVariants({ formData }, shoes_id);
    setFormData('');
    setToggleVariantForm(false);
  };

  if (isAddingVariantSuccess) {
    getShoesVariants(shoes_id);
    return <Redirect to={`/products/shoes/${shoes_id}/variants`} />;
  }

  function toggle() {
    toggleVariantForm
      ? setToggleVariantForm(false)
      : setToggleVariantForm(true);
  }

  return (
    <div className='wrapper-shoesvariantspage'>
      {selectedShoe ? (
        <div className='variant-shoes-info'>
          <div className='variant-shoes-image'>
            <Link to={`/products/shoes/${shoes_id}`}>
              <img src={selectedShoe.images[0]} />
            </Link>
          </div>
          <div className='variant-shoes-text'>
            <p>
              Brand: <span>{selectedShoe.brand}</span>
            </p>
            <p>
              Name: <span>{selectedShoe.name}</span>
            </p>
            <p>
              Release Date:{' '}
              <span>
                <Moment format='YYYY/MM/DD'>{selectedShoe.release_date}</Moment>
              </span>
            </p>
            <p>
              Retail Price: <span>${selectedShoe.retail_price}</span>
            </p>
            <p>
              Colorway: <span>{selectedShoe.colorway}</span>
            </p>
            <button className='btn btn-primary btn-sm'>Edit Shoes</button>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
      <div className='table-variants'>
        <table className='table table-sm'>
          <thead className='thead-dark'>
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
                    <td>${variant.price}</td>
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
        <button className='btn btn-success btn-sm' onClick={toggle}>
          {toggleVariantForm ? <>Hide Form</> : <>Add New Size</>}
        </button>
        {toggleVariantForm ? (
          <div className='variants-form'>
            <form onSubmit={e => onSubmit(e)}>
              <div className='form-row'>
                <div className='form-group col-4'>
                  <label htmlFor='size'>Size</label>
                  <input
                    className='form-control form-control-sm'
                    type='text'
                    name='size'
                    value={size}
                    onChange={e => onChange(e)}
                  />
                </div>
                <div className='form-group col-4'>
                  <label htmlFor='price'>Price</label>
                  <input
                    className='form-control form-control-sm'
                    type='text'
                    name='price'
                    value={price}
                    onChange={e => onChange(e)}
                  />
                </div>
                <div className='form-group col-4'>
                  <label htmlFor='quantity'>Quantity</label>
                  <input
                    className='form-control form-control-sm'
                    type='text'
                    name='quantity'
                    value={quantity}
                    onChange={e => onChange(e)}
                  />
                </div>

                <button type='submit' className='btn btn-dark btn-sm '>
                  Add Size
                </button>
              </div>
            </form>
          </div>
        ) : null}
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
