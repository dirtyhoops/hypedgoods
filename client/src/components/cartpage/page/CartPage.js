import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import store from '../../../store';
import { updateCartItemCount } from '../../../actions/cartAndFilter';

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
// 14. make sure to check if getCartItems.length < 0 and it's not null, display continue shopping

// MOBILE PAGE
// 14. change the font with the font that looks good BOLD
// 15. change the button
const CartPage = props => {
  var getCartItems = JSON.parse(localStorage.getItem('itemsArray'));

  const clearCart = () => {
    localStorage.removeItem('itemsArray');
    console.log('clear cart button clicked');
    window.location.reload();
  };

  const getSubtotal = items => {
    var subTotal = 0;
    items.map(item => (subTotal += item.shoe_price));
    return subTotal;
  };

  const removeItem = itemIndex => {
    console.log(itemIndex);

    getCartItems.splice(itemIndex, 1);
    localStorage.setItem('itemsArray', JSON.stringify(getCartItems));
    store.dispatch(updateCartItemCount(getCartItems.length));
    props.history.push('/cart');
  };

  return (
    <div className='wrapper-cartpage'>
      {getCartItems && getCartItems.length > 0 ? (
        <>
          <div className='cart-landscape'>
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
                        <Link to={`/products/shoes/${item.shoe_id}`}>
                          <div className='cart-item-image'>
                            <img src={item.shoe_image} />
                          </div>
                        </Link>
                      </td>
                      {/* this is the whole product information (brand, name, colorway, size, and remove button) */}
                      <td className='table-text-left-align'>
                        <div>
                          <table className='subtable-cart-iteminfo'>
                            <tbody>
                              <tr>
                                <td>
                                  <p className='uppercase bold p-nomargin'>
                                    {item.shoe_brand}
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p className='capitalize  p-lessmargin'>
                                    {item.shoe_name}
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p className='capitalize  p-lessmargin'>
                                    colorway: {item.shoe_colorway}
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p className='capitalize  p-lessmargin'>
                                    US Size: {item.shoe_size}
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <button
                                    onClick={() => removeItem(index)}
                                    className='button-removecartitem'
                                  >
                                    Remove
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        {/* <div className='cart-item-information'>
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
                          <button onClick={() => removeItem(index)}>
                            Remove
                          </button>
                        </div> */}
                      </td>
                      <td className='table-text-left-align'>
                        $
                        {item.shoe_price
                          .toFixed(2)
                          .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                      </td>
                      <td className='table-text-center-align'>
                        {item.shoe_order_quantity}
                      </td>
                      <td className='table-text-right-align'>
                        $
                        {(item.shoe_price * item.shoe_order_quantity)
                          .toFixed(2)
                          .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className='cartpage-summary'>
                <div className='cartpage-summary-subtotal'>
                  <p className='subtotal-text'>
                    subtotal: $
                    {getSubtotal(getCartItems)
                      .toFixed(2)
                      .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                  </p>
                  <p className='taxes-shipping-text'>
                    Taxes and Shipping calculated in checkout
                  </p>
                </div>
                <div className='cartpage-summary-buttons'>
                  <button
                    className='btn btn-danger btn-sm'
                    onClick={() => clearCart()}
                  >
                    Clear Cart
                  </button>
                  <Link to='/products/shoes'>
                    <button className='btn btn-success btn-sm'>
                      Continue Shopping
                    </button>
                  </Link>
                  <Link to={'/checkout'}>
                    <button className='btn btn-primary btn-sm'>Checkout</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='cart-mobile'>
            <div className='header-cartpage-mobile'>
              <h1>my cart</h1>
            </div>
            <div className='cartpage-summary-mobile'>
              <table className='table-summary-mobile'>
                <thead>
                  <tr>
                    <th className='table-left-mobile'>summary</th>
                    <th className='table-right-mobile'>
                      {getCartItems.length} items
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='separator' colSpan='2' />
                  <tr>
                    <td className='table-left-mobile'>subtotal</td>
                    <td className='table-right-mobile'>
                      ${getSubtotal(getCartItems)}.00
                    </td>
                  </tr>
                  <tr>
                    <td className='table-left-mobile'>shipping</td>
                    <td className='table-right-mobile'>
                      Calculated at checkout
                    </td>
                  </tr>
                  <tr>
                    <td className='table-left-mobile'>tax</td>
                    <td className='table-right-mobile'>
                      Calculated at checkout
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='checkout-button-mobile'>
              <Link to={'/checkout'}>
                <button className='btn btn-dark btn-block'>
                  Continue to Checkout
                </button>
              </Link>
            </div>
            <div className='cart-item-container-mobile'>
              {getCartItems.map((item, index) => (
                <div key={index} className='cart-item-mobile'>
                  <div className='cart-item-remove'>
                    <button onClick={() => removeItem(index)}>
                      <i className='fa fa-times' />
                    </button>
                  </div>

                  <Link to={`/products/shoes/${item.shoe_id}`}>
                    <img src={item.shoe_image} />
                  </Link>
                  <div className='cart-item-mobile-info'>
                    <div className='cart-item-mobile-info-left'>
                      <p className='cart-item-uppercase cart-item-bolder'>
                        {item.shoe_brand}
                      </p>
                      <p className='cart-item-capitalize'>{item.shoe_name}</p>
                      <p className='cart-item-capitalize'>
                        colorway: {item.shoe_colorway}
                      </p>
                      <p className='cart-item-capitalize'>
                        US Size: {item.shoe_size}
                      </p>
                    </div>
                    <div className='cart-item-mobile-info-right'>
                      <p className='cart-item-color-gray'>QTY</p>
                      <p className='cart-item-bold'>
                        {item.shoe_order_quantity}
                      </p>
                      <p className='cart-item-color-gray'>Price</p>
                      <p className='cart-item-bold'>${item.shoe_price}.00</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='checkout-button-mobile'>
              <Link to={'/checkout'}>
                <button className='btn btn-dark btn-lg btn-block'>
                  Continue to Checkout
                </button>
              </Link>
              <button
                className='btn btn-danger btn-lg btn-block'
                onClick={() => clearCart()}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className='cart-empty-box'>
          <p>Your cart is empty</p>
          <Link to='/products/shoes'>
            <button className='btn btn-dark'>Continue Shopping</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default withRouter(CartPage);

// // Addition
// if(window.localStorage){
//   localStorage.setItem('myapp-' + new Date().getTime(), 'my value');
// }

// // Removal of all expired items
// if(window.localStorage){

//   // two mins - (1000 * 60 * 20) would be 20 mins
//   var expiryTime = new Date().getTime() - (1000 * 60 * 2);

//   var deleteRows = [];
//   for(var i=0; i < localStorage.length; i++){
//       var key = localStorage.key(i);
//       var partsArray = key.split('-');
//       // The last value will be a timestamp
//       var lastRow = partsArray[partsArray.length - 1];

//       if(lastRow && parseInt(lastRow) < expiryTime){
//           deleteRows.push(key);
//       }
//   }
//   // delete old data
//   for(var j=0; j < deleteRows.length; j++){
//       localStorage.removeItem(deleteRows[j]);
//   }
// }
