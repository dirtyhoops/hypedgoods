import React from 'react';

import './Banner.css';

const Banner = () => {
  return (
    <div className='wrapper-banner container'>
      <div className='banner-info'>
        <p className='header-banner-info'>why order from hypedgoods?</p>
        <p className='subheader-banner-info'>
          we have competitive prices, and all our shoes are verified. No waiting
          on verification, no middle men. you get the shoes the day after you
          order it.
        </p>
      </div>
    </div>
  );
};

export default Banner;
