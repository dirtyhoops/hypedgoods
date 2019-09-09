import React from 'react';

import './OrderSummary.css';

const OrderSummary = props => {
  const { orderSubTotal } = props;
  var getCartItems = JSON.parse(localStorage.getItem('itemsArray'));

  return (
    <div className='itemsummary-container'>
      <div className='header-itemsummary'>
        <h1>order summary</h1>
      </div>
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
              <tbody>
                <tr>
                  <td className='itemsummarytable-left-col'>subtotal</td>
                  <td className='itemsummarytable-right-col'>
                    ${orderSubTotal}.00
                  </td>
                </tr>
                <tr>
                  <td className='itemsummarytable-left-col'>shipping</td>
                  <td className='itemsummarytable-right-col'>$20.00</td>
                </tr>
                <tr className='table-top-border'>
                  <td className='itemsummarytable-left-col'>total</td>
                  <td className='summarytotal-text-bold itemsummarytable-right-col'>
                    ${orderSubTotal + 20}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className='noitemsummary'>
          <p>cart is empty, continue shopping</p>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
