import React from 'react';
import PropTypes from 'prop-types';

import './ShoesGrid.css';

const Shoe = props => {
  const { id, name, brand, images } = props.shoe;
  return (
    <div class='grid-latestrelease-column col-6 col-lg-4 col-md-4 col-sm-6'>
      <div class='shoes-image'>
        <img src={images[0]} />
      </div>
      <div class='shoes-info'>
        <p>
          {brand} {name}
        </p>
      </div>
    </div>
  );
};

export default Shoe;
