import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Redirect, Link } from 'react-router-dom';
import Spinner from '../../layout/Spinner/Spinner';
import ShoesInformation from '../ShoesInformation/ShoesInformation';
import ShoesVariantTable from '../ShoesVariantTable/ShoesVariantTable';
import ShoesVariantsForm from '../ShoesVariantsForm/ShoesVariantsForm';

import {
  getShoesVariants,
  getShoe,
  addShoesVariants,
  deleteShoes,
  deleteVariant
} from '../../../actions/shoe';

import './ShoesVariantsPage.css';

const ShoesVariantsPage = ({
  getShoesVariants,
  getShoe,
  addShoesVariants,
  deleteShoes,
  deleteVariant,
  shoe: {
    selectedShoeVariants,
    selectedShoe,
    isAddingVariantSuccess,
    deletingShoes,
    deletingVariant
  },
  match: {
    params: { shoes_id }
  }
}) => {
  useEffect(() => {
    getShoe(shoes_id);
    getShoesVariants(shoes_id);
  }, []);

  if (isAddingVariantSuccess) {
    getShoesVariants(shoes_id);
    return <Redirect to={`/products/shoes/${shoes_id}/variants`} />;
  }

  // Re-routes after a successful deletion of a shoe
  if (deletingShoes) {
    return <Redirect to={'/products/shoes'} />;
  }

  if (deletingVariant) {
    getShoesVariants(shoes_id);
    return <Redirect to={`/products/shoes/${shoes_id}/variants`} />;
  }

  return (
    <Fragment>
      {selectedShoe ? (
        <ShoesInformation
          selectedShoe={selectedShoe}
          deleteShoes={deleteShoes}
        />
      ) : (
        <Spinner />
      )}
      {selectedShoeVariants ? (
        <ShoesVariantTable
          selectedShoeVariants={selectedShoeVariants}
          selectedShoe={selectedShoe}
          deleteVariant={deleteVariant}
        />
      ) : null}
      <ShoesVariantsForm
        addShoesVariants={addShoesVariants}
        shoes_id={shoes_id}
      />
    </Fragment>
  );
};

ShoesVariantsPage.propTypes = {
  shoes: PropTypes.object.isRequired,
  getShoesVariants: PropTypes.func.isRequired,
  getShoe: PropTypes.func.isRequired,
  addShoesVariants: PropTypes.func.isRequired,
  deleteShoes: PropTypes.func.isRequired,
  deleteVariant: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  shoe: state.shoe
});

export default connect(
  mapStateToProps,
  { getShoesVariants, getShoe, addShoesVariants, deleteShoes, deleteVariant }
)(ShoesVariantsPage);
