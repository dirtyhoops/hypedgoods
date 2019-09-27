import {
  SHOE_ERROR,
  UPDATE_CART_ITEM_COUNT,
  UPDATE_SHOES_PER_PAGE,
  FILTER_PRODUCTS_BY_BRANDS,
  SORT_PRODUCTS,
  CHANGE_HAMBURGER
} from './types';

export const updateCartItemCount = itemCount => async dispatch => {
  try {
    dispatch({
      type: UPDATE_CART_ITEM_COUNT,
      payload: itemCount
    });
  } catch (err) {
    dispatch({
      type: SHOE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const updateShoesPerPage = shoesperpage => async dispatch => {
  try {
    dispatch({
      type: UPDATE_SHOES_PER_PAGE,
      payload: shoesperpage
    });
  } catch (err) {
    console.log('updating shoes error');
  }
};

// make the brand append its value to an array that holds the brands and check if shoes are branded by the brands inside the array
export const filterProductsByBrands = (products, brand) => async dispatch => {
  try {
    dispatch({
      type: FILTER_PRODUCTS_BY_BRANDS,
      payload: {
        brands: brand,
        items: brand === '' ? products : products.filter(a => a.brand === brand)
      }
    });
  } catch (err) {
    console.log('errorrrrrrr filtering');
  }
};

export const sortProducts = (products, sort) => async dispatch => {
  let newArray = products.slice();
  if (sort === 'lowestprice') {
    newArray.sort((a, b) => a.lowest_price - b.lowest_price);
  } else if (sort === 'highestprice') {
    newArray.sort((a, b) => b.lowest_price - a.lowest_price);
  } else if (sort === 'releasenew') {
    newArray.sort((a, b) => {
      var dateA = new Date(a.release_date).getTime();
      var dateB = new Date(b.release_date).getTime();
      return dateA > dateB ? -1 : 1;
    });
  } else if (sort === 'releaseold') {
    newArray.sort((a, b) => {
      var dateA = new Date(a.release_date).getTime();
      var dateB = new Date(b.release_date).getTime();
      return dateA < dateB ? -1 : 1;
    });
  } else if (sort === 'newarrivals' || sort === '') {
    newArray.sort((a, b) => {
      var dateA = new Date(a.date_added).getTime();
      var dateB = new Date(b.date_added).getTime();
      return dateA < dateB ? 1 : -1;
    });
  }

  return dispatch({
    type: SORT_PRODUCTS,
    payload: { sort: sort, items: newArray }
  });
};

export const changeHamburger = burger => async dispatch => {
  dispatch({
    type: CHANGE_HAMBURGER,
    payload: burger
  });
};
