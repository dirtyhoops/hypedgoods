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
  addShoesVariants
} from '../../../actions/shoe';

import './ShoesVariantsPage.css';

const ShoesVariantsPage = ({
  getShoesVariants,
  getShoe,
  addShoesVariants,
  shoe: { selectedShoeVariants, selectedShoe, isAddingVariantSuccess },
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

  return (
    <Fragment>
      {selectedShoe ? (
        <ShoesInformation selectedShoe={selectedShoe} />
      ) : (
        <Spinner />
      )}
      {selectedShoeVariants ? (
        <ShoesVariantTable selectedShoeVariants={selectedShoeVariants} />
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
  addShoesVariants: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  shoe: state.shoe
});

export default connect(
  mapStateToProps,
  { getShoesVariants, getShoe, addShoesVariants }
)(ShoesVariantsPage);
