import React from 'react';
import fastshipping from '../../../images/fastshipping.jpg';
import unbeatableprice from '../../../images/unbeatableprice1.jpg';
import verified from '../../../images/verified.jpg';

import './Banner.css';

const Banner = () => {
  return (
    <div className='wrapper-banner container'>
      <div className='banner-info'>
        <p className='header-banner-info'>why order from hypedgoods?</p>
        <div className='bannerlogos-container'>
          <div className='banner-logo1'>
            <div className='banner-logos-images'>
              <img src={verified} alt='verifiedimage_logo' />
            </div>
            <p>all our shoes are verified</p>
          </div>
          <div className='banner-logo2'>
            <div className='banner-logos-images'>
              <img src={unbeatableprice} alt='unbeatablepriceimage_logo' />
            </div>
            <p>we have unbeatable prices</p>
          </div>
          <div className='banner-logo3'>
            <div className='banner-logos-images'>
              <img src={fastshipping} alt='fastshippingimage_logo' />
            </div>
            <p>
              No waiting on verification. No middle man. Shoes will be shipped
              once order is placed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
