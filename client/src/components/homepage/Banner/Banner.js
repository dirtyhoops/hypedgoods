import React from 'react';

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
              <img src='https://previews.123rf.com/images/lkeskinen/lkeskinen1701/lkeskinen170105374/68581266-verified-stamp-rubber-grunge.jpg' />
            </div>
            <p>all our shoes are verified</p>
          </div>
          <div className='banner-logo2'>
            <div className='banner-logos-images'>
              <img src='https://cdn5.vectorstock.com/i/1000x1000/68/79/unbeatable-prices-rubber-stamp-vector-13486879.jpg' />
            </div>

            <p>we have unbeatable prices</p>
          </div>
          <div className='banner-logo3'>
            <div className='banner-logos-images'>
              <img src='https://previews.123rf.com/images/lkeskinen/lkeskinen1705/lkeskinen170509353/79029630-fast-shipping-rubber-stamp.jpg' />
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
