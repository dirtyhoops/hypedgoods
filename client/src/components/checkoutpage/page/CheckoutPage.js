import React from 'react';
import { Link } from 'react-router-dom';

import './CheckoutPage.css';

const CheckoutPage = () => {
  var getCartItems = JSON.parse(localStorage.getItem('itemsArray'));

  const getSubtotal = items => {
    var subTotal = 0;
    items.map(item => (subTotal += item.shoe_price));
    return subTotal;
  };

  return (
    <div className='wrapper-checkoutpage container'>
      <div className='contactinformation-container'>aaa</div>
      <div className='itemsummary-container'>
        {getCartItems ? (
          <>
            <div className='itemsummary'>
              {getCartItems.map((item, index) => (
                <div key={index} className='item-row'>
                  <div className='itemimage'>
                    <img src={item.shoe_image} />
                  </div>
                  <div className='iteminfo'>
                    <p className='uppercase bolder'>{item.shoe_brand}</p>
                    <p className='capitalize'>{item.shoe_name}</p>
                    <p>US Size: {item.shoe_size}</p>
                  </div>
                  <div className='itemtotal'>
                    <p className='uppercase'>quantity</p>
                    <p>{item.shoe_order_quantity}</p>
                    <p className='uppercase'>total</p>
                    <p>${item.shoe_order_quantity * item.shoe_price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className='itemsummary-total'>
              <p>subtotal: ${getSubtotal(getCartItems)}</p>
            </div>
          </>
        ) : (
          <div className='noitemsummary'>
            <p>cart is empty, continue shopping</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
