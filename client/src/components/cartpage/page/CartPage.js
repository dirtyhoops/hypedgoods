import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './CartPage.css';

// @todo:
// 1. takeout the cart-items redux state. take out the action, reducer, types, and just focus on adding all the items into a local storage. pull the informations out of the local storage
// 1. might not even need redux
const CartPage = ({ items }) => {
  var getCartItems = JSON.parse(localStorage.getItem('itemsArray'));

  console.log(getCartItems);

  return (
    <div>
      <h1>CART ITEMS</h1>
      {getCartItems
        ? getCartItems.map((item, index) => (
            <li key={index}>
              {item.variant_id} - {item.shoe_brand} - {item.shoe_name} -{' '}
              {item.shoe_size} - ${item.shoe_price}
            </li>
          ))
        : null}
    </div>
  );
};

CartPage.propTypes = {
  items: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  items: state.cart.items
});

export default connect(mapStateToProps)(CartPage);
