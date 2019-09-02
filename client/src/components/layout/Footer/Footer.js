import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='wrapper-footer'>
      <div className='footer-container container'>
        <div className='footer-newsletter'>
          <p className='footer-subheader'>get releases updates</p>
          <div className='newsletter-form input-group'>
            <input type='text' placeholder='Your Email Address'></input>
            <button>subscribe</button>
          </div>
        </div>
        <div className='footer-customerservice'>
          <p className='footer-subheader'>customer service</p>
          <ul>
            <li>track your order</li>
            <li>FAQ</li>
            <li>delivery and return</li>
            <li>contact us</li>
          </ul>
        </div>
        <div className='footer-aboutus'>
          <p className='footer-subheader'>about hypedgoods</p>
          <ul>
            <li>our history</li>
            <li>jobs</li>
          </ul>
        </div>
      </div>
      <div className='footer-copyright'>
        <p>&#0169; 2019 Powered and Designed by Daryll Osis</p>
      </div>
    </div>
  );
};

export default Footer;
