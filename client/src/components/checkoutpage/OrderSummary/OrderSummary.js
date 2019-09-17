import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './OrderSummary.css';

const OrderSummary = props => {
  useEffect(() => {
    getSubtotal();
  }, []);

  const {
    saveSubtotal,
    saveProduct,
    checkout: { shipping, taxTotal }
  } = props;

  const [orderSubTotal, setOrderSubTotal] = useState(0);

  // Gets the cart items from localstorage
  var getCartItems = JSON.parse(localStorage.getItem('itemsArray'));

  // Gets the subtotal of the order(no shipping, no tax)
  const getSubtotal = () => {
    var subTotal = 0;
    getCartItems.map(item => {
      subTotal += item.shoe_price;
      saveProduct(
        item.variant_id,
        item.shoe_brand,
        item.shoe_name,
        item.shoe_colorway,
        item.shoe_retail_price,
        item.shoe_price,
        item.shoe_size
      );
    });
    setOrderSubTotal(subTotal);
    saveSubtotal(subTotal);
  };

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
                    $
                    {(item.shoe_order_quantity * item.shoe_price)
                      .toFixed(2)
                      .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
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
                    $
                    {orderSubTotal
                      .toFixed(2)
                      .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                  </td>
                </tr>
                <tr>
                  <td className='itemsummarytable-left-col'>tax</td>
                  <td className='itemsummarytable-right-col'>
                    {taxTotal
                      ? `$${taxTotal
                          .toFixed(2)
                          .replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
                      : 'will be calculated'}
                  </td>
                </tr>
                <tr>
                  <td className='itemsummarytable-left-col'>shipping</td>
                  <td className='itemsummarytable-right-col'>
                    {shipping > 0
                      ? `$${shipping
                          .toFixed(2)
                          .replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
                      : 'will be calculated'}
                  </td>
                </tr>
                <tr className='table-top-border'>
                  <td className='itemsummarytable-left-col'>total</td>
                  <td className='summarytotal-text-bold itemsummarytable-right-col'>
                    $
                    {(orderSubTotal + shipping)
                      .toFixed(2)
                      .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                  </td>
                </tr>
              </tbody>
            </table>
            <Link to={'/cart'}>
              <button className='btn btn-primary btn-sm return-to-cart-button'>
                Return to cart
              </button>
            </Link>
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

// .toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
