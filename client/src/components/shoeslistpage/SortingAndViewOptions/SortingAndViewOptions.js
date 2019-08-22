import React from 'react';

import './SortingAndViewOptions.css';

const SortingAndViewOptions = props => {
  const { shoesPerPage, changeShoesPerPage, shoes } = props;
  const shoesPerPageNumber = [30, 60, 90];

  // const sortedItems_pricelow = []
  //   .concat(shoes)
  //   .sort((a, b) => a.lowest_price - b.lowest_price);

  return (
    <div className='container-sorting-options'>
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
        <select>
          <option value='bestseller'>BEST SELLER</option>
          <option value='pricehigh'>PRICE HIGH</option>
          <option value='pricelow'>PRICE LOW</option>
          <option value='releasenew'>RELEASE NEW</option>
          <option value='releaseold'>RELEASE OLD</option>
        </select>
      </div>
    </div>
  );
};

export default SortingAndViewOptions;
