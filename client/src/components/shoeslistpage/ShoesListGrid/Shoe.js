import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './ShoesListGrid.css';

const Shoe = ({ shoe: { _id, brand, name, retail_price, images } }) => {
  return (
    <div class='shoes-grid-column col-6 col-lg-4 col-md-4 col-sm-6'>
      <Link to={`/products/shoes/${_id}`}>
        <div class='shoes-list-image'>
          <img src={images[0]} />
        </div>
        <div class='shoes-list-info'>
          <p class='shoes-list-brand'>{brand}</p>
          <p class='shoes-list-name'>{name}</p>
          <p class='shoes-list-price'>{retail_price}+</p>
        </div>
      </Link>
    </div>
  );
};

Shoe.propTypes = {
  shoe: PropTypes.object.isRequired
};

export default Shoe;
