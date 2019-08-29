import React, { useState } from 'react';

import './SortingAndViewOptions.css';

const SortingAndViewOptions = props => {
  const {
    shoesPerPage,
    changeShoesPerPage,
    filteredItems,
    filterProductsByBrands,
    sortProducts
  } = props;
  const shoesPerPageNumber = [30, 60, 90];

  const productSort = sortvalue => {
    sortProducts(filteredItems, sortvalue);
  };

  return (
    <div className='container-sorting-options'>
      {/* <button onClick={() => filterProductsByBrands(filteredItems, 'adidas')}>
        filter by brand adidas
      </button>
      <button onClick={() => filterProductsByBrands(filteredItems, 'nike')}>
        filter by brand nike
      </button> */}
      <div className='sorting-left'>
        <p>
          View{' '}
          {shoesPerPageNumber.map(shoesperpage => (
            <span
              className={
                shoesperpage === shoesPerPage && 'shoesperpage-selected'
              }
              key={shoesperpage}
              onClick={() => changeShoesPerPage(shoesperpage)}
            >
              {shoesperpage}{' '}
            </span>
          ))}
        </p>
      </div>
      <div className='sorting-right'>
        Sort by:{' '}
        <select
          className='sortselect'
          onChange={e => productSort(e.target.value)}
        >
          <option selected='selected' value='newarrivals'>
            new arrivals
          </option>
          <option value='highestprice'>price high</option>
          <option value='lowestprice'>price low</option>
          <option value='releasenew'>release new</option>
          <option value='releaseold'>release old</option>
        </select>
      </div>
    </div>
  );
};

export default SortingAndViewOptions;
