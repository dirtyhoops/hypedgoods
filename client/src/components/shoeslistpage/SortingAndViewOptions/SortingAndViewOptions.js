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
          <option value='newarrivals' selected>
            New Arrivals
          </option>
          <option value='highestprice'>Price High</option>
          <option value='lowestprice'>Price Low</option>
          <option value='releasenew'>Release New</option>
          <option value='releaseold'>Release Old</option>
        </select>
      </div>
    </div>
  );
};

export default SortingAndViewOptions;
