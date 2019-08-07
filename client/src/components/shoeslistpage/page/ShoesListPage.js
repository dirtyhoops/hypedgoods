import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getShoes } from '../../../actions/shoe';
import ShoesListGrid from '../ShoesListGrid/ShoesListGrid';

import './ShoesListPage.css';

const ShoesListPage = ({ getShoes }) => {
  useEffect(() => {
    getShoes();
  }, []);

  return (
    <div className='wrapper-shoelistpage'>
      <div className='header-shoelistpage'>
        <h1>all the sneakers</h1>
      </div>
      {/* maybe takeout container-sorting options later */}
      <div className='container-sorting-options'>
        <div className='sorting-left'>
          <p>view 15 30 45</p>
        </div>
        <div className='sorting-right'>
          Sort by:
          <select>
            <option value='bestseller'>BEST SELLER</option>
            <option value='pricehigh'>PRICE HIGH</option>
            <option value='pricelow'>PRICE LOW</option>
            <option value='releasenew'>RELEASE NEW</option>
            <option value='releaseold'>RELEASE OLD</option>
          </select>
        </div>
      </div>
      <div className='container-shoes-list'>
        <div className='shoes-list-filter'>
          <div className='show-filter-button'>
            <h1>show button</h1>
          </div>
        </div>
        <ShoesListGrid />
      </div>
    </div>
  );
};

ShoesListPage.propTypes = {
  getShoes: PropTypes.func.isRequired
};

export default connect(
  null,
  { getShoes }
)(ShoesListPage);
