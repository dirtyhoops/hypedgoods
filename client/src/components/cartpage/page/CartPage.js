import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './CartPage.css';

// @todo:
// 1. takeout the cart-items redux state. take out the action, reducer, types, and just focus on adding all the items into a local storage. pull the informations out of the local storage
// 2. might not even need redux
// 3. take out the reducer/action for addCartItem and just make it a simple onclick function that takes in the variant_id
// 4. add a "selected" class for the size button.
// 5. add a modal that shows the cart on the upper left, and have a "continue shopping" or "go to cart"
// 6. Link to the div/image of the shoe inside the cart items, Link to="/products/shoes/:shoe_id"
// 7. add all the shoe_prices for subtotal
// 8. add a number on top of the cart icon (total items in the cart)
// 9. figure out to display the price as a double with decimal points .00
// 10. create a function that CLEARS THE LOCALSTORAGE, and use it after checkout, or when "CLEAR CART" button is clicked
// 11. Change bootstrap table, and make your own, so it's more customizable and doesnt look too generic
// 12. Change all the buttons too and dont use the bootstrap one
// 13. make the "your cart is empty" div after finishing the cart items
const CartPage = () => {
  var getCartItems = JSON.parse(localStorage.getItem('itemsArray'));

  // to add the total, idea is to keep adding to it every item loop
  const [subtotal, setSubtotal] = useState(0);

  const clearCart = () => {
    localStorage.removeItem('itemsArray');
    console.log('clear cart button clicked');

    window.location.reload();
  };

  return (
    <div className='wrapper-cartpage'>
      {getCartItems ? (
        <>
          <div className='header-cartpage'>
            <h1>CART ITEMS</h1>
          </div>
          <div className='table-cartpage-items'>
            <table className='table'>
              <thead>
                <tr>
                  <th className='table-text-left-align' scope='col'>
                    Product
                  </th>
                  <th className='table-text-left-align' scope='col'>
                    Product Information
                  </th>
                  <th className='table-text-left-align' scope='col'>
                    Unit Price
                  </th>
                  <th className='table-text-center-align' scope='col'>
                    Quantity
                  </th>
                  <th className='table-text-right-align' scope='col'>
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {getCartItems.map((item, index) => (
                  <tr key={index}>
                    <td className='table-text-left-align'>
                      <div className='cart-item-image'>
                        <img src={item.shoe_image} />
                      </div>
                    </td>
                    <td className='table-text-left-align'>
                      <div className='cart-item-information'>
                        <p className='cart-item-information-brand'>
                          {item.shoe_brand}
                        </p>
                        <p className='cart-item-information-name'>
                          {item.shoe_name}
                        </p>
                        <p className='cart-item-information-colorway'>
                          colorway: {item.shoe_colorway}
                        </p>
                        <p className='cart-item-information-size'>
                          US Size: {item.shoe_size}
                        </p>
                        <button className='btn btn-sm btn-danger'>
                          REMOVE
                        </button>
                      </div>
                    </td>
                    <td className='table-text-left-align'>
                      ${item.shoe_price}.00
                    </td>
                    <td className='table-text-center-align'>
                      {item.shoe_order_quantity}
                    </td>
                    <td className='table-text-right-align'>
                      ${item.shoe_price * item.shoe_order_quantity}.00
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='cartpage-summary'>
              <div className='cartpage-summary-subtotal'>
                <p>subtotal: $1500.00</p>
              </div>
              <div className='cartpage-summary-buttons'>
                <button className='btn btn-danger' onClick={() => clearCart()}>
                  Clear Cart
                </button>
                <Link to='/products/shoes'>
                  <button className='btn btn-success'>Continue Shopping</button>
                </Link>
                <button className='btn btn-primary'>Checkout</button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className='cart-empty-box'>
          <p>Your cart is empty</p>
          <Link to='/products/shoes'>
            <button className='btn btn-dark'>Continue Shopping -></button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default connect()(CartPage);