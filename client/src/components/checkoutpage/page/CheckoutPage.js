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

  // @TODO:
  // 1. make the itemsummary a table instead of div

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
                    <p className='capitalize p-margintop2'>{item.shoe_name}</p>
                    <p className='capitalize p-margintop mobile-hide'>
                      colorway: {item.shoe_colorway}
                    </p>
                    <p className='p-margintop'>US Size: {item.shoe_size}</p>
                  </div>
                  <div className='itemtotal'>
                    <p className='uppercase'>qty</p>
                    <p className='bold p-margintop3'>
                      {item.shoe_order_quantity}
                    </p>
                    <p className='uppercase'>total</p>
                    <p className='bold p-margintop3'>
                      ${item.shoe_order_quantity * item.shoe_price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className='itemsummary-total'>
              <table>
                <tr>
                  <td className='itemsummarytable-left-col'>subtotal</td>
                  <td>${getSubtotal(getCartItems)}.00</td>
                </tr>
                <tr>
                  <td className='itemsummarytable-left-col'>shipping</td>
                  <td>$20.00</td>
                </tr>
                <tr className='table-top-border'>
                  <td className='itemsummarytable-left-col'>total</td>
                  <td className='summarytotal-text-bold'>
                    ${getSubtotal(getCartItems)}
                  </td>
                </tr>
              </table>
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
