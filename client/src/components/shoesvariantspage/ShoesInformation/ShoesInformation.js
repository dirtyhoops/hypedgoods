import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import './ShoesInformation.css';

const ShoeInformation = props => {
  const {
    _id,
    brand,
    name,
    images,
    release_date,
    retail_price,
    colorway
  } = props.selectedShoe;

  return (
    <div className='variant-shoes-info'>
      <div className='variant-shoes-image'>
        <Link to={`/products/shoes/${_id}`}>
          <img src={images[0]} />
        </Link>
      </div>
      <div className='variant-shoes-text'>
        <p>
          Brand: <span>{brand}</span>
        </p>
        <p>
          Name: <span>{name}</span>
        </p>
        <p>
          Release Date:{' '}
          <span>
            <Moment format='YYYY/MM/DD'>{release_date}</Moment>
          </span>
        </p>
        <p>
          Retail Price: <span>${retail_price}</span>
        </p>
        <p>
          Colorway: <span>{colorway}</span>
        </p>
        <button className='btn btn-primary btn-sm'>Edit Shoes</button>
      </div>
    </div>
  );
};

export default ShoeInformation;
