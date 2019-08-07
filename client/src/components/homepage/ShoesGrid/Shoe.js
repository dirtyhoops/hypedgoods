import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './ShoesGrid.css';

const Shoe = ({ shoe: { _id, name, brand, images, retail_price } }) => {
  return (
    <div className='grid-latestrelease-column col-6 col-lg-4 col-md-4 col-sm-6'>
      <Link to={`/products/shoes/${_id}`}>
        <div className='shoes-image'>
          <img src={images[0]} alt='main_image' />
        </div>
        <div className='shoes-info'>
          <p className='shoes-info-brand'>{brand}</p>
          <p className='shoes-info-name'> {name}</p>
          <p className='shoes-info-price'>{retail_price}+</p>
        </div>
      </Link>
    </div>
  );
};

Shoe.propTypes = {
  shoe: PropTypes.object.isRequired
};

export default Shoe;
