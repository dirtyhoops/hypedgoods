import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getShoes } from '../../../actions/shoe';
import { updateShoesPerPage } from '../../../actions/cartAndFilter';
import ShoesListGrid from '../ShoesListGrid/ShoesListGrid';
import Spinner from '../../layout/Spinner/Spinner';
import SortingAndViewOptions from '../SortingAndViewOptions/SortingAndViewOptions';
import ShoesFilter from '../ShoesFilter/ShoesFilter';

import './ShoesListPage.css';

const ShoesListPage = ({
  updateShoesPerPage,
  getShoes,
  shoes,
  shoesPerPage
}) => {
  useEffect(() => {
    getShoes();
  }, []);

  const changeShoesPerPage = shoesperpage => {
    updateShoesPerPage(shoesperpage);
  };

  return (
    <div className='wrapper-shoelistpage'>
      <div className='header-shoelistpage'>
        <h1>all the sneakers</h1>
      </div>

      <SortingAndViewOptions
        changeShoesPerPage={changeShoesPerPage}
        shoesPerPage={shoesPerPage}
        shoes={shoes}
      />

      <div className='container-shoes-list'>
        <ShoesFilter shoes={shoes} />
        {shoes.length > 0 ? (
          <ShoesListGrid shoes={shoes} shoesPerPage={shoesPerPage} />
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

ShoesListPage.propTypes = {
  getShoes: PropTypes.func.isRequired,
  updateShoesPerPage: PropTypes.func.isRequired,
  shoes: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  shoes: state.shoe.shoes,
  shoesPerPage: state.cartAndFilter.shoesPerPage
});

export default connect(
  mapStateToProps,
  { getShoes, updateShoesPerPage }
)(ShoesListPage);
