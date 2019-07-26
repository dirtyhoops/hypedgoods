import React from 'react';
import { Link } from 'react-router-dom';

import './ShirtHeroImage.css';

const ShirtHeroImage = () => {
  return (
    <div className='wrapper-shirts-homepage'>
      <div className='wrapper-men-shirt'>
        <div className='men-shirt-image'>
          <img
            src='https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            alt='men shirt hero'
          />
          <div className='men-shirt-button'>
            <Link to='/shirts/men'>
              <button className='btn btn-dark btn-lg'>shop men's shirts</button>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className='wrapper-women-shirt'>
        <div className='women-shirt-image'>
          <img
            src='https://images.pexels.com/photos/2522683/pexels-photo-2522683.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            alt='women shirt hero'
          />
          <div className='women-shirt-button'>
            <Link to='/shirts/women'>
              <button className='btn btn-dark btn-lg'>
                shop women's shirts
              </button>
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ShirtHeroImage;
