import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './ShoesGrid.css';

const Shoe = ({ shoe: { _id, name, brand, images } }) => {
  return (
    <div className='grid-latestrelease-column col-6 col-lg-4 col-md-4 col-sm-6'>
      <Link to={`/products/shoes/${_id}`}>
        <div className='shoes-image'>
          <img src={images[0]} />
        </div>
        <div className='shoes-info'>
          <p>
            {brand} {name}
          </p>
        </div>
      </Link>
    </div>
  );
};

Shoe.propTypes = {
  shoe: PropTypes.object.isRequired
};

export default Shoe;
