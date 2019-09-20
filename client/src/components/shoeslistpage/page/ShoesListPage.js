import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getShoes, doneLoading } from '../../../actions/shoe';
import {
  updateShoesPerPage,
  filterProductsByBrands,
  sortProducts
} from '../../../actions/cartAndFilter';
import ShoesListGrid from '../ShoesListGrid/ShoesListGrid';
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
  doneLoading,
  sortProducts
}) => {
  useEffect(() => {
    getShoes();
  }, [getShoes]);

  const changeShoesPerPage = shoesperpage => {
    updateShoesPerPage(shoesperpage);
  };

  // TRY TO CHANGE THIS. MAYBE DONT LOAD IT ON EVERY REFRESH
  if (shoes.length > 0 && !loadingShoes) {
    filterProductsByBrands(shoes, '');
    doneLoading();
  }

  // if (filteredItems.length > 0) {
  //   sortProducts(filteredItems, '');
  // }

  // @todo
  // 1. the header-shoelistpage make it dependant on what the user clicks (new arrivals, BRAND, all sneakers)

  return (
    <div className='wrapper-shoelistpage'>
      <div className='header-shoelistpage'>
        <h1>all sneakers</h1>
      </div>

      <SortingAndViewOptions
        changeShoesPerPage={changeShoesPerPage}
        shoesPerPage={shoesPerPage}
        shoes={shoes}
        filterProductsByBrands={filterProductsByBrands}
        sortProducts={sortProducts}
        filteredItems={filteredItems}
      />

      <ShoesFilter filteredItems={filteredItems} />
      <ShoesListGrid />
    </div>
  );
};

ShoesListPage.propTypes = {
  getShoes: PropTypes.func.isRequired,
  updateShoesPerPage: PropTypes.func.isRequired,
  shoes: PropTypes.array.isRequired,
  filteredItems: PropTypes.array.isRequired,
  doneLoading: PropTypes.func.isRequired,
  sortProducts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  shoes: state.shoe.shoes,
  shoesPerPage: state.cartAndFilter.shoesPerPage,
  filteredItems: state.cartAndFilter.filteredItems,
  loadingShoes: state.shoe.loadingShoes,
  sort: state.cartAndFilter.sort
});

export default connect(
  mapStateToProps,
  {
    getShoes,
    updateShoesPerPage,
    filterProductsByBrands,
    doneLoading,
    sortProducts
  }
)(ShoesListPage);
