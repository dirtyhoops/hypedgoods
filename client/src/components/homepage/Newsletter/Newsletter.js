import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className='wrapper-newsletter'>
      <div className='newsletter-text'>
        <p className='newsletter-header'>subscribe to hypegoods newsletter</p>
        <p className='newsletter-subheader'>
          be the first one to know of latest releases
        </p>
      </div>
      <div className='newsletter-form-container'>
        <input type='text' placeholder='Enter Your Email Address'></input>
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
