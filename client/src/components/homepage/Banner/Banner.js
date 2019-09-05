import React from 'react';
import fastshipping from '../../../images/fastshipping.jpg';
import unbeatableprice from '../../../images/unbeatableprice.jpg';
import unbeatableprice1 from '../../../images/unbeatableprice1.jpg';
import verified from '../../../images/verified.jpg';

import './Banner.css';

const Banner = () => {
  return (
    <div className='wrapper-banner container'>
      <div className='banner-info'>
        <p className='header-banner-info'>why order from hypedgoods?</p>
        {/* <p className='subheader-banner-info'>
          we have unbeatable prices, and all our shoes are verified. No waiting
          on verification, no middle men. you get the shoes the day after you
          order it.
        </p> */}
        <div className='bannerlogos-container'>
          <div className='banner-logo1'>
            <div className='banner-logos-images'>
              <img src={verified} />
            </div>
            <p>all our shoes are verified</p>
          </div>
          <div className='banner-logo2'>
            <div className='banner-logos-images'>
              <img src={unbeatableprice1} />
            </div>
            <p>we have unbeatable prices</p>
          </div>
          <div className='banner-logo3'>
            <div className='banner-logos-images'>
              <img src={fastshipping} />
            </div>
            <p>
              No waiting on verification, no middle men. you get the shoes the
              day after you order it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
