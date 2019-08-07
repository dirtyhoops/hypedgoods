import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

import { getShoesVariants, getShoe } from '../../../actions/shoe';

import './ShoesVariantsPage.css';

const ShoesVariantsPage = ({
  getShoesVariants,
  getShoe,
  shoe: { selectedShoeVariants, selectedShoe },
  match: {
    params: { shoes_id }
  }
}) => {
  useEffect(() => {
    getShoe(shoes_id);
    getShoesVariants(shoes_id);
  }, []);

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
        <button className='btn btn-success'>Add a Size</button>
      </div>
    </div>
  );
};

ShoesVariantsPage.propTypes = {
  shoes: PropTypes.object.isRequired,
  getShoesVariants: PropTypes.func.isRequired,
  getShoe: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  shoe: state.shoe
});

export default connect(
  mapStateToProps,
  { getShoesVariants, getShoe }
)(ShoesVariantsPage);
