import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './ShoesListGrid.css';

const Shoe = ({ shoe: { _id, brand, name, retail_price, images } }) => {
  return (
    <div className='shoes-grid-column col-6 col-lg-4 col-md-4 col-sm-6'>
      <Link to={`/products/shoes/${_id}`}>
        <div className='shoes-list-image'>
          <img
            src={images[0]}
            alt='main_shoe_image'
            onMouseOver={e => (e.currentTarget.src = `${images[1]}`)}
            onMouseOut={e => (e.currentTarget.src = `${images[0]}`)}
          />
        </div>
        <div className='shoes-list-info'>
          <p className='shoes-list-brand'>{brand}</p>
          <p className='shoes-list-name'>{name}</p>
          <p className='shoes-list-price'>${retail_price}+</p>
        </div>
      </Link>
    </div>
  );
};

Shoe.propTypes = {
  shoe: PropTypes.object.isRequired
};

export default Shoe;
