import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getShoes, doneLoading } from '../../../actions/shoe';
import {
  updateShoesPerPage,
  filterProductsByBrands
} from '../../../actions/cartAndFilter';
import ShoesListGrid from '../ShoesListGrid/ShoesListGrid';
import Spinner from '../../layout/Spinner/Spinner';
import SortingAndViewOptions from '../SortingAndViewOptions/SortingAndViewOptions';
import ShoesFilter from '../ShoesFilter/ShoesFilter';

import './ShoesListPage.css';

const ShoesListPage = ({
  updateShoesPerPage,
  getShoes,
  shoes,
  shoesPerPage,
  filterProductsByBrands,
  filteredItems,
  loadingShoes,
  doneLoading
}) => {
  useEffect(() => {
    getShoes();
  }, []);

  const changeShoesPerPage = shoesperpage => {
    updateShoesPerPage(shoesperpage);
  };

  if (shoes.length > 0 && !loadingShoes) {
    filterProductsByBrands(shoes, '');
    doneLoading();
    console.log('yeeee');
  }

  return (
    <div className='wrapper-shoelistpage'>
      <button onClick={() => filterProductsByBrands(shoes, 'adidas')}>
        filter by brand adidas
      </button>
      <div className='header-shoelistpage'>
        <h1>all the sneakers</h1>
      </div>

      <SortingAndViewOptions
        changeShoesPerPage={changeShoesPerPage}
        shoesPerPage={shoesPerPage}
        shoes={shoes}
      />

      <div className='container-shoes-list'>
        <ShoesFilter filteredItems={filteredItems} />

        <ShoesListGrid shoesPerPage={shoesPerPage} />
      </div>
    </div>
  );
};

ShoesListPage.propTypes = {
  getShoes: PropTypes.func.isRequired,
  updateShoesPerPage: PropTypes.func.isRequired,
  shoes: PropTypes.array.isRequired,
  filteredItems: PropTypes.array.isRequired,
  doneLoading: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  shoes: state.shoe.shoes,
  shoesPerPage: state.cartAndFilter.shoesPerPage,
  filteredItems: state.cartAndFilter.filteredItems,
  loadingShoes: state.shoe.loadingShoes
});

export default connect(
  mapStateToProps,
  { getShoes, updateShoesPerPage, filterProductsByBrands, doneLoading }
)(ShoesListPage);
