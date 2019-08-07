import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getShoesVariants } from '../../../actions/shoe';

import './ShoesVariantsPage.css';

const ShoesVariantsPage = ({
  getShoesVariants,
  shoe: { selectedShoeVariants },
  match: {
    params: { shoes_id }
  }
}) => {
  useEffect(() => {
    getShoesVariants(shoes_id);
  }, []);

  return (
    <div>
      {selectedShoeVariants
        ? selectedShoeVariants.map(variant => (
            <p>
              {variant.size} - {variant.price} - {variant.quantity}
            </p>
          ))
        : null}
    </div>
  );
};

ShoesVariantsPage.propTypes = {
  shoes: PropTypes.object.isRequired,
  getShoesVariants: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  shoe: state.shoe
});

export default connect(
  mapStateToProps,
  { getShoesVariants }
)(ShoesVariantsPage);
