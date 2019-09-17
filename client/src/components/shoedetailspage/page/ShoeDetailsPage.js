import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import {
  getShoe,
  getShoes,
  clearSelectedShoe,
  getShoesVariants,
  deleteShoes
} from '../../../actions/shoe';

import { updateCartItemCount } from '../../../actions/cartAndFilter';

import ShoeImages from '../ShoeImages/ShoeImages';
import ShoeInfo from '../ShoeInfo/ShoeInfo';
import RelatedShoes from '../RelatedShoes/RelatedShoes';
import RecommendedShoes from '../RecommendedShoes/RecommendedShoes';
import Spinner from '../../layout/Spinner/Spinner';

// import RecommendedShoess from '../RecommendedShoes/RecommendedShoess';

import './ShoeDetailsPage.css';

const ShoeDetailsPage = ({
  getShoe,
  getShoes,
  clearSelectedShoe,
  getShoesVariants,
  updateCartItemCount,
  deleteShoes,
  match: {
    params: { id }
  },
  shoe: { selectedShoe, shoes, selectedShoeVariants, deletingShoes, error },
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

  // Re-routes after a successful deletion of a shoe
  if (deletingShoes) {
    return <Redirect to={'/products/shoes'} />;
  }

  return selectedShoe === null ? (
    error ? (
      <div>
        <p>{error.msg}</p>
      </div>
    ) : (
      <Spinner />
    )
  ) : (
    <Fragment>
      <ShoeImages images={selectedShoe.images} />
      <ShoeInfo
        selectedShoe={selectedShoe}
        selectedShoeVariants={selectedShoeVariants}
        isAdmin={isAdmin}
        updateCartItemCount={updateCartItemCount}
        deleteShoes={deleteShoes}
      />
      <RelatedShoes click={selectShoe} shoeBrand={selectedShoe.brand} />
      <RecommendedShoes recommendedShoes={shoes} click={selectShoe} />
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
  deleteShoes: PropTypes.func,
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
    updateCartItemCount,
    deleteShoes
  }
)(ShoeDetailsPage);
