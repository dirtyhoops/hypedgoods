import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import './OrderSummary.css';

const OrderSummary = props => {
  // Gets the cart items from localstorage
  var getCartItems = JSON.parse(localStorage.getItem('itemsArray'));

  // Gets the subtotal of the order(no shipping, no tax) and also saves all products from the localStorage to redux.
  // MAYBE ADD A RETURN VALUE IN THE END. return subtotal
  const {
    saveSubtotal,
    saveProduct,
    checkout: { shipping, taxTotal }
  } = props;

  useEffect(() => {
    const getSubtotal = () => {
      var subTotal = 0;
      if (getCartItems) {
        getCartItems.map(item => {
          subTotal += item.shoe_price;
          saveProduct(
            item.variant_id,
            item.shoe_brand,
            item.shoe_name,
            item.shoe_colorway,
            item.shoe_retail_price,
            item.shoe_price,
            item.shoe_size,
            item.shoe_image,
            item.shoe_id,
            item.variant_quantity,
            item.shoe_total_quantity
          );
        });
      }
      setOrderSubTotal(subTotal);
      saveSubtotal(subTotal);
    };

    getSubtotal();
    checkWindowWidth();
  }, []);
  // remove getSubtotal inside later

  const [orderSubTotal, setOrderSubTotal] = useState(0);
  const [toggleShowOrder, setToggleShowOrder] = useState(false);

  const checkWindowWidth = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth > 768) {
      setToggleShowOrder(true);
    }
  };

  // Toggles for showing/hiding order summary in mobile viewport
  return (
    <div
      className={
        toggleShowOrder
          ? 'itemsummary-container bottomBorder'
          : 'itemsummary-container'
      }
    >
      <div className='header-itemsummary'>
        <h1>order summary</h1>
      </div>
      <div
        className='itemsummary-mobile-toggler'
        onClick={() => setToggleShowOrder(!toggleShowOrder)}
      >
        <div className='itemsummary-mobile-toggler-left'>
          {toggleShowOrder ? (
            <p>
              Hide order summary{' '}
              <span>
                <i className='fa fa-chevron-up'></i>
              </span>
            </p>
          ) : (
            <p>
              Show order summary{' '}
              <span>
                <i className='fa fa-chevron-down'></i>
              </span>
            </p>
          )}
        </div>
        <div className='itemsummary-mobile-toggler-right'>
          <p>
            $
            {(orderSubTotal + shipping + taxTotal)
              .toFixed(2)
              .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
          </p>
        </div>
      </div>
      {/* <CSSTransition
        in={toggleShowOrder}
        timeout={130}
        classNames='display'
        unmountOnExit
      > */}
      {/* 'display' is just a wrapper for the transition */}
      <div className='wrapper-display-transition'>
        {getCartItems && (
          <div className='itemsummary'>
            {getCartItems.map((item, index) => (
              <div key={index} className='item-row'>
                <div className='itemimage'>
                  <img src={item.shoe_image} alt='main_shoe_image' />
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
        )}
        <div className='itemsummary-total'>
          <table>
            <tbody>
              <tr>
                <td className='itemsummarytable-left-col'>subtotal</td>
                <td className='itemsummarytable-right-col'>
                  $
                  {orderSubTotal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                </td>
              </tr>
              <tr>
                <td className='itemsummarytable-left-col'>tax</td>
                <td className='itemsummarytable-right-col'>
                  {taxTotal
                    ? `$${taxTotal
                        .toFixed(2)
                        .replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
                    : 'Will be calculated'}
                </td>
              </tr>
              <tr>
                <td className='itemsummarytable-left-col'>shipping</td>
                <td className='itemsummarytable-right-col'>
                  {shipping > 0
                    ? `$${shipping
                        .toFixed(2)
                        .replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
                    : 'Will be calculated'}
                </td>
              </tr>
              <tr className='table-top-border'>
                <td className='itemsummarytable-left-col'>total</td>
                <td className='summarytotal-text-bold itemsummarytable-right-col'>
                  $
                  {(orderSubTotal + shipping + taxTotal)
                    .toFixed(2)
                    .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                </td>
              </tr>
            </tbody>
          </table>
          <Link to={'/cart'}>
            <button className='btn btn-dark btn-sm return-to-cart-button'>
              Return to cart
            </button>
          </Link>
        </div>
      </div>
      {/* </CSSTransition> */}
    </div>
  );
};

export default OrderSummary;

// .toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
