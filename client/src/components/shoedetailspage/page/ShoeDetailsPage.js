import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getShoe,
  getShoes,
  clearSelectedShoe,
  getShoesVariants
} from '../../../actions/shoe';

import { updateCartItemCount } from '../../../actions/cartAndFilter';

import ShoeImages from '../ShoeImages/ShoeImages';
import ShoeInfo from '../ShoeInfo/ShoeInfo';
import RelatedShoes from '../RelatedShoes/RelatedShoes';
import RecommendedShoes from '../RecommendedShoes/RecommendedShoes';
import Spinner from '../../layout/Spinner/Spinner';

import RecommendedShoess from '../RecommendedShoes/RecommendedShoess';

import './ShoeDetailsPage.css';

const ShoeDetailsPage = ({
  getShoe,
  getShoes,
  clearSelectedShoe,
  getShoesVariants,
  updateCartItemCount,
  match: {
    params: { id }
  },
  shoe: { selectedShoe, shoes, selectedShoeVariants },
  auth: { isAdmin }
}) => {
  // gets the selected shoes and loads the data to this page
  useEffect(() => {
    selectShoe(id);
    getShoes();
  }, []);

  const selectShoe = id => {
    clearSelectedShoe();
    getShoe(id);
    getShoesVariants(id);
  };

  return selectedShoe === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <ShoeImages images={selectedShoe.images} />
      <ShoeInfo
        selectedShoe={selectedShoe}
        selectedShoeVariants={selectedShoeVariants}
        isAdmin={isAdmin}
        updateCartItemCount={updateCartItemCount}
      />
      {/* <RecommendedShoes recommendedShoes={shoes} click={selectShoe} /> */}
      {/* <RelatedShoes click={selectShoe} shoeBrand={selectedShoe.brand} /> */}
      <RelatedShoes click={selectShoe} shoeBrand={selectedShoe.brand} />
      <RecommendedShoess recommendedShoes={shoes} click={selectShoe} />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  shoe: state.shoe,
  auth: state.auth
});

//maybe change the function to isRequired later
ShoeDetailsPage.propTypes = {
  getShoe: PropTypes.func,
  getShoes: PropTypes.func,
  getShoesVariants: PropTypes.func.isRequired,
  updateCartItemCount: PropTypes.func.isRequired,
  clearSelectedShoe: PropTypes.func,
  shoe: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  {
    getShoe,
    getShoes,
    clearSelectedShoe,
    getShoesVariants,
    updateCartItemCount
  }
)(ShoeDetailsPage);
